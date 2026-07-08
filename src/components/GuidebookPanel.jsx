import React, { useState, useEffect } from 'react';
import { X, BookOpen } from 'lucide-react';

export default function GuidebookPanel({ isOpen, onClose, trackData, activeSectionIdx, theme = 'light' }) {
  const isDark = theme === 'dark';
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 240); // slightly less than 250ms to ensure it unmounts cleanly
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender || !trackData || activeSectionIdx == null) return null;

  const currentSection = trackData.sections[activeSectionIdx];
  if (!currentSection) return null;

  // Extract theory points only for the current section
  const nodesWithTheory = currentSection.nodes.map((node) => {
    const theoryPoints = (node.lessons || [])
      .map((lesson) => (Array.isArray(lesson) ? lesson[0] : lesson))
      .filter((step) => step && step.type === 'theory')
      .map((step) => step.content);
    return { id: node.id, title: node.title, theoryPoints };
  }).filter((n) => n.theoryPoints.length > 0);

  const shortTitle = currentSection.title.includes('\\n') 
    ? currentSection.title.split('\\n')[1] 
    : currentSection.title;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`} 
        onClick={onClose} 
      />

      {/* Drawer */}
      <div className={`relative w-full max-w-md h-full overflow-y-auto shadow-2xl 
        ${isClosing ? 'animate-slide-out-right-panel' : 'animate-slide-in-right-panel'}
        ${isDark ? 'bg-[#181A20] text-white' : 'bg-white text-gray-900'}`}
      >
        <div className={`sticky top-0 z-10 flex items-center justify-between p-5 border-b-2 ${isDark ? 'bg-[#181A20] border-[#2b3a42]' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00C4B5]/15 text-[#00C4B5] flex items-center justify-center shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <div className={`text-xs font-bold uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Unit {activeSectionIdx + 1} 가이드북
              </div>
              <div className="font-black text-lg leading-tight truncate">{shortTitle}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition ${isDark ? 'hover:bg-[#2b3a42] text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-8">
          {nodesWithTheory.length === 0 ? (
            <p className={`text-sm font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>이 유닛에는 아직 정리된 이론 노트가 없어요.</p>
          ) : (
            <div className="space-y-4">
              {nodesWithTheory.map((node) => (
                <div key={node.id} className={`rounded-2xl border-2 p-4 ${isDark ? 'bg-[#1f2937] border-[#2b3a42]' : 'bg-gray-50 border-gray-100'}`}>
                  <h3 className="font-black text-base mb-3 text-[#00C4B5]">{node.title}</h3>
                  <div className="space-y-3">
                    {node.theoryPoints.map((text, i) => (
                      <p key={i} className={`text-sm leading-relaxed whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
