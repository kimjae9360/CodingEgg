import React, { useState } from 'react';
import eggCharacter from '../assets/egg_character.png';

export default function LandingScreen({ onLogin }) {
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [name, setName] = useState('');

  const handleStart = () => setShowNamePrompt(true);

  const handleSubmitName = (e) => {
    e.preventDefault();
    onLogin(name.trim() || '코딩 꿈나무');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-y-auto font-sans selection:bg-[#00C4B5] selection:text-white">

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10">
        <div className="font-black text-2xl tracking-tight text-[#FFB300] flex items-center gap-2">
          <span>🥚</span> Coding Egg
        </div>
        <div className="flex gap-4">
          <button onClick={handleStart} className="text-white font-bold hover:text-[#00C4B5] transition hidden md:block">로그인</button>
          <button onClick={handleStart} className="bg-[#00C4B5] hover:bg-[#15d8c9] text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(0,196,181,0.4)] transition">무료로 시작하기</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-[#00C4B5] font-bold py-2 px-6 rounded-full text-sm md:text-base animate-pulse">
            AI 시대 생존을 위한 코딩 학습 플랫폼 🚀
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight break-keep">
            코딩은 외우는 것이 아니라 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4B5] to-[#FFB300] whitespace-nowrap">지휘하는 것입니다.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-bold leading-relaxed max-w-2xl break-keep">
            어린아이부터 어른까지 남녀노소 누구나 무료로 코딩을 배울 수 있습니다.<br/><br/>
            챗GPT가 코드를 대신 짜주는 시대,<br/>
            문법 암기식 교육은 도태됩니다.<br/><br/>
            코딩에그와 함께 AI를 부리는<br/>
            <span className="text-white text-2xl md:text-3xl inline-block mt-2">최고의 설계자(Builder)로 부화하세요.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={handleStart} className="bg-white hover:bg-gray-100 text-gray-900 font-black py-4 px-8 rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              구글 계정으로 시작하기
            </button>
          </div>
          <p className="text-sm text-gray-500 font-bold">
            ※ 데모 버전에서는 실제 구글 로그인 대신 닉네임만 입력하면 바로 시작할 수 있어요.
          </p>
        </div>

        <div className="flex-1 relative flex justify-center w-full max-w-lg xl:max-w-none animate-float">
          {/* Decorative glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C4B5] rounded-full blur-[120px] opacity-20"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 shadow-2xl flex flex-col items-center w-full">
             <div className="w-64 h-64 rounded-full border-8 border-[#FFB300] bg-white overflow-hidden shadow-[0_0_50px_rgba(255,179,0,0.5)] mb-8">
                <img src={eggCharacter} alt="Egg Tutor" className="w-[120%] h-[120%] object-cover" />
             </div>
             <div className="w-full bg-[#181A20] text-white p-5 rounded-2xl border border-gray-700 shadow-lg font-bold text-lg">
               <span className="text-[#00C4B5] mr-2">Egg Tutor:</span>
               "코드에 버그가 있어요. 어디를 고치면 될까요?"
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">타 사이트와 무엇이 다른가요?</h2>
          <p className="text-xl text-gray-400 font-bold">단순 알고리즘 기계가 아닌, AI 시대를 리드할 역량을 키웁니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition transform hover:-translate-y-2">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-2xl font-black mb-4 text-[#00C4B5]">대화형 AI 페어 프로그래밍</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              이론 따로, 실습 따로? NO! 스플릿 화면에서 나만의 에그 튜터와 실시간으로 대화하며 코드를 검증하고 논리를 설계합니다.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🧩</div>
            <h3 className="text-2xl font-black mb-4 text-[#FFB300]">문법 암기보다 논리적 사고</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              하트 시스템과 오답 큐(Queue)를 통한 듀오링고식 게이미피케이션. 정답을 맞출 때까지 멈추지 않는 지독한 튜터링을 경험하세요.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-2xl font-black mb-4 text-white">실전 AI 자격증 마스터 트랙</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              흥미 위주의 기초 학습을 넘어서, 기업이 요구하는 AICE 실무 자격증 등 강력한 커리어 스킬 트리 라인업이 준비되어 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-12 text-center text-gray-500 font-bold">
        <p>© 2026 Coding Egg. AI 시대를 지휘하는 설계자들의 요람.</p>
      </footer>

      {/* Nickname prompt — stands in for real OAuth, which needs backend credentials this demo doesn't have */}
      {showNamePrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <form
            onSubmit={handleSubmitName}
            className="w-full max-w-sm bg-[#181A20] border-2 border-[#2b3a42] rounded-3xl p-8 shadow-2xl animate-pop"
          >
            <div className="text-5xl text-center mb-4">🥚</div>
            <h2 className="text-2xl font-black text-center mb-2">닉네임을 알려주세요!</h2>
            <p className="text-gray-400 font-bold text-center mb-6 text-sm">프로필과 리더보드에 표시될 이름이에요.</p>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              placeholder="예: 코딩 꿈나무"
              className="w-full bg-[#1f2937] text-white px-4 py-3 rounded-xl outline-none border border-[#3b4a52] focus:border-[#00C4B5] transition mb-4 text-center font-bold"
            />
            <button type="submit" className="w-full bg-[#00C4B5] hover:bg-[#15d8c9] text-white font-black py-3 rounded-xl transition">
              시작하기
            </button>
            <button
              type="button"
              onClick={() => setShowNamePrompt(false)}
              className="w-full text-gray-500 hover:text-gray-300 font-bold py-2 mt-1 text-sm transition"
            >
              취소
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
