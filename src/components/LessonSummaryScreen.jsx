import React from 'react';
import Confetti from './Confetti';

// Duolingo-style post-lesson report: shown once a lesson (or skip test) is
// finished, before returning to the skill tree. Pure presentational —
// all numbers are computed by the caller.
export default function LessonSummaryScreen({
  isSkipTest = false,
  isExamMode = false,
  examScore = 0,
  examPass = false,
  weakTopics = [],
  xpEarned = 0,
  gemsEarned = 0,
  accuracy = 100,
  mistakeCount = 0,
  timeLabel = '0:00',
  onContinue,
}) {
  const perfect = mistakeCount === 0;

  if (isExamMode) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#0B1120] text-white items-center justify-center p-6 relative overflow-hidden">
        {examPass && <Confetti />}

        <div className="w-full max-w-md flex flex-col items-center animate-pop mt-10">
          <div className="text-7xl mb-4">{examPass ? '🏆' : '💦'}</div>
          <h1 className="text-3xl md:text-4xl font-black mb-2 text-center">
            {examPass ? '보스전 통과!' : '보스전 실패...'}
          </h1>
          <p className="text-gray-400 font-bold mb-8 text-center">
            {examPass 
              ? '대단해요! 티어의 모든 개념을 마스터하셨습니다.' 
              : '아직 훈련이 더 필요합니다. 부족한 개념을 복습하고 다시 도전하세요.'}
          </p>

          <div className="w-full bg-[#334155] border-2 border-[#475569] rounded-3xl p-6 flex flex-col items-center mb-6">
            <span className="text-sm font-bold text-gray-400 mb-1">최종 점수</span>
            <span className={`text-6xl font-black ${examPass ? 'text-[#FFB300]' : 'text-red-400'}`}>
              {examScore}점
            </span>
            <span className="text-sm font-bold text-gray-500 mt-2">
              합격 기준: 70점 이상
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">⏱️</span>
              <span className="text-2xl font-black text-white">{timeLabel}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">소요 시간</span>
            </div>
            <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">🎯</span>
              <span className="text-2xl font-black text-[#FFB300]">{examPass ? 'PASS' : 'FAIL'}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">결과</span>
            </div>
          </div>

          {!examPass && weakTopics.length > 0 && (
            <div className="w-full bg-red-500/10 border-2 border-red-500/20 rounded-3xl p-5 mb-8">
              <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span> 취약 개념 분석
              </h3>
              <ul className="list-disc list-inside text-sm font-bold text-red-300/80 space-y-1">
                {weakTopics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={onContinue}
            className={`w-full font-black py-4 rounded-2xl text-lg transition active:translate-y-1 active:shadow-none
              ${examPass 
                ? 'bg-[#FFB300] hover:bg-[#E6A100] text-white shadow-[0_6px_0_#CC8F00]' 
                : 'bg-gray-600 hover:bg-gray-500 text-white shadow-[0_6px_0_#4b5563]'}`}
          >
            {examPass ? '다음 티어로 넘어가기' : '복습하러 가기'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0B1120] text-white items-center justify-center p-6 relative overflow-hidden">
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
            <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">⭐</span>
              <span className="text-2xl font-black text-[#FFB300]">+{xpEarned}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">획득 XP</span>
            </div>
          )}
          {!isSkipTest && (
            <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
              <span className="text-3xl mb-1">💎</span>
              <span className="text-2xl font-black text-[#B96CE8]">+{gemsEarned}</span>
              <span className="text-xs font-bold text-gray-400 mt-1">획득 젬</span>
            </div>
          )}
          <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
            <span className="text-3xl mb-1">🎯</span>
            <span className="text-2xl font-black text-[#FFB300]">{accuracy}%</span>
            <span className="text-xs font-bold text-gray-400 mt-1">정확도</span>
          </div>
          <div className="bg-[#334155] border-2 border-[#475569] rounded-3xl p-5 flex flex-col items-center">
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
          className="w-full bg-[#FFB300] hover:bg-[#E6A100] text-white font-black py-4 rounded-2xl text-lg shadow-[0_6px_0_#CC8F00] active:shadow-none active:translate-y-1 transition"
        >
          계속하기
        </button>
      </div>
    </div>
  );
}
