import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import eggCharacter from '../assets/egg_character.png';
import Confetti from './Confetti';
import LessonSummaryScreen from './LessonSummaryScreen';
import { playCorrectSound, playWrongSound, playFinishSound } from '../lib/sound';
import { checkOllamaAvailable, askOllamaTutor, OLLAMA_MODEL } from '../lib/ollama';

export default function InteractiveLessonBoard({ nodeId, trackData, overrideNode, isSkipTest = false, onComplete, onBack, hearts, onLoseHeart, xpPerLesson = 20, gemsPerLesson = 10 }) {
  const [stepsQueue, setStepsQueue] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [mobilePanel, setMobilePanel] = useState('chat'); // 'chat' | 'code' — mobile-only tab switch
  const [showConfetti, setShowConfetti] = useState(false);
  const [ollamaAvailable, setOllamaAvailable] = useState(null); // null = checking, true/false = known
  const [isTutorThinking, setIsTutorThinking] = useState(false);
  const [mistakeCount, setMistakeCount] = useState(0); // wrong answers this lesson — feeds the post-lesson report
  const [isEditorFocused, setIsEditorFocused] = useState(false); // hides the "type here" bubble while typing
  const pyodideRef = useRef(null);
  const chatEndRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const finishTimeRef = useRef(null);

  // Check once whether a local Ollama server is reachable; falls back to the
  // built-in rule-based tutor if not (see src/lib/ollama.js for setup).
  useEffect(() => {
    checkOllamaAvailable().then(setOllamaAvailable);
  }, []);

  // Initialize Queue
  useEffect(() => {
    let node = overrideNode || null;
    if (!node) {
      for (const section of trackData.sections) {
        node = section.nodes.find(n => n.id === nodeId);
        if (node) break;
      }
    }
    if (node) {
      const selectedLessons = node.lessons.map(lesson => 
        Array.isArray(lesson) ? lesson[Math.floor(Math.random() * lesson.length)] : lesson
      );
      setStepsQueue([...selectedLessons]);
      setChatHistory([{
        sender: 'egg',
        type: 'text',
        content: isSkipTest
          ? `⚡ 건너뛰기 테스트를 시작합니다! 힌트 없이 문제를 풀어 실력을 증명해보세요.`
          : `환영합니다! ${node.title} 레슨을 시작해볼까요?`
      }]);
    }
  }, [nodeId, trackData, overrideNode, isSkipTest]);

  // Init Pyodide
  useEffect(() => {
    async function initPyodide() {
      try {
        if (window.loadPyodide) {
          pyodideRef.current = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
          });
          setIsPyodideReady(true);
        }
      } catch (err) {
        console.error("Pyodide load failed:", err);
      }
    }
    initPyodide();
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, currentStepIndex]);

  const currentStep = stepsQueue[currentStepIndex];

  // Set initial code when a coding step starts
  useEffect(() => {
    if (currentStep && currentStep.type === 'quiz_code') {
      setCode(currentStep.initialCode || '');
      setOutput('');
      setMobilePanel('code'); // jump straight to the editor tab on mobile for coding steps
    }
  }, [currentStepIndex, currentStep]);

  // Monaco focus tracking — the "여기에 입력하세요" bubble hides while the
  // learner is actually looking at/typing in the editor, and comes back
  // when they click away, instead of sitting there permanently.
  const handleEditorMount = (editorInstance) => {
    editorInstance.onDidFocusEditorText(() => setIsEditorFocused(true));
    editorInstance.onDidBlurEditorText(() => setIsEditorFocused(false));
  };

  // One-line summary for a finished step in the history feed — compact by
  // design instead of a big collapsible card, so past steps take up almost
  // no vertical space but still show what happened at a glance.
  const summarizeCompletedStep = (step) => {
    if (step.type === 'theory') {
      const text = step.content || '';
      return text.length > 44 ? `${text.slice(0, 44)}…` : text;
    }
    if (step.type === 'quiz_multiple_choice') {
      return `정답: ${step.options?.[step.answer] ?? ''}`;
    }
    if (step.type === 'quiz_ox') {
      return `정답: ${step.answer ? 'O' : 'X'}`;
    }
    if (step.type === 'quiz_code') {
      return '코드 문제 해결 완료';
    }
    return '';
  };

  const handleNextStep = (isCorrect, userReplyText) => {
    if (userReplyText) {
      setChatHistory(prev => [...prev, { sender: 'user', type: 'text', content: userReplyText }]);
    }

    if (isCorrect === false) {
      playWrongSound();
      onLoseHeart();
      setMistakeCount(c => c + 1);
      setMobilePanel('chat'); // show the explanation on mobile after a wrong answer

      let failMsg = '앗, 아쉬워요! 하트가 1개 깎였습니다. 다시 한 번 도전해보세요 삐약!';
      if (!isSkipTest && currentStep.explanation) {
        failMsg = `앗, 틀렸습니다! 하트 1개 차감 💔\n\n💡 **해설:** ${currentStep.explanation}\n\n설명을 읽고 다시 정답을 골라보세요!`;
      } else if (isSkipTest) {
        failMsg = '앗, 틀렸습니다! 하트 1개 차감 💔 건너뛰기 테스트에는 해설이 제공되지 않아요. 다시 도전해보세요!';
      }

      setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: failMsg }]);
      return; // 오답 시 다음 스텝으로 넘어가지 않음 (무한 도전)
    }

    if (isCorrect === true) {
      playCorrectSound();
    }

    // 정답이거나 이론 스텝일 경우, 현재 스텝을 히스토리에 '완료된 스텝'으로 추가
    setChatHistory(prev => [...prev, { sender: 'egg', type: 'completed_step', step: currentStep }]);

    if (isCorrect === true) {
      setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: '정답입니다! 완벽해요 🎉' }]);
    }

    setMobilePanel('chat');

    if (currentStepIndex < stepsQueue.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      finishTimeRef.current = Date.now();
      setIsFinished(true);
      playFinishSound();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
      setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: isSkipTest ? '테스트를 통과했습니다! 건너뛰기가 완료됩니다 🎉' : '모든 미션을 완료했습니다! 대단해요!' }]);
    }
  };

  const handleTheoryNext = () => {
    handleNextStep(null, "이해했어요! 다음으로 넘어갈게요.");
  };

  const handleQuizChoice = (optionIdx, optionText) => {
    const isCorrect = optionIdx === currentStep.answer;
    handleNextStep(isCorrect, optionText);
  };

  const handleQuizOx = (answerBool) => {
    const isCorrect = answerBool === currentStep.answer;
    handleNextStep(isCorrect, answerBool ? "O" : "X");
  };

  const handleRunCode = async () => {
    if (!isPyodideReady || !pyodideRef.current || !currentStep || currentStep.type !== 'quiz_code') return;
    
    setIsEvaluating(true);
    try {
      pyodideRef.current.runPython(`
import sys
import io
sys.stdout = io.StringIO()
      `);
      pyodideRef.current.runPython(code);
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      setOutput(stdout);
      
      const isCorrect = currentStep.expectedOutputs && currentStep.expectedOutputs.length > 0 
        ? currentStep.expectedOutputs.some(expected => stdout.trim() === expected)
        : stdout.trim().length > 0;
      
      handleNextStep(isCorrect, "코드 제출 완료!");
      
      if (!isCorrect && currentStep.expectedOutputs && currentStep.expectedOutputs.length > 0) {
        setTimeout(() => {
          setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: `[AI 코드 분석] 에러는 없지만 결과값이 달라요! 다시 한번 코드를 확인해보세요 삐약!` }]);
        }, 500);
      }
    } catch (err) {
      const errorMsg = err.toString();
      setOutput(errorMsg);

      // 일부 문제는 "일부러 에러를 발생시키는 것"이 정답입니다 (예: raise 실습).
      if (currentStep.expectException) {
        handleNextStep(true, "코드 제출 완료! (의도된 에러 발생 확인)");
        setTimeout(() => {
          setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: `[AI 코드 분석] 완벽해요! 의도한 대로 에러가 잘 발생했습니다 🎉` }]);
        }, 500);
        setIsEvaluating(false);
        return;
      }

      handleNextStep(false, "코드 제출 완료! (에러 발생)");

      // Rule-based AI 맞춤형 피드백 생성 (API 비용 0원)
      let hint = "뭔가 에러가 났네요! 에러 메시지를 잘 읽어보고 다시 시도해볼까요?";

      if (errorMsg.includes("SyntaxError")) {
        hint = "문법 에러(SyntaxError)가 났네요! 괄호 `()`나 따옴표 `''`, 혹은 콜론 `:`이 빠지지 않았는지 매의 눈으로 확인해보세요 삐약!";
      } else if (errorMsg.includes("NameError")) {
        hint = "정의되지 않은 이름을 사용한 것 같아요(NameError). 변수나 함수 이름을 오타 없이 썼는지 다시 확인해주세요!";
      } else if (errorMsg.includes("TypeError")) {
        hint = "자료형이 맞지 않는 연산을 시도했어요(TypeError). 예를 들어 숫자와 문자는 그냥 더할 수 없답니다!";
      } else if (errorMsg.includes("IndentationError")) {
        hint = "들여쓰기(Indentation)가 어긋났어요! 파이썬은 스페이스바 4칸 들여쓰기에 아주 민감하니 줄을 잘 맞춰주세요.";
      } else if (errorMsg.includes("IndexError")) {
        hint = "리스트의 범위를 벗어났어요(IndexError). 리스트의 순서는 0부터 시작한다는 점을 잊지 마세요!";
      }

      if (!isSkipTest) {
        setTimeout(() => {
          setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: `[AI 코드 분석] 앗! ${hint}` }]);
        }, 500);
      }
    }
    setIsEvaluating(false);
  };

  const getRuleBasedReply = (userMsg) => {
    let response = "음... 아직 제가 복잡한 대화를 이해하긴 어려워요! 하지만 우측 코드를 실행하시면 에러 분석은 기가 막히게 해드릴 수 있답니다 삐약!";

    if (userMsg.includes("힌트") || userMsg.includes("도와줘") || userMsg.includes("어떻게") || userMsg.includes("모르겠")) {
      response = currentStep?.hint || "코드를 차근차근 읽어보고 괄호나 따옴표가 잘 닫혀있는지 먼저 확인해보세요!";
    } else if (userMsg.includes("안녕") || userMsg.includes("반가워")) {
      response = "안녕하세요! 저는 최고의 설계자를 키우는 에그 튜터입니다. 오늘도 파이썬 마스터를 향해 달려볼까요?";
    } else if (userMsg.includes("고마워") || userMsg.includes("천재")) {
      response = "에헤헷, 칭찬 감사합니다! 설계자님도 정말 멋져요 삐약!";
    }
    return response;
  };

  const getStepContext = () => {
    if (!currentStep) return '';
    if (currentStep.type === 'theory') return `[이론] ${currentStep.content}`;
    if (currentStep.type === 'quiz_multiple_choice') return `[객관식 문제] ${currentStep.content} 보기: ${(currentStep.options || []).join(', ')}`;
    if (currentStep.type === 'quiz_code') return `[코딩 문제] ${currentStep.content}`;
    return '';
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isTutorThinking) return;

    const userMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { sender: 'user', type: 'text', content: userMsg }]);

    if (ollamaAvailable) {
      setIsTutorThinking(true);
      try {
        const recentHistory = chatHistory.filter(m => m.type === 'text').slice(-6);
        const reply = await askOllamaTutor(userMsg, { recentHistory, stepContext: getStepContext() });
        setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: reply || getRuleBasedReply(userMsg) }]);
      } catch (err) {
        console.error('Ollama request failed, falling back to rule-based tutor:', err);
        setOllamaAvailable(false); // avoid repeated slow timeouts for the rest of this session
        setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: getRuleBasedReply(userMsg) }]);
      } finally {
        setIsTutorThinking(false);
      }
      return;
    }

    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'egg', type: 'text', content: getRuleBasedReply(userMsg) }]);
    }, 800);
  };

  if (!currentStep && !isFinished) {
    return (
      <div className="flex w-full min-h-screen bg-[#181A20] items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#00C4B5] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Full-screen post-lesson report (Duolingo-style) once every step is cleared.
  if (isFinished && hearts > 0) {
    const elapsedMs = (finishTimeRef.current || Date.now()) - startTimeRef.current;
    const totalSeconds = Math.max(0, Math.round(elapsedMs / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timeLabel = `${minutes}:${String(seconds).padStart(2, '0')}`;
    const totalAttempts = stepsQueue.length + mistakeCount;
    const accuracy = totalAttempts > 0 ? Math.round((stepsQueue.length / totalAttempts) * 100) : 100;

    return (
      <LessonSummaryScreen
        isSkipTest={isSkipTest}
        xpEarned={xpPerLesson}
        gemsEarned={gemsPerLesson}
        accuracy={accuracy}
        mistakeCount={mistakeCount}
        timeLabel={timeLabel}
        onContinue={onComplete}
      />
    );
  }

  const progress = isFinished ? 100 : stepsQueue.length > 0 ? (currentStepIndex / stepsQueue.length) * 100 : 0;
  const isCodingStep = currentStep?.type === 'quiz_code' && !isFinished && hearts > 0;

  return (
    <div className="flex flex-col h-screen bg-[#181A20] text-white">
      {showConfetti && <Confetti />}

      {/* Header */}
      <div className={`flex-none flex items-center justify-between p-4 px-6 border-b-2 bg-[#181A20] z-40 ${isSkipTest ? 'border-[#FFB300]' : 'border-[#2b3a42]'}`}>
        <button onClick={onBack} className="text-gray-400 hover:text-white font-bold text-3xl transition">✕</button>
        {isSkipTest && (
          <div className="hidden sm:flex items-center gap-2 font-black text-[#FFB300] text-sm uppercase tracking-wide">
            ⚡ 건너뛰기 테스트
          </div>
        )}
        <div className="flex-1 mx-8 h-4 bg-[#2b3a42] rounded-full overflow-hidden">
          <div className={`h-full transition-all duration-500 ease-out rounded-full ${isSkipTest ? 'bg-[#FFB300]' : 'bg-[#00C4B5]'}`} style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center gap-2 font-bold text-xl text-[#ff4b4b]">
          <span>❤️</span><span>{hearts}</span>
        </div>
      </div>

      {/* Mobile-only tab switch between chat and code editor */}
      {isCodingStep && (
        <div className="flex md:hidden flex-none border-b-2 border-[#2b3a42] bg-[#181A20]">
          <button
            onClick={() => setMobilePanel('chat')}
            className={`flex-1 py-3 font-bold transition ${mobilePanel === 'chat' ? 'text-[#00C4B5] border-b-2 border-[#00C4B5]' : 'text-gray-500'}`}
          >
            💬 튜터 채팅
          </button>
          <button
            onClick={() => setMobilePanel('code')}
            className={`flex-1 py-3 font-bold transition ${mobilePanel === 'code' ? 'text-[#FFB300] border-b-2 border-[#FFB300]' : 'text-gray-500'}`}
          >
            ✍️ 코드 에디터
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Panel: Chat Tutor */}
        <div className={`w-full md:w-1/2 flex-col border-r-2 border-[#2b3a42] bg-[#1f2937]
          ${isCodingStep && mobilePanel === 'code' ? 'hidden md:flex' : 'flex'}`}>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* History */}
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} ${msg.type === 'completed_step' ? 'ml-14' : ''}`}>
                {msg.sender === 'egg' && msg.type !== 'completed_step' && (
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-[#00C4B5]">
                    <img src={eggCharacter} alt="Egg" className="w-[120%] h-[120%] object-cover" />
                  </div>
                )}

                {msg.type === 'text' && (
                  <div className={`p-4 rounded-2xl max-w-[80%] font-bold text-lg ${msg.sender === 'user' ? 'bg-[#2b3a42] text-white rounded-tr-sm' : 'bg-white text-gray-800 rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                )}

                {/* Compact one-line summary of a finished step — no expand/collapse,
                    just enough context to see the lesson's progress at a glance. */}
                {msg.type === 'completed_step' && (
                  <div className="flex items-center gap-2 max-w-[85%] rounded-full pl-3 pr-4 py-1.5 border text-sm font-bold bg-[#1f2937] border-[#2b3a42] text-gray-400">
                    <span className="text-base flex-none">
                      {msg.step.type === 'theory' ? '📘' : msg.step.type === 'quiz_code' ? '⌨️' : '✅'}
                    </span>
                    <span className="truncate">{summarizeCompletedStep(msg.step)}</span>
                  </div>
                )}
              </div>
            ))}

            {/* Current Step (Interactive) */}
            {!isFinished && hearts > 0 && currentStep && (
              <div className="flex gap-4 animate-pop">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-[#FFB300]">
                  <img src={eggCharacter} alt="Egg" className="w-[120%] h-[120%] object-cover" />
                </div>
                
                <div className="bg-white text-gray-800 p-5 rounded-2xl rounded-tl-sm max-w-[85%] font-bold shadow-md border-l-4 border-[#FFB300]">
                  
                  {currentStep.type === 'theory' && (
                    <div className="space-y-4">
                      <div className="text-lg leading-relaxed whitespace-pre-wrap">{currentStep.content}</div>
                      <button onClick={handleTheoryNext} className="w-full bg-[#00C4B5] hover:bg-[#15d8c9] text-white py-3 rounded-xl transition shadow-sm">
                        다음으로
                      </button>
                    </div>
                  )}

                  {currentStep.type === 'quiz_multiple_choice' && (
                    <div className="space-y-4">
                      <div className="text-lg leading-relaxed whitespace-pre-wrap">{currentStep.content}</div>
                      <div className="flex flex-col gap-2">
                        {currentStep.options.map((opt, idx) => (
                          <button key={idx} onClick={() => handleQuizChoice(idx, opt)} className="w-full bg-gray-100 hover:bg-[#00C4B5] hover:text-white text-gray-700 py-3 rounded-xl transition text-left px-4 border-2 border-transparent hover:border-[#00A396]">
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep.type === 'quiz_ox' && (
                    <div className="space-y-4">
                      <div className="text-lg leading-relaxed whitespace-pre-wrap">{currentStep.content}</div>
                      <div className="flex gap-4">
                        <button onClick={() => handleQuizOx(true)} className="flex-1 bg-gray-100 hover:bg-[#00C4B5] hover:text-white text-gray-700 py-6 text-3xl rounded-xl transition border-2 border-transparent hover:border-[#00A396]">O</button>
                        <button onClick={() => handleQuizOx(false)} className="flex-1 bg-gray-100 hover:bg-[#ff4b4b] hover:text-white text-gray-700 py-6 text-3xl rounded-xl transition border-2 border-transparent hover:border-[#e53e3e]">X</button>
                      </div>
                    </div>
                  )}

                  {currentStep.type === 'quiz_code' && (
                    <div className="space-y-4">
                      <div className="text-lg leading-relaxed whitespace-pre-wrap">{currentStep.content}</div>
                      <div className="bg-[#FFB300]/20 text-[#FFB300] p-3 rounded-xl text-sm">
                        {mobilePanel === 'code'
                          ? '코드를 작성하고 실행 버튼을 눌러주세요!'
                          : '우측(모바일에서는 "코드 에디터" 탭)에 코드를 작성하고 실행 버튼을 눌러주세요!'}
                      </div>
                      <button
                        onClick={() => setMobilePanel('code')}
                        className="md:hidden w-full bg-[#FFB300] hover:bg-[#e6a300] text-gray-900 py-3 rounded-xl transition shadow-sm font-black"
                      >
                        ✍️ 코드 에디터 열기
                      </button>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* Game Over / Success States */}
            {hearts === 0 && (
               <div className="text-center py-8 animate-pop">
                 <div className="text-6xl mb-4">💔</div>
                 <h2 className="text-2xl font-black text-[#ff4b4b] mb-4">하트를 모두 소진했습니다!</h2>
                 <button onClick={onBack} className="bg-[#2b3a42] hover:bg-[#3b4a52] text-white font-bold py-3 px-6 rounded-xl transition">돌아가기</button>
               </div>
            )}
            
            {isTutorThinking && (
              <div className="flex gap-4 animate-pop">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-[#00C4B5]">
                  <img src={eggCharacter} alt="Egg" className="w-[120%] h-[120%] object-cover" />
                </div>
                <div className="p-4 rounded-2xl bg-white text-gray-400 rounded-tl-sm font-bold text-lg flex gap-1 items-center">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>●</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar — hidden during skip tests (no hints allowed, like real Duolingo) */}
          {!isSkipTest && (
            <form onSubmit={handleChatSubmit} className="flex-none p-3 bg-[#181A20] border-t border-[#2b3a42] flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="튜터에게 자유롭게 질문해보세요..."
                  disabled={isTutorThinking}
                  className="flex-1 bg-[#1f2937] text-white px-4 py-3 rounded-full outline-none border border-[#3b4a52] focus:border-[#00C4B5] transition disabled:opacity-60"
                />
                <button type="submit" disabled={!chatInput.trim() || isTutorThinking} className="bg-[#00C4B5] hover:bg-[#15d8c9] disabled:opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold transition shadow-md">
                  ↑
                </button>
              </div>
              <div className={`text-[11px] font-bold text-center ${ollamaAvailable ? 'text-[#00C4B5]' : 'text-gray-600'}`}>
                {ollamaAvailable === null ? '로컬 AI 연결 확인 중...' : ollamaAvailable ? `🦙 로컬 AI 연결됨 (${OLLAMA_MODEL})` : '💬 기본 튜터 모드 (Ollama 미연결)'}
              </div>
            </form>
          )}
        </div>

        {/* Right Panel: Editor */}
        <div className={`w-full md:w-1/2 flex-col bg-[#181A20] transition-all duration-500 relative border-l-2
          ${currentStep?.type === 'quiz_code' ? 'border-[#FFB300] shadow-[inset_20px_0_50px_-20px_rgba(255,179,0,0.15)]' : 'border-[#2b3a42]'}
          ${isCodingStep && mobilePanel === 'code' ? 'flex' : 'hidden md:flex'}`}>
          
          {/* Points at the actual first line of the editor and hides while the
              learner is focused on/typing in it, instead of floating in a
              corner that has nothing to do with where input happens. */}
          {currentStep?.type === 'quiz_code' && !isEditorFocused && (
            <div className="hidden md:flex absolute top-7 left-40 z-10 bg-[#FFB300] text-gray-900 px-4 py-2 rounded-2xl font-black shadow-[0_10px_20px_rgba(255,179,0,0.3)] animate-shake items-center gap-2 text-sm">
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#FFB300] rotate-45"></div>
              <span className="text-xl">✍️</span>
              <span>여기에 코드를 입력하세요!</span>
            </div>
          )}

          <div className="flex-1 relative pt-4">
            <Editor
              height="100%"
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={setCode}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 18,
                padding: { top: 20 },
                lineHeight: 1.6,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
              }}
            />
          </div>
          
          <div className="h-[250px] bg-[#0f171a] border-t-2 border-[#2b3a42] flex flex-col">
            <div className="flex justify-between items-center p-3 bg-[#131f24] border-b border-[#2b3a42]">
              <span className="font-bold text-gray-400">Terminal Output</span>
              <button 
                onClick={handleRunCode}
                disabled={!isPyodideReady || isEvaluating || hearts === 0 || isFinished || currentStep?.type !== 'quiz_code'}
                className="bg-[#00C4B5] hover:bg-[#15d8c9] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-xl transition flex items-center gap-2 shadow-sm"
              >
                {isEvaluating ? '실행 중...' : '▶ 코드 실행'}
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto font-mono text-[#00C4B5] whitespace-pre-wrap text-lg">
              {output || '실행 결과가 여기에 표시됩니다.'}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
