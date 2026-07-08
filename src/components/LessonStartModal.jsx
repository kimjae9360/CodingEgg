import React from 'react';
import { Zap, RotateCcw } from 'lucide-react';

// Duolingo-style "start this lesson?" popup that appears when tapping a
// node on the path, instead of jumping straight into the lesson.
export default function LessonStartModal({ open, theme = 'light', node, isCompleted, xpReward = 20, onStart, onCancel }) {
  if (!open || !node) return null;
  const isDark = theme === 'dark';
  const stepCount = node.lessons?.length ?? 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onCancel}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border-2 text-center animate-pop ${isDark ? 'bg-[#334155] border-[#475569] text-white' : 'bg-white border-gray-100 text-gray-800'}`}
      >
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl ${isCompleted ? 'bg-[#FFB300]/20' : 'bg-[#FFB300]/20'}`}>
          {isCompleted ? '🏆' : '🥚'}
        </div>
        <h2 className="text-xl font-black mb-1">{node.title}</h2>
        <p className={`font-bold text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {stepCount}단계 문제 · {isCompleted ? '복습하고 감을 유지해보세요' : '새로운 개념을 배워볼까요?'}
        </p>
        <button
          onClick={onStart}
          className="w-full bg-[#FFB300] hover:bg-[#E6A100] text-white font-black py-4 rounded-2xl transition shadow-[0_4px_0_0_#CC8F00] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
        >
          {isCompleted ? <RotateCcw size={20} /> : <Zap size={20} fill="currentColor" />}
          {isCompleted ? '복습하기' : `시작하기 +${xpReward} XP`}
        </button>
        <button onClick={onCancel} className={`w-full font-bold py-3 mt-1 text-sm transition ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>
          닫기
        </button>
      </div>
    </div>
  );
}
