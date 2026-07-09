import React, { useState, useEffect } from 'react';
import LessonStartModal from './LessonStartModal';
import PokemonCard from './PokemonCard';
import { FastForward, ChevronLeft, ChevronRight, BookOpen, CheckCircle2, Lock, Play, Flame, Trophy, Gem, Heart, RotateCcw } from 'lucide-react';

// Section info per unit range
function getSectionInfo(unitIdx) {
  if (unitIdx < 5)  return { label: 'SECTION 1', name: '파이썬 비기너',   emoji: '🐣', gradient: 'linear-gradient(135deg, #FFB300 0%, #1CB0F6 100%)', iconColor: '#FFB300' };
  if (unitIdx < 10) return { label: 'SECTION 2', name: '파이썬 디벨로퍼', emoji: '⚡', gradient: 'linear-gradient(135deg, #CE82FF 0%, #FF66B1 100%)', iconColor: '#CE82FF' };
  return                     { label: 'SECTION 3', name: '파이썬 마스터',   emoji: '🔥', gradient: 'linear-gradient(135deg, #FF9600 0%, #FF66B1 100%)', iconColor: '#FF9600' };
}

function getShortTitle(fullTitle) {
  if (!fullTitle) return '';
  if (fullTitle.includes('\n')) return fullTitle.split('\n')[1];
  if (fullTitle.includes(': ')) return fullTitle.split(': ').slice(1).join(': ');
  return fullTitle;
}



export default function SkillTreeBoard({ onNodeClick, completedNodes, trackData, theme = 'light', onRequestSkipTest, onRequestExam, onChangeCourse, onSectionChange, onStoreClick, xpPerLesson = 20, save, maxHearts = 5, currentCourse }) {
  const isDark = theme === 'dark';
  const [selectedNode, setSelectedNode] = useState(null); 
  const [activePopover, setActivePopover] = useState(null);
  const [skipConfirmModal, setSkipConfirmModal] = useState({ isOpen: false, sectionIdx: null });
  const popoverRef = React.useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setActivePopover(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const hoverTimeout = React.useRef(null);
  const scrollContainerRef = React.useRef(null);
  const isFirstRender = React.useRef(true);

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (save.isPremium || save.hearts >= maxHearts) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [save.isPremium, save.hearts, maxHearts]);

  const getTimerString = () => {
    if (save.isPremium || save.hearts >= maxHearts) return null;
    // HEART_REGEN_MS is 5 * 60 * 1000
    const HEART_REGEN_MS = 5 * 60 * 1000;
    const elapsed = now - (save.heartsUpdatedAt || now);
    const remainingMs = Math.max(0, HEART_REGEN_MS - (elapsed % HEART_REGEN_MS));
    const m = Math.floor(remainingMs / 60000);
    const s = Math.floor((remainingMs % 60000) / 1000);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCardHover = (id) => {
    clearTimeout(hoverTimeout.current);
    setHoveredNodeId(id);
  };

  const handleCardLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredNodeId(null);
    }, 150); // Delay before returning to default active card to prevent jerky transitions
  };

  const isSectionLocked = (idx) => {
    if (idx === 0) return false;
    const prev = trackData.sections[idx - 1].nodes;
    if (!prev.length) return false;
    return !completedNodes.includes(prev[prev.length - 1].id);
  };

  const isSectionFullyCompleted = (idx) => {
    const nodes = trackData.sections[idx].nodes;
    if (!nodes.length) return true;
    return completedNodes.includes(nodes[nodes.length - 1].id);
  };

  const [activeSectionIdx, setActiveSectionIdx] = useState(() => {
    const uncompletedSecIdx = trackData.sections.findIndex(sec => 
      !sec.nodes.every(n => completedNodes.includes(n.id))
    );
    return Math.max(0, uncompletedSecIdx);
  });

  useEffect(() => {
    if (onSectionChange) onSectionChange(activeSectionIdx);
  }, [activeSectionIdx, onSectionChange]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollContainerRef.current) {
        const focusCard = scrollContainerRef.current.querySelector('.card-focus');
        if (focusCard) {
          const container = scrollContainerRef.current;
          const scrollTarget = focusCard.offsetLeft - (container.offsetWidth / 2) + (focusCard.offsetWidth / 2);
          container.scrollTo({ 
            left: scrollTarget, 
            behavior: isFirstRender.current ? 'auto' : 'smooth' 
          });
          isFirstRender.current = false;
        }
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [activeSectionIdx]);

  const currentSection = trackData.sections[activeSectionIdx];
  const isLocked = isSectionLocked(activeSectionIdx);
  const isCompleted = isSectionFullyCompleted(activeSectionIdx);
  const info = getSectionInfo(activeSectionIdx);
  const shortTitle = getShortTitle(currentSection.title);

  return (
    <div className={`w-full min-h-screen flex flex-col relative py-8 px-4 md:px-8 xl:px-12 ${isDark ? 'bg-[#0B1120]' : 'bg-[#F8FAFC]'}`}>
      
      {/* ── Top Header with Stats (Mobile Optimized) ── */}
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row md:items-center justify-end gap-4 mb-6">
        
        {/* Right Side: Stats with Popovers */}
        <div ref={popoverRef} className="flex flex-wrap items-center justify-end gap-2 md:gap-3 relative">
         {save && (
           <>
             {/* Course Popover */}
             <div className="relative">
               <button onClick={() => setActivePopover(activePopover === 'course' ? null : 'course')} className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl transition shadow-sm border overflow-hidden p-1 ${isDark ? 'bg-[#334155] hover:bg-[#475569] text-white border-transparent' : 'bg-white hover:bg-gray-50 text-[#FFD43B] border-gray-200'}`}>
                 {currentCourse?.logoUrl ? (
                   <img src={currentCourse.logoUrl} alt={currentCourse.name} className="w-full h-full object-contain" />
                 ) : (
                   <span className="text-xl md:text-2xl font-black font-mono">Py</span>
                 )}
               </button>
               {activePopover === 'course' && (
                 <div className={`absolute top-full right-0 mt-2 w-64 rounded-2xl shadow-xl z-50 p-2 border-2 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-100'}`}>
                   <div className={`text-xs font-bold uppercase p-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>내 과정</div>
                   <div className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${isDark ? 'bg-[#334155]' : 'bg-gray-50'}`}>
                     {currentCourse?.logoUrl ? (
                       <img src={currentCourse.logoUrl} alt={currentCourse.name} className="w-6 h-6 object-contain" />
                     ) : (
                       <span className="text-xl font-black text-[#FFD43B] font-mono">Py</span>
                     )}
                     <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{currentCourse?.name || '과정'}</span>
                   </div>
                   {onChangeCourse && (
                     <button onClick={() => { setActivePopover(null); if (confirm('새로운 과정을 추가하시겠습니까?')) onChangeCourse(); }} className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${isDark ? 'hover:bg-[#334155] text-gray-300' : 'hover:bg-gray-50 text-gray-700'}`}>
                       <span className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center font-black text-xl">+</span>
                       <span className="font-bold text-sm">새로운 과정 추가하기</span>
                     </button>
                   )}
                 </div>
               )}
             </div>

             {/* Streak Popover */}
             <div className="relative">
               <button onClick={() => setActivePopover(activePopover === 'streak' ? null : 'streak')} className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#FFB300] px-3 md:px-4 py-1.5 md:py-2 rounded-xl transition border ${isDark ? 'bg-[#334155] hover:bg-[#475569] border-transparent' : 'bg-white hover:bg-yellow-50 border-gray-200'}`}>
                 <Flame size={18} fill={save.streak > 0 ? "currentColor" : "none"} /> {save.streak}
               </button>
               {activePopover === 'streak' && (
                 <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl shadow-xl z-50 p-5 border-2 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-100'}`}>
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                       <Flame size={24} className="text-orange-500" fill="currentColor" />
                     </div>
                     <div>
                       <h3 className={`font-black text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>{save.streak}일 연속 학습</h3>
                       <p className={`text-sm font-bold leading-tight ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                         {save.streak > 0 ? '불꽃이 타오르고 있습니다! 매일 접속해 불꽃을 유지하세요.' : '오늘 레슨을 완료하여 불꽃을 피우세요!'}
                       </p>
                     </div>
                   </div>
                 </div>
               )}
             </div>

             {/* Gems Popover */}
             <div className="relative">
               <button onClick={() => setActivePopover(activePopover === 'gem' ? null : 'gem')} className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#B96CE8] px-3 md:px-4 py-1.5 md:py-2 rounded-xl transition border ${isDark ? 'bg-[#334155] hover:bg-[#475569] border-transparent' : 'bg-white hover:bg-purple-50 border-gray-200'}`}>
                 <Gem size={18} /> {save.gems}
               </button>
               {activePopover === 'gem' && (
                 <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl shadow-xl z-50 p-5 border-2 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-100'}`}>
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                       <Gem size={24} className="text-purple-500" />
                     </div>
                     <div>
                       <h3 className={`font-black text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>보석</h3>
                       <p className={`text-sm font-bold leading-tight mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                         보석이 {save.gems}개 있습니다.
                       </p>
                       <button onClick={() => { setActivePopover(null); if (onStoreClick) onStoreClick(); }} className="text-purple-500 font-black text-sm hover:underline">
                         스토어로 이동하기
                       </button>
                     </div>
                   </div>
                 </div>
               )}
             </div>

             {/* Hearts Popover */}
             <div className="relative">
               <button onClick={() => setActivePopover(activePopover === 'heart' ? null : 'heart')} className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#ff4b4b] px-3 md:px-4 py-1.5 md:py-2 rounded-xl transition border ${isDark ? 'bg-[#334155] hover:bg-[#475569] border-transparent' : 'bg-white hover:bg-red-50 border-gray-200'}`}>
                 <Heart size={18} fill="currentColor" /> {save.isPremium ? '♾️' : save.hearts}
                 {!save.isPremium && save.hearts < maxHearts && (
                   <span className="text-xs md:text-sm font-black tracking-widest text-[#ff4b4b] opacity-80 ml-1">
                     {getTimerString()}
                   </span>
                 )}
               </button>
               {activePopover === 'heart' && (
                 <div className={`absolute top-full right-0 mt-2 w-72 rounded-2xl shadow-xl z-50 p-5 border-2 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-100'}`}>
                   <div className="flex items-start gap-4 mb-4">
                     <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                       <Heart size={24} className="text-red-500" fill="currentColor" />
                     </div>
                     <div>
                       <h3 className={`font-black text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>하트</h3>
                       <p className={`text-sm font-bold leading-tight ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                         {save.isPremium ? '무제한 하트가 활성화되어 있습니다.' : save.hearts >= maxHearts ? '하트가 가득 찼습니다! 계속 학습하세요.' : (
                           <span>다음 하트까지: <span className="text-red-500 font-black">{getTimerString()}</span></span>
                         )}
                       </p>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <button 
                       onClick={() => {
                         setActivePopover(null);
                         if (!save.isPremium && onStoreClick) onStoreClick();
                       }}
                       className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border-2 transition ${isDark ? 'border-[#475569] hover:bg-[#334155]' : 'border-gray-200 hover:bg-gray-50'}`}
                     >
                       <span className={`font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                         <span className="text-xl">♾️</span> 무제한 하트
                       </span>
                       <span className="text-pink-500 font-bold text-sm">
                         {save.isPremium ? '활성중' : '슈퍼 구독하기'}
                       </span>
                     </button>
                     {!save.isPremium && (
                       <button 
                          onClick={() => {
                            setActivePopover(null);
                            if (onStoreClick) onStoreClick(); // Store handles refill 
                          }} 
                          className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border-2 transition ${isDark ? 'border-[#475569] hover:bg-[#334155]' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                         <span className={`font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                           <Heart size={20} className="text-red-500" fill="none" /> 하트 리필하기
                         </span>
                         <span className="text-[#B96CE8] font-bold text-sm flex items-center gap-1">
                           <Gem size={14} fill="currentColor" /> 50
                         </span>
                       </button>
                     )}
                   </div>
                 </div>
               )}
             </div>

           </>
         )}
        </div>
      </div>

      {/* ── Compact Unit Navigation ── */}
      <div className="max-w-6xl mx-auto w-full mb-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6 w-full justify-center px-2">
          {/* 처음으로 버튼 — hidden on the smallest screens; the arrow buttons still work */}
          <div className="hidden sm:flex w-20 md:w-24 justify-end">
            {activeSectionIdx > 0 && (
              <button
                onClick={() => setActiveSectionIdx(0)}
                className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg transition ${isDark ? 'bg-[#334155] hover:bg-[#475569] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                처음으로
              </button>
            )}
          </div>

          <div className={`flex items-center gap-1 sm:gap-4 px-1 sm:px-2 py-2 rounded-full border-2 shadow-sm min-w-0 ${isDark ? 'bg-[#0B1120] border-[#334155]' : 'bg-white border-gray-100'}`}>
            <button
              onClick={() => setActiveSectionIdx(p => Math.max(0, p - 1))}
              disabled={activeSectionIdx === 0}
              className={`p-1 sm:p-2 rounded-full transition shrink-0 ${activeSectionIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/10'} ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex flex-col items-center justify-center min-w-0 w-[200px] sm:w-[280px] md:w-[320px] text-center">
              <span className="text-xs sm:text-sm font-black tracking-wider opacity-60 mb-0.5 truncate w-full" style={{ color: info.iconColor }}>
                {info.label}
              </span>
              <span className={`text-sm sm:text-lg font-black break-keep w-full ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Unit {activeSectionIdx + 1} : {shortTitle}
              </span>
            </div>

            <button
              onClick={() => setActiveSectionIdx(p => Math.min(trackData.sections.length - 1, p + 1))}
              disabled={activeSectionIdx === trackData.sections.length - 1}
              className={`p-1 sm:p-2 rounded-full transition shrink-0 ${activeSectionIdx === trackData.sections.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/10'} ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* 끝으로 버튼 — hidden on the smallest screens; the arrow buttons still work */}
          <div className="hidden sm:flex w-20 md:w-24 justify-start">
            {activeSectionIdx < trackData.sections.length - 1 && (
              <button
                onClick={() => setActiveSectionIdx(trackData.sections.length - 1)}
                className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg transition ${isDark ? 'bg-[#334155] hover:bg-[#475569] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                끝으로
              </button>
            )}
          </div>
        </div>

        <p className={`text-sm md:text-base font-bold mt-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {trackData.description}
        </p>

        {currentSection.title.includes('보스전') && !isLocked && onRequestExam && (
          <button
            onClick={() => onRequestExam(activeSectionIdx)}
            className="mt-5 flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-white transition shadow-[0_4px_0_rgba(180,83,9,1)] active:translate-y-1 active:shadow-none"
            style={{ background: 'linear-gradient(135deg, #FF9600 0%, #FF66B1 100%)' }}
          >
            <Trophy size={20} /> 🎓 이 티어 시험 보기 (기말고사)
          </button>
        )}
      </div>

      {/* ── Pokemon Card Display (Nodes as TCG Cards - Apple Cover Flow) ── */}
      {/* On phones/tablets the fanned-out deck is wider than the viewport, so
          it becomes a swipeable horizontal carousel instead of being clipped. */}
      <div 
        ref={scrollContainerRef}
        className="w-full max-w-7xl mx-auto pb-8 overflow-x-auto lg:overflow-x-clip snap-x snap-mandatory lg:snap-none scrollbar-hide scroll-smooth"
      >

        <div className="relative flex justify-start lg:justify-center items-center w-full min-h-[450px] px-8 sm:px-16 lg:px-8 pt-8">
          
          {currentSection.nodes.map((node, i) => {
            const isNodeCompleted = completedNodes.includes(node.id);
            const isNodeLocked = isLocked || (!isNodeCompleted && i > 0 && !completedNodes.includes(currentSection.nodes[i - 1].id));
            const isNodeActive = !isNodeCompleted && !isNodeLocked;
            
            let isFocus = false;
            if (hoveredNodeId) {
              isFocus = hoveredNodeId === node.id;
            } else {
              if (!isCompleted) {
                isFocus = isNodeActive;
              } else {
                isFocus = i === currentSection.nodes.length - 1; 
              }
            }

            const progress = save.nodeProgress?.[node.id] || 0;
            const totalLessons = node.lessons.length;
            const totalNodes = currentSection.nodes.length;
            const isNodePerfect = save.perfectNodes?.includes(node.id);

            const tooltip = (i === 0 && isLocked) ? (
              <button
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setSkipConfirmModal({ isOpen: true, sectionIdx: activeSectionIdx });
                }}
                className="flex flex-col items-center group/tt cursor-pointer animate-bounce"
              >
                <div className={`p-2 rounded-full shadow-lg transition bg-[#FFB300] text-white hover:bg-[#E6A100] border-2 border-white/20`}>
                  <Play size={24} fill="currentColor" className="ml-0.5" />
                </div>
                <div className={`w-2 h-2 rotate-45 -mt-1 shadow-sm transition bg-[#FFB300] group-hover/tt:bg-[#E6A100]`}></div>
              </button>
            ) : null;

            return (
              <PokemonCard
                key={node.id}
                node={node}
                index={i}
                totalNodes={totalNodes}
                isLocked={isNodeLocked}
                isCompleted={isNodeCompleted}
                isActive={isNodeActive}
                isFocus={isFocus}
                isDark={isDark}
                isPerfect={isNodePerfect}
                xpReward={xpPerLesson}
                progress={progress}
                totalLessons={totalLessons}
                tooltip={tooltip}
                onStart={() => setSelectedNode(node)}
                onHover={() => handleCardHover(node.id)}
                onLeave={handleCardLeave}
              />
            );
          })}
        </div>
      </div>

      {/* Lesson Start Popup */}
      <LessonStartModal
        open={!!selectedNode}
        onCancel={() => setSelectedNode(null)}
        onStart={() => {
          onNodeClick(selectedNode.id);
          setSelectedNode(null);
        }}
        node={selectedNode}
        theme={theme}
        isCompleted={selectedNode ? completedNodes.includes(selectedNode.id) : false}
        xpReward={xpPerLesson}
      />

      {/* ── Custom Skip Confirm Modal ── */}
      {skipConfirmModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border-2 text-center animate-pop ${isDark ? 'bg-[#334155] border-[#475569] text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-[#FFB300]/20 text-[#FFB300]`}>
              <FastForward size={32} fill="currentColor" />
            </div>
            <h2 className="text-xl font-black mb-6">이 섹션부터 시작하시겠습니까?</h2>
            
            <button
              onClick={() => {
                if (onRequestSkipTest) onRequestSkipTest(skipConfirmModal.sectionIdx);
                setSkipConfirmModal({ isOpen: false, sectionIdx: null });
              }}
              className="w-full bg-[#FFB300] hover:bg-[#E6A100] text-white font-black py-4 rounded-2xl transition shadow-[0_4px_0_0_#CC8F00] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
            >
              <Play size={20} fill="currentColor" /> 시작하기
            </button>
            <button 
              onClick={() => setSkipConfirmModal({ isOpen: false, sectionIdx: null })} 
              className={`w-full font-bold py-3 mt-1 text-sm transition ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
