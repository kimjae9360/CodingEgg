import React, { useState, useEffect } from 'react';
import LessonStartModal from './LessonStartModal';
import GuidebookPanel from './GuidebookPanel';
import PokemonCard from './PokemonCard';
import { FastForward, ChevronLeft, ChevronRight, BookOpen, CheckCircle2, Lock, Play, Flame, Trophy, Gem, Heart, RotateCcw } from 'lucide-react';

// Section info per unit range
function getSectionInfo(unitIdx) {
  if (unitIdx < 5)  return { label: 'SECTION 1', name: '파이썬 비기너',   emoji: '🐣', gradient: 'linear-gradient(135deg, #00C4B5 0%, #1CB0F6 100%)', iconColor: '#00C4B5' };
  if (unitIdx < 10) return { label: 'SECTION 2', name: '파이썬 디벨로퍼', emoji: '⚡', gradient: 'linear-gradient(135deg, #CE82FF 0%, #FF66B1 100%)', iconColor: '#CE82FF' };
  return                     { label: 'SECTION 3', name: '파이썬 마스터',   emoji: '🔥', gradient: 'linear-gradient(135deg, #FF9600 0%, #FF66B1 100%)', iconColor: '#FF9600' };
}

function getShortTitle(fullTitle) {
  if (!fullTitle) return '';
  if (fullTitle.includes('\n')) return fullTitle.split('\n')[1];
  if (fullTitle.includes(': ')) return fullTitle.split(': ').slice(1).join(': ');
  return fullTitle;
}



export default function SkillTreeBoard({ onNodeClick, completedNodes, trackData, theme = 'light', onRequestSkipTest, onChangeCourse, xpPerLesson = 20, save, maxHearts = 5 }) {
  const isDark = theme === 'dark';
  const [selectedNode, setSelectedNode] = useState(null); 
  const [showGuidebook, setShowGuidebook] = useState(false); 
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const hoverTimeout = React.useRef(null);

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

  // Find the first uncompleted section to show on mount
  const [activeSectionIdx, setActiveSectionIdx] = useState(() => {
    const uncompletedSecIdx = trackData.sections.findIndex(sec => 
      !sec.nodes.every(n => completedNodes.includes(n.id))
    );
    return Math.max(0, uncompletedSecIdx);
  });

  const currentSection = trackData.sections[activeSectionIdx];
  const isLocked = isSectionLocked(activeSectionIdx);
  const isCompleted = isSectionFullyCompleted(activeSectionIdx);
  const info = getSectionInfo(activeSectionIdx);
  const shortTitle = getShortTitle(currentSection.title);

  return (
    <div className={`w-full min-h-screen flex flex-col relative py-8 px-4 md:px-8 xl:px-12 ${isDark ? 'bg-[#181A20]' : 'bg-[#F8FAFC]'}`}>
      
      {/* ── Top Header with Stats (Mobile Optimized) ── */}
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-6">
        
        {/* Left Side: Buttons */}
        <div className="flex gap-2 w-full sm:w-auto">
           <button
             onClick={() => setShowGuidebook(true)}
             className={`flex-1 sm:flex-none flex items-center justify-center gap-2 font-black px-4 py-2 rounded-xl transition shadow-sm border ${isDark ? 'bg-[#2b3a42] hover:bg-[#3b4a52] text-white border-transparent' : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'}`}
           >
             <BookOpen size={18} className="text-[#00C4B5] shrink-0" /> 
             <span className="text-left leading-tight text-xs md:text-sm">가이드북</span>
           </button>
           {onChangeCourse && (
             <button
               onClick={onChangeCourse}
               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 font-black px-4 py-2 rounded-xl transition shadow-sm border ${isDark ? 'bg-[#2b3a42] hover:bg-[#3b4a52] text-white border-transparent' : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'}`}
             >
               <ChevronLeft size={18} className="shrink-0" /> 
               <span className="text-left leading-tight text-xs md:text-sm">코스<br/>변경</span>
             </button>
           )}
        </div>

        {/* Right Side: Stats */}
        <div className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
         {save && (
           <>
             <div className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#FFB300] px-3 md:px-4 py-1.5 md:py-2 rounded-xl border ${isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-yellow-50 border-yellow-100'}`}>
               <Flame size={18} fill="currentColor" /> {save.streak}
             </div>
             <div className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#00C4B5] px-3 md:px-4 py-1.5 md:py-2 rounded-xl border ${isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-teal-50 border-teal-100'}`}>
               <Trophy size={18} /> {save.xp}
             </div>
             <div className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#B96CE8] px-3 md:px-4 py-1.5 md:py-2 rounded-xl border ${isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-purple-50 border-purple-100'}`}>
               <Gem size={18} /> {save.gems}
             </div>
             <div className={`flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-base text-[#ff4b4b] px-3 md:px-4 py-1.5 md:py-2 rounded-xl border ${isDark ? 'bg-[#2b3a42] border-[#3b4a52]' : 'bg-red-50 border-red-100'}`}>
               <Heart size={18} fill="currentColor" /> {save.hearts}/{maxHearts}
             </div>
           </>
         )}
        </div>
      </div>

      {/* ── Compact Unit Navigation ── */}
      <div className="max-w-6xl mx-auto w-full mb-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 md:gap-6 w-full justify-center">
          {/* 처음으로 버튼 */}
          <div className="w-20 md:w-24 flex justify-end">
            {activeSectionIdx > 0 && (
              <button 
                onClick={() => setActiveSectionIdx(0)}
                className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg transition ${isDark ? 'bg-[#2b3a42] hover:bg-[#3b4a52] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                처음으로
              </button>
            )}
          </div>

          <div className={`flex items-center gap-4 px-2 py-2 rounded-full border-2 shadow-sm ${isDark ? 'bg-[#181A20] border-[#2b3a42]' : 'bg-white border-gray-100'}`}>
            <button 
              onClick={() => setActiveSectionIdx(p => Math.max(0, p - 1))}
              disabled={activeSectionIdx === 0}
              className={`p-2 rounded-full transition ${activeSectionIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/10'} ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex flex-col items-center justify-center min-w-[280px] md:min-w-[320px] text-center">
              <span className="text-sm font-black tracking-wider opacity-60 mb-0.5" style={{ color: info.iconColor }}>
                {info.label}
              </span>
              <span className={`text-lg font-black ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Unit {activeSectionIdx + 1} : {shortTitle}
              </span>
            </div>

            <button 
              onClick={() => setActiveSectionIdx(p => Math.min(trackData.sections.length - 1, p + 1))}
              disabled={activeSectionIdx === trackData.sections.length - 1}
              className={`p-2 rounded-full transition ${activeSectionIdx === trackData.sections.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/10'} ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* 끝으로 버튼 */}
          <div className="w-20 md:w-24 flex justify-start">
            {activeSectionIdx < trackData.sections.length - 1 && (
              <button 
                onClick={() => setActiveSectionIdx(trackData.sections.length - 1)}
                className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg transition ${isDark ? 'bg-[#2b3a42] hover:bg-[#3b4a52] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                끝으로
              </button>
            )}
          </div>
        </div>

        <p className={`text-sm md:text-base font-bold mt-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {trackData.description}
        </p>
      </div>

      {/* ── Pokemon Card Display (Nodes as TCG Cards) ── */}
      <div className="w-full max-w-6xl mx-auto pb-32">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center pt-8 px-4 md:px-8 min-h-[400px]">
          {currentSection.nodes.map((node, i) => {
            const isNodeCompleted = completedNodes.includes(node.id);
            const isNodeLocked = isLocked || (!isNodeCompleted && i > 0 && !completedNodes.includes(currentSection.nodes[i - 1].id));
            const isNodeActive = !isNodeCompleted && !isNodeLocked;
            
            // Focus logic: 
            // - If user is hovering any card, that card is focused.
            // - If NO card is hovered, the currently active (next to learn) card is focused.
            // - If the section is completely finished and nothing is hovered, maybe focus the first one or none.
            let isFocus = false;
            if (hoveredNodeId) {
              isFocus = hoveredNodeId === node.id;
            } else {
              if (!isCompleted) {
                isFocus = isNodeActive;
              } else {
                isFocus = i === currentSection.nodes.length - 1; // Focus last card if all done
              }
            }

            const progress = save.nodeProgress?.[node.id] || 0;
            const totalLessons = node.lessons.length;

            return (
              <PokemonCard
                key={node.id}
                node={node}
                index={i}
                isLocked={isNodeLocked}
                isCompleted={isNodeCompleted}
                isActive={isNodeActive}
                isFocus={isFocus}
                isDark={isDark}
                xpReward={xpPerLesson}
                progress={progress}
                totalLessons={totalLessons}
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

      {/* Guidebook Drawer */}
      <GuidebookPanel
        isOpen={showGuidebook}
        onClose={() => setShowGuidebook(false)}
        trackData={trackData}
        activeSectionIdx={activeSectionIdx}
        theme={theme}
      />
    </div>
  );
}
