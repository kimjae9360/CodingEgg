import React, { useState, useEffect, useCallback } from 'react';
import SkillTreeBoard from './components/SkillTreeBoard';
import InteractiveLessonBoard from './components/InteractiveLessonBoard';
import LandingScreen from './components/LandingScreen';
import CourseSelectScreen from './components/CourseSelectScreen';
import ConfirmModal from './components/ConfirmModal';
import { LeaderboardScreen, StoreScreen, ProfileScreen } from './components/PlaceholderScreens';
import { getCourse } from './data/courses';
import { loadState, saveState, applyLessonCompletion, regenHearts, loseHeart, refillHearts, MAX_HEARTS, XP_PER_LESSON, GEMS_PER_LESSON, addWrongAnswer, resolveWrongAnswer, togglePremium, addFriend, updateProfile, claimAchievement } from './lib/storage';
import GuidebookPanel from './components/GuidebookPanel';
import { Home, Trophy, Store, User, Flame, Gem, Heart, Moon, Sun, Lock, X, BookOpen } from 'lucide-react';

export default function App() {
  const [save, setSave] = useState(() => loadState());
  const [view, setView] = useState(() => {
    if (!save.profileName) return 'login';
    if (!save.selectedCourseId) return 'courses';
    return 'tree';
  });
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [skipTest, setSkipTest] = useState(null); // { nodesToComplete, node } | null — active only during a skip test
  const [examSession, setExamSession] = useState(null); // { node } | null — active only during a tier final exam
  const [pendingExit, setPendingExit] = useState(false); // exit-lesson confirm modal
  const [toast, setToast] = useState(null);
  const [nudgeDismissed, setNudgeDismissed] = useState(false); // streak reminder banner, dismissible per session
  
  const [showGuidebook, setShowGuidebook] = useState(false);
  const [appSectionIdx, setAppSectionIdx] = useState(0);

  const theme = save.theme;
  const isDark = theme === 'dark';
  const course = getCourse(save.selectedCourseId || 'python');
  const trackData = course.track;

  // Persist to localStorage whenever the save data changes.
  useEffect(() => {
    saveState(save);
  }, [save]);

  // Regenerate hearts over time while the app is open.
  useEffect(() => {
    const id = setInterval(() => {
      setSave(prev => regenHearts(prev));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-dismiss toast notices.
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(id);
  }, [toast]);

  const handleLogin = (name) => {
    setSave(prev => ({ ...prev, profileName: name || '코딩 꿈나무' }));
    setView(save.selectedCourseId ? 'tree' : 'courses');
  };

  const [showGiftModal, setShowGiftModal] = useState(false);

  const acceptGift = () => {
    setSave(prev => ({ ...prev, hearts: 5, heartsUpdatedAt: Date.now() }));
    setShowGiftModal(false);
    setToast('🎁 하트 5개가 지급되었습니다! 다시 시도해주세요.');
  };

  const handleSelectCourse = (courseId) => {
    const picked = getCourse(courseId);
    if (!picked.available) return;
    setSave(prev => {
      const enrolled = prev.enrolledCourses || [];
      // Remove it if it exists so we can move it to the front
      const filtered = enrolled.filter(c => c !== courseId);
      return { 
        ...prev, 
        selectedCourseId: courseId,
        enrolledCourses: [courseId, ...filtered]
      };
    });
    setView('tree');
  };

  const handleNodeClick = (nodeId) => {
    const fresh = regenHearts(save);
    if (fresh.hearts <= 0) {
      setSave(fresh);
      setShowGiftModal(true);
      return;
    }
    setSave(fresh);
    setSkipTest(null);
    setSelectedNodeId(nodeId);
    setView('lesson');
  };

  const handleLessonComplete = (result) => {
    setSave(prev => {
      if (!selectedNodeId || prev.completedNodes.includes(selectedNodeId)) return prev;

      let nodeLessonsLength = 4; // fallback
      for (const section of trackData.sections) {
        const found = section.nodes.find(n => n.id === selectedNodeId);
        if (found) {
           nodeLessonsLength = found.lessons.length;
           break;
        }
      }

      const currentProgress = prev.nodeProgress?.[selectedNodeId] || 0;
      const newProgress = currentProgress + 1;
      const nodeProgress = { ...(prev.nodeProgress || {}), [selectedNodeId]: newProgress };
      
      let withNode = { ...prev, nodeProgress };
      
      if (newProgress >= nodeLessonsLength) {
         withNode = { ...withNode, completedNodes: [...(prev.completedNodes || []), selectedNodeId] };
         if (result?.accuracy === 100 && !withNode.perfectNodes?.includes(selectedNodeId)) {
            withNode = { ...withNode, perfectNodes: [...(prev.perfectNodes || []), selectedNodeId] };
         }
      }

      return applyLessonCompletion(withNode, result?.xpEarned, result?.gemsEarned);
    });
    if (!result?.continueNextLesson) {
      setView('tree');
    }
  };

  const handleLoseHeart = useCallback(() => {
    setSave(prev => loseHeart(prev));
  }, []);

  const handleClaimAchievement = useCallback((id, reward) => {
    setSave(prev => claimAchievement(prev, id, reward));
    setToast({ icon: '💎', title: '보상 획득!', message: `${reward} 보석을 받았습니다.` });
  }, []);

  // Real Duolingo-style "jump here?": instead of an instant free skip, the
  // learner has to pass a graded mini-quiz sampled from everything they'd
  // be skipping. Only on success are those units marked complete.
  const handleRequestSkipTest = (sectionIdx) => {
    const fresh = regenHearts(save);
    if (fresh.hearts <= 0) {
      setSave(fresh);
      setShowGiftModal(true);
      return;
    }

    let pool = [];
    const nodesToComplete = [];
    for (let i = 0; i <= sectionIdx; i++) {
      const section = trackData.sections[i];
      if (!section) continue;
      for (const node of section.nodes) {
        nodesToComplete.push(node.id);
        for (const lesson of node.lessons) {
          const resolved = Array.isArray(lesson) ? lesson[0] : lesson;
          if (resolved.type === 'quiz_multiple_choice' || resolved.type === 'quiz_code') {
            pool.push(resolved);
          }
        }
      }
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const sampleSize = Math.min(8, shuffled.length);
    const sampledSteps = shuffled.slice(0, sampleSize);

    if (sampledSteps.length === 0) return;

    setSave(fresh);
    setSkipTest({
      nodesToComplete,
      node: { id: `skip_test_${sectionIdx}`, title: '건너뛰기 테스트', lessons: sampledSteps },
    });
    setSelectedNodeId(null);
    setView('lesson');
  };

  const handleSkipTestComplete = (result) => {
    setSave(prev => {
      const newSet = new Set([...prev.completedNodes, ...(skipTest?.nodesToComplete || [])]);
      const withNode = { ...prev, completedNodes: Array.from(newSet) };
      return applyLessonCompletion(withNode, result?.xpEarned, result?.gemsEarned);
    });
    setSkipTest(null);
    setView('tree');
  };

  // Tier final exam: samples every graded question from every node in the
  // requested (boss) section — a real cumulative test, not a lesson. Scored
  // and reported by InteractiveLessonBoard/LessonSummaryScreen; App only
  // needs to build the question pool and clean up afterward.
  const handleRequestExam = (sectionIdx) => {
    const fresh = regenHearts(save);
    if (fresh.hearts <= 0) {
      setSave(fresh);
      setShowGiftModal(true);
      return;
    }

    const section = trackData.sections[sectionIdx];
    if (!section) return;

    let pool = [];
    for (const node of section.nodes) {
      for (const lesson of node.lessons) {
        const resolved = Array.isArray(lesson) ? lesson[0] : lesson;
        if (resolved.type === 'quiz_multiple_choice' || resolved.type === 'quiz_code') {
          pool.push({ ...resolved, _topic: node.title });
        }
      }
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const sampleSize = Math.min(20, shuffled.length);
    const sampledSteps = shuffled.slice(0, sampleSize);
    if (sampledSteps.length === 0) return;

    setSave(fresh);
    setExamSession({ node: { id: `exam_${sectionIdx}`, title: section.title.replace(/\n/, ' '), lessons: sampledSteps } });
    setSelectedNodeId(null);
    setView('lesson');
  };

  const handleExamComplete = (result) => {
    if (result && result.pass) {
      setSave(prev => {
        const sectionIdx = parseInt(examSession.node.id.split('_')[1], 10);
        if (isNaN(sectionIdx)) return prev;
        
        const nodesToComplete = [];
        for (let i = 0; i <= sectionIdx; i++) {
          const sec = trackData.sections[i];
          if (sec) nodesToComplete.push(...sec.nodes.map(n => n.id));
        }
        
        const newSet = new Set([...prev.completedNodes, ...nodesToComplete]);
        const withNode = { ...prev, completedNodes: Array.from(newSet) };
        return applyLessonCompletion(withNode, result?.xpEarned, result?.gemsEarned);
      });
      setToast('🎉 보스전 통과! 다음 티어가 해금되었습니다!');
    }
    setExamSession(null);
    setView('tree');
  };

  const [reviewSession, setReviewSession] = useState(false);

  const handleStartReview = () => {
    setReviewSession(true);
    setView('lesson');
  };

  const handleReviewComplete = () => {
    setReviewSession(false);
    setView('profile');
  };

  const requestExitLesson = () => setPendingExit(true);
  const confirmExitLesson = () => {
    setPendingExit(false);
    setSkipTest(null);
    setExamSession(null);
    setReviewSession(false);
    setView(reviewSession ? 'profile' : 'tree');
  };

  const handleBuyHeartRefill = () => {
    setSave(prev => {
      const needed = MAX_HEARTS - prev.hearts;
      if (needed <= 0 || prev.gems < 50) return prev;
      return { ...prev, hearts: MAX_HEARTS, gems: prev.gems - 50 };
    });
  };

  const handleBuyStreakFreeze = () => {
    setSave(prev => {
      if (prev.streakFreezeAvailable || prev.gems < 200) return prev;
      return { ...prev, gems: prev.gems - 200, streakFreezeAvailable: true };
    });
  };

  const handleBuyGemsWithXp = () => {
    setSave(prev => {
      if (prev.xp < 500) return prev;
      return { ...prev, xp: prev.xp - 500, gems: prev.gems + 50 };
    });
    setToast({ icon: '💎', title: '보석 충전!', message: '500 XP를 사용하여 50 보석을 충전했습니다.' });
  };

  if (view === 'login') return <LandingScreen onLogin={handleLogin} />;

  if (view === 'courses') {
    return (
      <CourseSelectScreen
        theme={theme}
        selectedCourseId={save.selectedCourseId}
        onSelect={handleSelectCourse}
        onBack={() => setView('tree')}
      />
    );
  }

  if (view === 'lesson') {
    const isExam = !!examSession;
    return (
      <>
        <InteractiveLessonBoard
          nodeId={skipTest || isExam || reviewSession ? null : selectedNodeId}
          trackData={trackData}
          overrideNode={isExam ? examSession.node : (skipTest ? skipTest.node : null)}
          isSkipTest={!!skipTest}
          isExamMode={isExam}
          isReviewMode={reviewSession}
          reviewQuestions={reviewSession ? (save.wrongAnswers || []).filter(a => !a.resolved).map(a => a.questionData) : null}
          isPremium={save.isPremium}
          onComplete={reviewSession ? handleReviewComplete : (isExam ? handleExamComplete : (skipTest ? handleSkipTestComplete : handleLessonComplete))}
          onBack={requestExitLesson}
          onForceExit={confirmExitLesson}
          hearts={save.hearts}
          gems={save.gems}
          onLoseHeart={handleLoseHeart}
          onRefillHearts={acceptGift}
          onWrongAnswer={(qData) => setSave(prev => addWrongAnswer(prev, qData))}
          xpPerLesson={XP_PER_LESSON}
          gemsPerLesson={GEMS_PER_LESSON}
          currentLessonIndex={skipTest || isExam || reviewSession ? 0 : (save.nodeProgress?.[selectedNodeId] || 0)}
        />
        <ConfirmModal
          open={pendingExit}
          theme="dark"
          title={isExam ? '시험을 그만둘까요?' : skipTest ? '건너뛰기 테스트를 그만둘까요?' : reviewSession ? '오답 복습을 종료할까요?' : '레슨을 종료할까요?'}
          message={isExam ? '지금 나가면 시험이 취소되고 결과가 기록되지 않아요.' : skipTest ? '지금 나가면 테스트가 취소되고, 유닛은 건너뛴 상태로 처리되지 않아요.' : reviewSession ? '지금 나가면 복습 진행 상황이 저장되지 않아요.' : '지금 나가면 이번 레슨의 진행 상황은 저장되지 않아요.'}
          confirmLabel="나가기"
          cancelLabel="계속하기"
          onConfirm={confirmExitLesson}
          onCancel={() => setPendingExit(false)}
        />
      </>
    );
  }

  const NavItem = ({ icon: Icon, label, targetView }) => {
    const isActive = view === targetView;
    return (
      <button
        onClick={() => setView(targetView)}
        className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition font-bold text-lg
          ${isActive
            ? 'bg-[#FFB300]/10 text-[#FFB300] border-2 border-[#FFB300]/20'
            : isDark
              ? 'text-gray-400 hover:bg-[#334155] border-2 border-transparent'
              : 'text-gray-500 hover:bg-gray-100 border-2 border-transparent'
          }`}
      >
        <Icon size={28} />
        <span className="hidden xl:block">{label}</span>
      </button>
    );
  };

  const MobileNavItem = ({ icon: Icon, targetView }) => {
    const isActive = view === targetView;
    return (
      <button
        onClick={() => setView(targetView)}
        className={`flex-1 flex flex-col items-center justify-center py-2 transition ${isActive ? 'text-[#FFB300]' : isDark ? 'text-gray-500' : 'text-gray-400'}`}
      >
        <Icon size={24} />
      </button>
    );
  };

  const questDone = save.lessonsCompletedTodayDate === new Date().toISOString().slice(0, 10) && save.lessonsCompletedToday >= 1;
  const leaderboardUnlocked = save.completedNodes.length >= 2;
  // Daily streak reminder: nudge the learner if they have a streak going but
  // haven't completed a lesson yet today (lastActiveDate only advances on
  // lesson completion — see applyLessonCompletion in lib/storage.js).
  const streakAtRisk = save.streak > 0 && save.lastActiveDate !== new Date().toISOString().slice(0, 10);

  return (
    <div className={`flex w-full min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-[#F8FAFC] text-gray-900'}`}>
      {/* Left Sidebar (Global, desktop/tablet only) */}
      <div className={`w-[80px] xl:w-[250px] border-r-2 hidden md:flex flex-col p-4 xl:p-6 fixed h-screen z-10 ${isDark ? 'border-[#334155] bg-[#0B1120]' : 'border-gray-200 bg-white shadow-sm'}`}>
        <div className={`font-black text-2xl xl:text-3xl mb-12 px-2 tracking-tight ${isDark ? 'text-[#FFB300]' : 'text-[#FFB300]'}`}>
          <span className="hidden xl:inline">Coding Egg</span>
          <span className="xl:hidden text-4xl">🥚</span>
        </div>

        <div className="flex flex-col gap-2 w-full flex-1">
          <NavItem icon={Home} label="학습하기" targetView="tree" />
          <NavItem icon={Trophy} label="리더보드" targetView="leaderboard" />
          <NavItem icon={Store} label="상점" targetView="store" />
          <NavItem icon={User} label="프로필" targetView="profile" />
        </div>

        {/* Guidebook Button */}
        <button
          onClick={() => setShowGuidebook(true)}
          className={`mt-auto w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition font-bold text-lg
            ${showGuidebook
              ? 'bg-[#FFB300]/10 text-[#FFB300] border-2 border-[#FFB300]/20'
              : isDark
                ? 'text-gray-400 hover:bg-[#334155] border-2 border-transparent'
                : 'text-gray-500 hover:bg-gray-100 border-2 border-transparent'
            }`}
        >
          <BookOpen size={28} />
          <span className="hidden xl:block">가이드북</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setSave(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }))}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition font-bold text-lg border-2 border-transparent mt-2
            ${isDark ? 'text-gray-400 hover:bg-[#334155]' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          {isDark ? <Sun size={28} className="text-[#FFB300]" /> : <Moon size={28} className="text-gray-500" />}
          <span className="hidden xl:block">{isDark ? '라이트 모드' : '다크 모드'}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 ml-0 md:ml-[80px] xl:ml-[250px] min-h-screen flex flex-col pb-16 md:pb-0">
        {/* Daily streak reminder — Duolingo-style nudge shown until today's lesson is done */}
        {streakAtRisk && !nudgeDismissed && (
          <div className={`flex-none flex items-center gap-3 px-5 py-3 border-b-2 ${isDark ? 'bg-[#3a2a12] border-[#5a3d15] text-[#FFB300]' : 'bg-amber-50 border-amber-100 text-amber-800'}`}>
            <Flame size={22} className="text-[#FF9600] flex-none" fill="currentColor" />
            <p className="flex-1 font-bold text-sm">
              {save.streak}일 연속 기록이 위험해요! 오늘 레슨을 하나 완료해서 스트릭을 지켜보세요 🔥
            </p>
            <button
              onClick={() => setView('tree')}
              className="flex-none bg-[#FF9600] hover:bg-[#e68600] text-white font-bold text-xs px-4 py-2 rounded-xl transition"
            >
              레슨 시작
            </button>
            <button
              onClick={() => setNudgeDismissed(true)}
              className={`flex-none w-7 h-7 rounded-full flex items-center justify-center transition ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              <X size={16} />
            </button>
          </div>
        )}
        {view === 'tree' && (
          <SkillTreeBoard
            key={course.id}
            onNodeClick={handleNodeClick}
            completedNodes={save.completedNodes}
            trackData={trackData}
            theme={theme}
            onRequestSkipTest={handleRequestSkipTest}
            onRequestExam={handleRequestExam}
            onChangeCourse={(cid) => {
              if (cid && cid !== 'new') {
                handleSelectCourse(cid);
              } else {
                setView('courses');
              }
            }}
            onSectionChange={setAppSectionIdx}
            onStoreClick={() => setView('store')}
            xpPerLesson={XP_PER_LESSON}
            save={save}
            maxHearts={MAX_HEARTS}
            currentCourse={course}
          />
        )}
        {view === 'leaderboard' && (
          <LeaderboardScreen
            theme={theme}
            xp={save.xp}
            leagueTier={save.leagueTier || 0}
            weeklyXp={save.weeklyXp || 0}
            profileName={save.profileName}
            friends={save.friends || []}
          />
        )}
        {view === 'store' && (
          <StoreScreen
            theme={theme}
            xp={save.xp}
            gems={save.gems}
            hearts={save.hearts}
            maxHearts={MAX_HEARTS}
            streakFreezeAvailable={save.streakFreezeAvailable}
            isPremium={save.isPremium}
            premiumExpiryDate={save.premiumExpiryDate}
            onBuyHeartRefill={handleBuyHeartRefill}
            onBuyStreakFreeze={handleBuyStreakFreeze}
            onTogglePremium={() => setSave(prev => togglePremium(prev))}
            onBuyGemsWithXp={handleBuyGemsWithXp}
          />
        )}
        {view === 'profile' && (
          <ProfileScreen
            theme={theme}
            profileName={save.profileName}
            joinDate={save.joinDate}
            streak={save.streak}
            xp={save.xp}
            gems={save.gems}
            isPremium={save.isPremium}
            wrongAnswers={save.wrongAnswers || []}
            friends={save.friends || []}
            claimedAchievements={save.claimedAchievements || []}
            onClaimAchievement={handleClaimAchievement}
            onUpdateProfile={(name) => setSave(prev => updateProfile(prev, { profileName: name }))}
            onAddFriend={(name) => setSave(prev => addFriend(prev, name))}
            onResolveWrongAnswer={(id) => setSave(prev => resolveWrongAnswer(prev, id))}
            onStartReview={handleStartReview}
          />
        )}
      </div>

      {/* Mobile bottom nav (phones only — the sidebar above is desktop/tablet) */}
      <div className={`md:hidden fixed bottom-0 inset-x-0 z-20 flex border-t-2 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-200'}`}>
        <MobileNavItem icon={Home} targetView="tree" />
        <MobileNavItem icon={Trophy} targetView="leaderboard" />
        <MobileNavItem icon={Store} targetView="store" />
        <MobileNavItem icon={User} targetView="profile" />
        <button
          onClick={() => setShowGuidebook(true)}
          className={`flex-1 flex flex-col items-center justify-center py-2 transition ${showGuidebook ? 'text-[#FFB300]' : isDark ? 'text-gray-500' : 'text-gray-400'}`}
        >
          <BookOpen size={24} />
        </button>
      </div>

      {/* Guest Mode Gift Modal */}
      {showGiftModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-bounce-in text-center">
            <div className="relative inline-block">
              <Heart className="w-20 h-20 text-red-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-full border-2 border-white transform rotate-12">
                GIFT
              </div>
            </div>
            <h2 className="text-2xl font-black text-gray-800 mb-2">하트가 부족해요!</h2>
            <p className="text-gray-600 mb-6 font-bold">🎁 게스트 테스트를 위해<br/>5개 하트 선물이 도착했습니다.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={acceptGift}
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold shadow-[0_4px_0_rgba(34,197,94,1)] active:translate-y-1 active:shadow-none transition flex items-center justify-center gap-2"
              >
                <Heart size={20} fill="currentColor" className="text-red-200" /> 선물 받기
              </button>
              <button
                onClick={() => setShowGiftModal(false)}
                className="w-full py-4 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notice */}
      {toast && (
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#0B1120] text-white font-bold px-6 py-3 rounded-2xl shadow-2xl max-w-sm text-center animate-pop">
          {toast}
        </div>
      )}

      {/* Global Guidebook Panel */}
      <GuidebookPanel
        isOpen={showGuidebook}
        onClose={() => setShowGuidebook(false)}
        trackData={trackData}
        activeSectionIdx={appSectionIdx}
        activeNodeId={selectedNodeId}
        theme={theme}
      />
    </div>
  );
}
