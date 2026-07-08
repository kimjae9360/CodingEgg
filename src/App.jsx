import React, { useState, useEffect, useCallback } from 'react';
import SkillTreeBoard from './components/SkillTreeBoard';
import InteractiveLessonBoard from './components/InteractiveLessonBoard';
import LandingScreen from './components/LandingScreen';
import CourseSelectScreen from './components/CourseSelectScreen';
import ConfirmModal from './components/ConfirmModal';
import { LeaderboardScreen, StoreScreen, ProfileScreen } from './components/PlaceholderScreens';
import { getCourse } from './data/courses';
import { loadState, saveState, applyLessonCompletion, regenHearts, loseHeart, refillHearts, MAX_HEARTS, XP_PER_LESSON, GEMS_PER_LESSON } from './lib/storage';
import GuidebookPanel from './components/GuidebookPanel';
import { Home, Trophy, Store, User, Flame, Gem, Heart, Moon, Sun, Lock, X, BookOpen } from 'lucide-react';

export default function App() {
  const [save, setSave] = useState(() => regenHearts(loadState()));
  const [view, setView] = useState(() => {
    if (!save.profileName) return 'login';
    if (!save.selectedCourseId) return 'courses';
    return 'tree';
  });
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [skipTest, setSkipTest] = useState(null); // { nodesToComplete, node } | null — active only during a skip test
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
    }, 60 * 1000);
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

  const handleSelectCourse = (courseId) => {
    const picked = getCourse(courseId);
    if (!picked.available) return;
    setSave(prev => ({ ...prev, selectedCourseId: courseId }));
    setView('tree');
  };

  const handleNodeClick = (nodeId) => {
    const fresh = regenHearts(save);
    if (fresh.hearts <= 0) {
      setSave(fresh);
      setToast('하트가 모두 소진됐어요! 시간이 지나면 채워지거나, 상점에서 충전할 수 있어요.');
      return;
    }
    setSave(fresh);
    setSkipTest(null);
    setSelectedNodeId(nodeId);
    setView('lesson');
  };

  const handleLessonComplete = () => {
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
         withNode = { ...withNode, completedNodes: [...prev.completedNodes, selectedNodeId] };
      }

      return applyLessonCompletion(withNode);
    });
    setView('tree');
  };

  const handleLoseHeart = useCallback(() => {
    setSave(prev => loseHeart(prev));
  }, []);

  // Real Duolingo-style "jump here?": instead of an instant free skip, the
  // learner has to pass a graded mini-quiz sampled from everything they'd
  // be skipping. Only on success are those units marked complete.
  const handleRequestSkipTest = (sectionIdx) => {
    const fresh = regenHearts(save);
    if (fresh.hearts <= 0) {
      setSave(fresh);
      setToast('하트가 없어서 테스트를 볼 수 없어요! 하트를 채운 뒤 다시 시도해주세요.');
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

  const handleSkipTestComplete = () => {
    setSave(prev => {
      const newSet = new Set([...prev.completedNodes, ...(skipTest?.nodesToComplete || [])]);
      return { ...prev, completedNodes: Array.from(newSet) };
    });
    setSkipTest(null);
    setView('tree');
  };

  const requestExitLesson = () => setPendingExit(true);
  const confirmExitLesson = () => {
    setPendingExit(false);
    setSkipTest(null);
    setView('tree');
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

  if (view === 'login') return <LandingScreen onLogin={handleLogin} />;

  if (view === 'courses') {
    return (
      <CourseSelectScreen
        theme={theme}
        selectedCourseId={save.selectedCourseId}
        onSelect={handleSelectCourse}
      />
    );
  }

  if (view === 'lesson') {
    return (
      <>
        <InteractiveLessonBoard
          nodeId={skipTest ? null : selectedNodeId}
          trackData={trackData}
          overrideNode={skipTest ? skipTest.node : null}
          isSkipTest={!!skipTest}
          onComplete={skipTest ? handleSkipTestComplete : handleLessonComplete}
          onBack={requestExitLesson}
          hearts={save.hearts}
          gems={save.gems}
          onLoseHeart={handleLoseHeart}
          onRefillHearts={handleBuyHeartRefill}
          xpPerLesson={XP_PER_LESSON}
          gemsPerLesson={GEMS_PER_LESSON}
          currentLessonIndex={skipTest ? 0 : (save.nodeProgress?.[selectedNodeId] || 0)}
        />
        <ConfirmModal
          open={pendingExit}
          theme="dark"
          title={skipTest ? '건너뛰기 테스트를 그만둘까요?' : '레슨을 종료할까요?'}
          message={skipTest ? '지금 나가면 테스트가 취소되고, 유닛은 건너뛴 상태로 처리되지 않아요.' : '지금 나가면 이번 레슨의 진행 상황은 저장되지 않아요.'}
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
            ? 'bg-[#00C4B5]/10 text-[#00C4B5] border-2 border-[#00C4B5]/20'
            : isDark
              ? 'text-gray-400 hover:bg-[#2b3a42] border-2 border-transparent'
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
        className={`flex-1 flex flex-col items-center justify-center py-2 transition ${isActive ? 'text-[#00C4B5]' : isDark ? 'text-gray-500' : 'text-gray-400'}`}
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
    <div className={`flex w-full min-h-screen ${isDark ? 'bg-[#181A20] text-white' : 'bg-[#F8FAFC] text-gray-900'}`}>
      {/* Left Sidebar (Global, desktop/tablet only) */}
      <div className={`w-[80px] xl:w-[250px] border-r-2 hidden md:flex flex-col p-4 xl:p-6 fixed h-screen z-10 ${isDark ? 'border-[#2b3a42] bg-[#181A20]' : 'border-gray-200 bg-white shadow-sm'}`}>
        <div className={`font-black text-2xl xl:text-3xl mb-12 px-2 tracking-tight ${isDark ? 'text-[#FFB300]' : 'text-[#00C4B5]'}`}>
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
          className={`mt-auto w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition font-bold text-lg border-2 border-transparent
            ${isDark ? 'text-gray-400 hover:bg-[#2b3a42]' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          <BookOpen size={28} className="text-[#00C4B5]" />
          <span className="hidden xl:block">가이드북</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setSave(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }))}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition font-bold text-lg border-2 border-transparent mt-2
            ${isDark ? 'text-gray-400 hover:bg-[#2b3a42]' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          {isDark ? <Sun size={28} className="text-[#FFB300]" /> : <Moon size={28} className="text-gray-500" />}
          <span className="hidden xl:block">{isDark ? '라이트 모드' : '다크 모드'}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-[80px] xl:ml-[250px] min-h-screen flex flex-col pb-16 md:pb-0">
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
            onNodeClick={handleNodeClick}
            completedNodes={save.completedNodes}
            trackData={trackData}
            theme={theme}
            onRequestSkipTest={handleRequestSkipTest}
            onChangeCourse={() => setView('courses')}
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
            leagueTier={save.leagueTier}
            weeklyXp={save.weeklyXp}
            profileName={save.profileName}
          />
        )}
        {view === 'store' && (
          <StoreScreen
            theme={theme}
            gems={save.gems}
            hearts={save.hearts}
            maxHearts={MAX_HEARTS}
            streakFreezeAvailable={save.streakFreezeAvailable}
            onBuyHeartRefill={handleBuyHeartRefill}
            onBuyStreakFreeze={handleBuyStreakFreeze}
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
          />
        )}
      </div>

      {/* Mobile bottom nav (phones only — the sidebar above is desktop/tablet) */}
      <div className={`md:hidden fixed bottom-0 inset-x-0 z-20 flex border-t-2 ${isDark ? 'bg-[#181A20] border-[#2b3a42]' : 'bg-white border-gray-200'}`}>
        <MobileNavItem icon={Home} targetView="tree" />
        <MobileNavItem icon={Trophy} targetView="leaderboard" />
        <MobileNavItem icon={Store} targetView="store" />
        <MobileNavItem icon={User} targetView="profile" />
        <button
          onClick={() => setShowGuidebook(true)}
          className={`flex-1 flex flex-col items-center justify-center py-2 text-[#00C4B5]`}
        >
          <BookOpen size={22} />
        </button>
      </div>

      {/* Toast notice */}
      {toast && (
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#181A20] text-white font-bold px-6 py-3 rounded-2xl shadow-2xl max-w-sm text-center animate-pop">
          {toast}
        </div>
      )}

      {/* Global Guidebook Panel */}
      <GuidebookPanel
        isOpen={showGuidebook}
        onClose={() => setShowGuidebook(false)}
        trackData={trackData}
        activeSectionIdx={appSectionIdx}
        theme={theme}
      />
    </div>
  );
}
