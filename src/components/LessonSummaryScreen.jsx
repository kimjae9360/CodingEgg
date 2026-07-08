import React from 'react';
import Confetti from './Confetti';

// Duolingo-style post-lesson report: shown once a lesson (or skip test) is
// finished, before returning to the skill tree. Pure presentational —
// all numbers are computed by the caller.
export default function LessonSummaryScreen({
  isSkipTest = false,
  xpEarned = 0,
  gemsEarned = 0,
  accuracy = 100,
  mistakeCount = 0,
  timeLabel = '0:00',
  onContinue,
}) {
  const perfect = mistakeCount === 0;

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#181A20] text-white items-center justify-center p-6 relative overflow-hidden">
      <Confetti />

      <div className="w-full max-w-md flex flex-col items-center animate-pop">
        <div className="text-7xl mb-4">{isSkipTest ? '⚡' : perfect ? '🏆' : '🎉'}</div>

        <h1 className="text-3xl md:text-4xl font-black mb-2 text-center">
          {isSkipTest ? '테스트 통과!' : '레슨 완료!'}
        </h1>
        <p className="text-gray-400 font-bold mb-10 text-center">
          {isSkipTest
            ? '실력을 증명해서 유닛을 건너뛰었어요!'
            : perfect
              ? '실수 없이 완벽하게 끝냈어요, 대단해요!'
              : '끝까지 포기하지 않고 완료했어요!'}
        </p>

        <div className="grid grid-cols-2 gap-4 w-full mb-4">
          {!isSkipTest && (
            <div className="bg-[#2b3a42] border-2 border-[#3b4a52] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">⭐</span>
              <span className="text-2xl font-black text-[#FFB300]">+{xpEarned}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">획득 XP</span>
            </div>
          )}
          {!isSkipTest && (
            <div className="bg-[#2b3a42] border-2 border-[#3b4a52] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">💎</span>
              <span className="text-2xl font-black text-[#B96CE8]">+{gemsEarned}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">획득 젬</span>
            </div>
          )}
          <div className="bg-[#2b3a42] border-2 border-[#3b4a52] rounded-3xl p-5 flex flex-col items-center">
            <span className="text-3xl mb-1">🎯</span>
            <span className="text-2xl font-black text-[#00C4B5]">{accuracy}%</span>
            <span className="text-xs font-bold text-gray-400 mt-1">정확도</span>
          </div>
          <div className="bg-[#2b3a42] border-2 border-[#3b4a52] rounded-3xl p-5 flex flex-col items-center">
            <span className="text-3xl mb-1">⏱️</span>
            <span className="text-2xl font-black text-white">{timeLabel}</span>
            <span className="text-xs font-bold text-gray-400 mt-1">소요 시간</span>
          </div>
        </div>

        {mistakeCount > 0 && (
          <div className="text-sm font-bold text-gray-500 mb-8">
            💔 하트 {mistakeCount}개 소모 (오답 {mistakeCount}회)
          </div>
        )}

        <button
          onClick={onContinue}
          className="w-full bg-[#00C4B5] hover:bg-[#15d8c9] text-white font-black py-4 rounded-2xl text-lg shadow-[0_6px_0_#00A396] active:shadow-none active:translate-y-1 transition"
        >
          계속하기
        </button>
      </div>
    </div>
  );
}
