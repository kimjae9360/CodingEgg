import React, { useState } from 'react';
import { Terminal, Cpu, Database, Globe, Play, Code2, Zap, Heart, Target, TrendingUp, Trophy } from 'lucide-react';
import AnimatedCodeBox from './AnimatedCodeBox';

export default function LandingScreen({ onLogin }) {
  const [modalStep, setModalStep] = useState('hidden'); // 'hidden', 'select', 'guest-name'
  const [name, setName] = useState('');

  const handleStart = () => setModalStep('select');

  const handleGoogleLogin = () => {
    alert('구글 로그인 기능은 백엔드(Supabase) 연동과 함께 곧 추가될 예정입니다! 지금은 게스트로 시작해주세요.');
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    onLogin(name.trim() || '코딩 꿈나무');
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-y-auto font-sans selection:bg-[#FFB300] selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-800">
        <div className="font-black text-2xl tracking-tight text-white flex items-center gap-2">
          <span>🥚</span> 코딩에그
        </div>
        <div className="flex gap-4">
          <button onClick={handleStart} className="bg-[#FFB300] hover:bg-[#E6A100] text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(0,196,181,0.4)] transition">
            무료로 시작하기
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-16 border-b border-gray-800">
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-block bg-[#1E293B] border border-gray-700 text-[#FFB300] font-bold py-2 px-6 rounded-full text-sm md:text-base animate-pulse">
            하루 5분, 게임처럼 즐기는 코딩 🎮
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight break-keep text-gray-100">
            코딩, 이제 게임처럼 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#FF6B00] whitespace-nowrap">무료로 즐기세요.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-bold leading-relaxed max-w-2xl break-keep">
            지루한 인강과 두꺼운 책은 버리세요.<br/>
            하루 5분, 귀여운 코딩에그와 함께 진짜 코딩 실력을 키워보세요. 이 모든 것이 100% 무료입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={handleStart} className="bg-white hover:bg-gray-200 text-black font-black py-4 px-8 rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
              지금 바로 무료로 시작하기 <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Hero Animation Box */}
        <div className="flex-1 w-full max-w-lg xl:max-w-none relative animate-float">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFB300] rounded-full blur-[150px] opacity-20"></div>
          
          {/* Floating Emojis */}
          <div className="absolute -top-6 -left-6 text-6xl animate-bounce z-20" style={{ animationDelay: '0s' }}>😎</div>
          <div className="absolute top-12 -right-6 text-5xl animate-bounce z-20" style={{ animationDelay: '0.5s' }}>🔥</div>
          <div className="absolute -bottom-6 right-16 text-6xl animate-bounce z-20" style={{ animationDelay: '1s' }}>💎</div>

          <AnimatedCodeBox />
        </div>
      </section>

      {/* 2. Science-based Learning Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-800">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-100">눈으로만 보는 코딩은 그만!</h2>
          <p className="text-xl text-gray-400 font-bold">인지과학에 기반한 코딩에그만의 압도적인 학습 효율을 경험하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1E293B] border border-gray-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <div className="bg-[#FFB300]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={32} className="text-[#FFB300]" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">마이크로 러닝</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              출퇴근길 지하철에서도 스마트폰으로 코딩을 배웁니다. 핵심만 압축된 5분 단위 레슨으로 지루할 틈이 없습니다.
            </p>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <div className="bg-[#FFB300]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Code2 size={32} className="text-[#FFB300]" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">근육 기억 (Muscle Memory)</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              객관식, 단어 맞추기, 빈칸 채우기, 그리고 백지 코딩까지. 손가락이 코드를 먼저 기억하도록 실습을 강제합니다.
            </p>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <div className="bg-[#ff4b4b]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-[#ff4b4b]" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">1초 즉각 피드백</h3>
            <p className="text-gray-400 font-bold leading-relaxed text-lg">
              코드를 틀리자마자 AI 튜터가 오류의 원인을 짚어줍니다. 에러를 두려워하지 않고 무한히 시도할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Gamification Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-800 flex flex-col xl:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-100">
            코딩이 게임보다 <br/>
            <span className="text-[#FFB300]">재밌어집니다.</span>
          </h2>
          <p className="text-xl text-gray-400 font-bold leading-relaxed">
            매일 접속하게 만드는 불타오르는 스트릭, 오답을 내면 깎이는 하트, 그리고 주간 리그 승급전까지.<br/><br/>
            공부한다는 느낌 없이 퀘스트를 깨다 보면 어느새 파이썬 마스터가 되어있을 거예요.
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {/* Mockups */}
          <div className="bg-[#1E293B] border-2 border-orange-500/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
            <TrendingUp size={48} className="text-orange-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">14일</div>
            <div className="text-sm font-bold text-gray-500">연속 학습 스트릭!</div>
          </div>
          <div className="bg-[#1E293B] border-2 border-red-500/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
            <Heart size={48} className="text-red-500 mb-4" fill="currentColor" />
            <div className="text-3xl font-black text-white mb-1">3 / 5</div>
            <div className="text-sm font-bold text-gray-500">남은 하트 조심하세요!</div>
          </div>
          <div className="bg-[#1E293B] border-2 border-purple-500/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center col-span-2">
            <Trophy size={48} className="text-purple-500 mb-4" />
            <div className="text-2xl font-black text-white mb-1">다이아몬드 리그 승급 임박</div>
            <div className="w-full bg-gray-800 h-3 rounded-full mt-4 overflow-hidden">
              <div className="bg-purple-500 h-full w-4/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Course Showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-100">무엇을 만들 수 있을까요?</h2>
          <p className="text-xl text-gray-400 font-bold">"문법을 배웁니다"가 아닙니다. "결과물"을 만들어냅니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="group bg-[#1E293B] border border-gray-800 p-8 rounded-3xl hover:border-blue-500 transition duration-300 overflow-hidden relative">
            <div className="absolute -right-6 -top-6 text-9xl opacity-5 group-hover:opacity-10 transition">🐍</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Terminal className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-black text-white">파이썬 (Python) 자동화</h3>
            </div>
            <p className="text-gray-400 font-bold text-lg leading-relaxed mb-6">
              "야근은 그만! 엑셀 파일 1,000개 정리, 마우스 클릭 한 번에 1초 만에 끝내기"
            </p>
            <div className="text-sm font-bold text-gray-500">배우게 될 내용: 변수, 조건문, 파일 I/O</div>
          </div>

          <div className="group bg-[#1E293B] border border-gray-800 p-8 rounded-3xl hover:border-green-500 transition duration-300 overflow-hidden relative">
            <div className="absolute -right-6 -top-6 text-9xl opacity-5 group-hover:opacity-10 transition">🕸️</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Globe className="text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white">크롤링 (Web Crawling)</h3>
            </div>
            <p className="text-gray-400 font-bold text-lg leading-relaxed mb-6">
              "매일 아침 네이버 뉴스 랭킹 1위부터 100위까지 내 폰으로 자동 전송하는 봇 만들기"
            </p>
            <div className="text-sm font-bold text-gray-500">배우게 될 내용: BeautifulSoup, 정규표현식</div>
          </div>

          <div className="group bg-[#1E293B] border border-gray-800 p-8 rounded-3xl hover:border-orange-500 transition duration-300 overflow-hidden relative">
            <div className="absolute -right-6 -top-6 text-9xl opacity-5 group-hover:opacity-10 transition">💾</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Database className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-black text-white">데이터베이스 (MySQL)</h3>
            </div>
            <p className="text-gray-400 font-bold text-lg leading-relaxed mb-6">
              "쇼핑몰 회원 100만 명의 데이터를 안전하고 빠르게 관리하는 은행장 되기"
            </p>
            <div className="text-sm font-bold text-gray-500">배우게 될 내용: SELECT, JOIN, 데이터 모델링</div>
          </div>

          <div className="group bg-[#1E293B] border border-gray-800 p-8 rounded-3xl hover:border-purple-500 transition duration-300 overflow-hidden relative">
            <div className="absolute -right-6 -top-6 text-9xl opacity-5 group-hover:opacity-10 transition">🤖</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Cpu className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-black text-white">인공지능 (LLM)</h3>
            </div>
            <p className="text-gray-400 font-bold text-lg leading-relaxed mb-6">
              "나만의 챗GPT 만들기! 내 질문에 똑똑하게 대답하는 나만의 인공지능 비서 구축하기"
            </p>
            <div className="text-sm font-bold text-gray-500">배우게 될 내용: LangChain, Prompt Engineering</div>
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <button onClick={handleStart} className="bg-[#FFB300] hover:bg-[#E6A100] text-white font-black py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(0,196,181,0.3)] transition transform hover:-translate-y-1">
            무료 레슨 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-600 font-bold">
        <p>© 2026 Coding Egg. 진짜 실력을 키우는 무료 코딩 학습 플랫폼.</p>
      </footer>

      {/* Login Modals */}
      {modalStep !== 'hidden' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          
          {/* Step 1: Select Login Method */}
          {modalStep === 'select' && (
            <div className="w-full max-w-sm bg-[#1E293B] border border-gray-800 rounded-3xl p-8 shadow-2xl animate-pop">
              <div className="text-5xl text-center mb-6">🥚</div>
              <h2 className="text-2xl font-black text-center mb-2 text-white">어떻게 시작할까요?</h2>
              <p className="text-gray-400 font-bold text-center mb-8 text-sm">코딩에그의 세계에 오신 것을 환영합니다!</p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleGoogleLogin}
                  className="w-full bg-white hover:bg-gray-100 text-black font-black py-4 rounded-xl transition flex items-center justify-center gap-3 shadow-[0_4px_0_#d1d5db] active:translate-y-1 active:shadow-none"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  구글 계정으로 시작하기
                </button>
                <button 
                  onClick={() => setModalStep('guest-name')}
                  className="w-full bg-[#334155] hover:bg-[#475569] text-white font-black py-4 rounded-xl transition shadow-[0_4px_0_#1e293b] active:translate-y-1 active:shadow-none"
                >
                  게스트로 체험하기
                </button>
              </div>

              <button
                onClick={() => setModalStep('hidden')}
                className="w-full text-gray-500 hover:text-gray-300 font-bold py-2 mt-6 text-sm transition"
              >
                닫기
              </button>
            </div>
          )}

          {/* Step 2: Guest Name Prompt */}
          {modalStep === 'guest-name' && (
            <form
              onSubmit={handleSubmitName}
              className="w-full max-w-sm bg-[#1E293B] border border-gray-800 rounded-3xl p-8 shadow-2xl animate-pop"
            >
              <div className="text-5xl text-center mb-4">🥚</div>
              <h2 className="text-2xl font-black text-center mb-2 text-white">닉네임을 알려주세요!</h2>
              <p className="text-gray-400 font-bold text-center mb-6 text-sm">프로필과 리더보드에 표시될 이름이에요.</p>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                placeholder="예: 코딩 꿈나무"
                className="w-full bg-[#0B1120] text-white px-4 py-3 rounded-xl outline-none border border-gray-800 focus:border-[#FFB300] transition mb-4 text-center font-bold"
              />
              <button type="submit" className="w-full bg-[#FFB300] hover:bg-[#E6A100] text-white font-black py-3 rounded-xl transition shadow-[0_4px_0_#CC8F00] active:translate-y-1 active:shadow-none">
                시작하기
              </button>
              <button
                type="button"
                onClick={() => setModalStep('select')}
                className="w-full text-gray-500 hover:text-gray-300 font-bold py-2 mt-4 text-sm transition"
              >
                뒤로 가기
              </button>
            </form>
          )}

        </div>
      )}
    </div>
  );
}
