import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { X, Heart, Lightbulb, Check, ChevronRight, Clock } from 'lucide-react';
import eggCharacter from '../assets/egg_character.png';
import Confetti from './Confetti';
import LessonSummaryScreen from './LessonSummaryScreen';
import { playCorrectSound, playWrongSound, playFinishSound } from '../lib/sound';

export default function InteractiveLessonBoard({
  nodeId, trackData, overrideNode, isSkipTest = false, isExamMode = false,
  onComplete, onBack, onForceExit, hearts, gems, onLoseHeart, onRefillHearts,
  xpPerLesson = 20, gemsPerLesson = 10,
  currentLessonIndex = 0, examDurationSec = 600
}) {
  const [stepsQueue, setStepsQueue] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(examDurationSec);
  const [topicResults, setTopicResults] = useState([]); // exam mode only: { correct, topic }[]

  // New UI States
  const [userAnswer, setUserAnswer] = useState(null); // stores selected index OR code string
  const [output, setOutput] = useState(''); // for code execution
  const [submissionState, setSubmissionState] = useState('idle'); // 'idle' | 'correct' | 'wrong'
  const [isHintDrawerOpen, setIsHintDrawerOpen] = useState(false);
  const [showHeartRefill, setShowHeartRefill] = useState(false);

  const pyodideRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const finishTimeRef = useRef(null);

  // Init Pyodide
  useEffect(() => {
    async function initPyodide() {
      try {
        if (window.loadPyodide) {
          pyodideRef.current = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
          });
        }
      } catch (err) {
        console.error("Pyodide load failed:", err);
      }
    }
    initPyodide();
  }, []);

  // Initialize Queue & Parse Theory
  useEffect(() => {
    let node = overrideNode || null;
    if (!node) {
      for (const section of trackData.sections) {
        node = section.nodes.find(n => n.id === nodeId);
        if (node) break;
      }
    }
    if (node) {
      let selectedSteps = [];
      if (isSkipTest || !Array.isArray(node.lessons[0])) {
        selectedSteps = node.lessons.map(lesson => 
          Array.isArray(lesson) ? lesson[Math.floor(Math.random() * lesson.length)] : lesson
        );
      } else {
        selectedSteps = node.lessons[currentLessonIndex] || node.lessons[0];
      }

      // Parse steps
      let newQueue = [];
      for (const step of selectedSteps) {
        if (step.type !== 'theory') {
          newQueue.push(step);
        }
      }

      setStepsQueue([...newQueue]);
    }
  }, [nodeId, trackData, overrideNode, isSkipTest, currentLessonIndex]);

  const currentStep = stepsQueue[currentStepIndex];
  useEffect(() => {
    if (currentStep) {
      if (currentStep.type === 'quiz_code') {
        setUserAnswer(currentStep.initialCode || '');
      } else if (currentStep.type === 'quiz_word_bank') {
        setUserAnswer([]);
      } else {
        setUserAnswer(null);
      }
      setOutput('');
      setSubmissionState('idle');
      setIsHintDrawerOpen(false);
    }
  }, [currentStepIndex, currentStep]);

  // Handle Heart 0
  useEffect(() => {
    if (hearts <= 0 && !isFinished) {
      setShowHeartRefill(true);
    }
  }, [hearts, isFinished]);

  const finishNow = () => {
    finishTimeRef.current = Date.now();
    setIsFinished(true);
    setShowConfetti(true);
    playFinishSound();
  };

  // Exam countdown — ticks down regardless of which step the learner is on;
  // when it hits zero the exam ends immediately and scores whatever was
  // answered so far (a real exam doesn't wait for you to finish).
  useEffect(() => {
    if (!isExamMode || isFinished) return;
    if (timeLeft <= 0) {
      finishNow();
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [isExamMode, isFinished, timeLeft]);

  if (!currentStep) return null;

  if (isFinished) {
    const examScore = topicResults.length > 0 ? Math.round((topicResults.filter(r => r.correct).length / topicResults.length) * 100) : 0;
    const examPass = examScore >= 70;
    const weakTopics = [...new Set(topicResults.filter(r => !r.correct).map(r => r.topic))];
    return (
      <>
        {showConfetti && <Confetti />}
        <LessonSummaryScreen
          nodeTitle={overrideNode ? overrideNode.title : "레슨 완료"}
          isSkipTest={isSkipTest}
          isExamMode={isExamMode}
          examScore={examScore}
          examPass={examPass}
          weakTopics={weakTopics}
          xpEarned={isSkipTest ? xpPerLesson * 2 : xpPerLesson}
          gemsEarned={gemsPerLesson}
          accuracy={stepsQueue.length > 0 ? Math.round(((stepsQueue.length - mistakeCount) / stepsQueue.length) * 100) : 100}
          timeSpentMs={finishTimeRef.current - startTimeRef.current}
          onContinue={() => onComplete({
            score: isExamMode ? examScore : undefined,
            pass: isExamMode ? examPass : undefined,
            weakTopics: isExamMode ? weakTopics : undefined,
            xpEarned: isSkipTest ? xpPerLesson * 2 : xpPerLesson,
            gemsEarned: gemsPerLesson
          })}
        />
      </>
    );
  }

  const handleSkip = () => {
    // skip acts as a wrong answer to enforce learning
    playWrongSound();
    onLoseHeart();
    setSubmissionState('wrong');
  };

  const handleRefillHearts = () => {
    if (gems >= 50) {
      if (onRefillHearts) onRefillHearts(); 
      setShowHeartRefill(false);
    } else {
      alert("보석이 부족합니다!");
    }
  };

  const handleResetCode = () => {
    if (currentStep && currentStep.type === 'quiz_code') {
      setUserAnswer(currentStep.initialCode || '');
      setOutput('');
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Disable Undo (Ctrl+Z) and Redo (Ctrl+Y / Ctrl+Shift+Z)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyZ, () => {
      console.log("Undo disabled");
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyY, () => {
      console.log("Redo disabled");
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyZ, () => {
      console.log("Redo disabled");
    });
  };

  const recordExamResult = (isCorrect) => {
    if (!isExamMode) return;
    setTopicResults(prev => [...prev, { correct: isCorrect, topic: currentStep._topic || '기타' }]);
  };

  const checkAnswer = async () => {
    if (userAnswer === null || userAnswer === '') return; // Disabled button anyway

    if (currentStep.type === 'quiz_multiple_choice') {
      if (userAnswer === currentStep.answer) {
        playCorrectSound();
        setSubmissionState('correct');
        recordExamResult(true);
      } else {
        playWrongSound();
        onLoseHeart();
        setMistakeCount(c => c + 1);
        setSubmissionState('wrong');
        recordExamResult(false);
      }
    } else if (currentStep.type === 'quiz_word_bank') {
      // userAnswer is an array of selected word indices
      const userWords = (userAnswer || []).map(idx => currentStep.wordBank[idx]);
      const isCorrect = userWords.join(' ') === (currentStep.answer || []).join(' ');
      if (isCorrect) {
        playCorrectSound();
        setSubmissionState('correct');
        recordExamResult(true);
      } else {
        playWrongSound();
        onLoseHeart();
        setMistakeCount(c => c + 1);
        setSubmissionState('wrong');
        recordExamResult(false);
      }
    } else if (currentStep.type === 'quiz_code') {
      // Evaluate python code
      if (!pyodideRef.current) {
        alert("파이썬 엔진을 로딩 중입니다. 잠시 후 다시 시도해주세요.");
        return;
      }
      try {
        let printOutput = [];
        pyodideRef.current.setStdout({ batched: (str) => printOutput.push(str) });
        await pyodideRef.current.runPythonAsync(userAnswer);
        const finalOutput = printOutput.join('\n').trim();
        setOutput(finalOutput);

        const expected = currentStep.expectedOutputs || [];
        const isCorrect = expected.some(exp => {
          const e = String(exp).trim();
          return finalOutput === e || finalOutput.endsWith(e) || finalOutput.includes(e);
        });

        if (isCorrect) {
          playCorrectSound();
          setSubmissionState('correct');
          recordExamResult(true);
        } else {
          playWrongSound();
          onLoseHeart();
          setMistakeCount(c => c + 1);
          setSubmissionState('wrong');
          recordExamResult(false);
        }
      } catch (err) {
        setOutput(err.toString());
        playWrongSound();
        onLoseHeart();
        setMistakeCount(c => c + 1);
        setSubmissionState('wrong');
      }
    }
  };

  const handleContinue = () => {
    // Exams ask each question exactly once — requeueing wrong answers (like
    // regular lessons do) would let a learner brute-force a perfect score
    // and defeat the point of a cumulative test.
    if (submissionState === 'wrong' && !isExamMode) {
      setStepsQueue(prev => [...prev, currentStep]);
    }

    if (currentStepIndex >= stepsQueue.length - 1) {
      finishNow();
    } else {
      setCurrentStepIndex(i => i + 1);
    }
  };

  const progressPercentage = (currentStepIndex / stepsQueue.length) * 100;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col h-[100dvh] overflow-hidden font-sans text-gray-800">
      
      {/* Top Bar */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between shrink-0">
        <button onClick={onBack} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={28} strokeWidth={3} />
        </button>
        
        <div className="flex-1 mx-6 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {isExamMode ? (
          <div className={`flex items-center gap-2 font-black text-xl mr-4 ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-orange-500'}`}>
            <Clock size={28} /> {formatTime(timeLeft)}
          </div>
        ) : null}
        
        <div className="flex items-center gap-2 font-black text-xl text-red-500">
          <Heart size={28} fill="currentColor" /> {hearts}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-32 md:pb-40 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-3xl mt-2 md:mt-10 flex flex-col">
          
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <h1 className="text-xl md:text-3xl font-black text-gray-800 leading-snug break-keep">
              {currentStep.content.replace(/\[.*?\]\s*/g, '')} {/* Remove [복습] tags from UI display */}
            </h1>
            {!isExamMode && (
              <button 
                onClick={() => setIsHintDrawerOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-full font-bold transition whitespace-nowrap"
              >
                <Lightbulb size={20} /> 힌트 보기
              </button>
            )}
          </div>

          {/* Multiple Choice Card Grid */}
          {currentStep.type === 'quiz_multiple_choice' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentStep.options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => setUserAnswer(i)}
                  className={`p-4 md:p-6 rounded-2xl border-2 font-bold text-base md:text-xl transition-all active:scale-95 flex flex-col items-center justify-center min-h-[100px] md:min-h-[160px]
                    ${userAnswer === i 
                      ? 'border-blue-400 bg-blue-50 text-blue-500 shadow-[0_4px_0_rgba(96,165,250,1)]' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-[0_4px_0_rgba(229,231,235,1)] text-gray-700'
                    }
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Word Bank / Fill in the blanks */}
          {currentStep.type === 'quiz_word_bank' && (
            <div className="flex flex-col items-center gap-8 mt-4">
              
              {/* Answer Blanks Area */}
              <div className="flex flex-wrap items-center justify-center gap-2 p-6 w-full max-w-2xl bg-gray-50 rounded-2xl min-h-[100px] border-2 border-dashed border-gray-300">
                <span className="text-xl md:text-2xl font-bold text-gray-700">{currentStep.sentenceParts?.[0]}</span>
                
                <div className="flex flex-wrap gap-2 items-center justify-center min-w-[100px] min-h-[48px] border-b-2 border-gray-400 pb-1">
                  {(Array.isArray(userAnswer) ? userAnswer : []).map((wordIndex, i) => (
                    <button 
                      key={i}
                      onClick={() => setUserAnswer(prev => Array.isArray(prev) ? prev.filter((_, idx) => idx !== i) : [])}
                      className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-lg text-gray-700 shadow-sm active:scale-95 transition"
                    >
                      {currentStep.wordBank[wordIndex]}
                    </button>
                  ))}
                </div>
                
                <span className="text-xl md:text-2xl font-bold text-gray-700">{currentStep.sentenceParts?.[1]}</span>
              </div>

              {/* Word Bank Chips (Source) */}
              <div className="flex flex-wrap justify-center gap-3 w-full max-w-2xl mt-4">
                {currentStep.wordBank && currentStep.wordBank.map((word, i) => {
                  const isSelected = Array.isArray(userAnswer) && userAnswer.includes(i);
                  return (
                    <button
                      key={i}
                      disabled={isSelected}
                      onClick={() => setUserAnswer(prev => [...(Array.isArray(prev) ? prev : []), i])}
                      className={`px-4 py-3 rounded-xl font-bold text-lg md:text-xl transition-all active:scale-95 border-2
                        ${isSelected 
                          ? 'bg-gray-200 border-gray-200 text-transparent shadow-none cursor-default' 
                          : 'bg-white border-gray-300 text-gray-800 shadow-[0_4px_0_rgba(209,213,219,1)] hover:bg-gray-50'}
                      `}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Terminal Style Coding */}
          {currentStep.type === 'quiz_code' && (
            <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl mt-4 border border-gray-800 flex flex-col">
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-4 text-gray-400 text-sm font-mono font-bold">Terminal - Python</span>
                </div>
                <button 
                  onClick={handleResetCode}
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-xs font-bold rounded-md transition"
                >
                  🔄 초기화
                </button>
              </div>
              <div className="flex-1 flex flex-col p-3 md:p-4">
                <div className="h-[200px] md:h-[300px] border border-gray-700 rounded-lg overflow-hidden bg-[#1e1e1e]">
                  <Editor
                    height="100%"
                    language="python"
                    theme="vs-dark"
                    value={userAnswer || ''}
                    onChange={(val) => setUserAnswer(val)}
                    onMount={handleEditorDidMount}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 16,
                      lineNumbers: 'on',
                      scrollBeyondLastLine: false,
                      wordWrap: 'on',
                      padding: { top: 16 }
                    }}
                  />
                </div>
                {output && (
                  <div className="mt-4 p-4 bg-black text-green-400 font-mono rounded-lg border border-gray-800 whitespace-pre-wrap max-h-[150px] overflow-y-auto">
                    {output}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Dynamic Bottom Bar */}
      <div className={`absolute bottom-0 left-0 right-0 border-t-2 transition-colors duration-300 flex items-center justify-center p-4 md:p-6
        ${submissionState === 'idle' ? 'bg-white border-gray-200' : ''}
        ${submissionState === 'correct' ? 'bg-green-100 border-green-200' : ''}
        ${submissionState === 'wrong' ? 'bg-red-100 border-red-200' : ''}
      `}>
        <div className="w-full max-w-5xl flex items-center justify-between gap-4">
          
          {submissionState === 'idle' ? (
            <>
              <button 
                onClick={handleSkip}
                className="px-6 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 transition uppercase tracking-wider text-sm md:text-base"
              >
                건너뛰기
              </button>
              
              <button
                onClick={checkAnswer}
                disabled={userAnswer === null || userAnswer === ''}
                className={`px-10 py-4 rounded-2xl font-black text-white transition uppercase tracking-wider text-sm md:text-base
                  ${(userAnswer === null || userAnswer === '') 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-400 shadow-[0_4px_0_rgba(34,197,94,1)] active:translate-y-1 active:shadow-none'}
                `}
              >
                확인
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <div className={`flex items-center gap-2 font-black text-xl md:text-2xl mb-1
                  ${submissionState === 'correct' ? 'text-green-600' : 'text-red-500'}
                `}>
                  {submissionState === 'correct' ? <><Check size={28} strokeWidth={4}/> 정답입니다!</> : <><X size={28} strokeWidth={4}/> 틀렸습니다!</>}
                </div>
                {submissionState === 'wrong' && currentStep.type === 'quiz_multiple_choice' && (
                  <div className="text-red-400 font-bold text-sm md:text-base">
                    정답: {currentStep.options[currentStep.answer]}
                  </div>
                )}
                {submissionState === 'wrong' && currentStep.type === 'quiz_code' && (
                  <div className="text-red-400 font-bold text-sm md:text-base">
                    힌트: {currentStep.hint || "출력 결과를 다시 확인하세요."}
                  </div>
                )}
              </div>
              
              <button
                onClick={handleContinue}
                disabled={hearts <= 0}
                className={`px-10 py-4 rounded-2xl font-black text-white transition uppercase tracking-wider text-sm md:text-base shadow-[0_4px_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none
                  ${hearts <= 0 ? 'bg-gray-400 cursor-not-allowed opacity-50 shadow-none' : 
                   (submissionState === 'correct' ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400')}
                `}
              >
                계속하기
              </button>
            </>
          )}

        </div>
      </div>

      {/* Overlay for clicking outside to close */}
      {isHintDrawerOpen && (
        <div 
          className="fixed inset-0 z-[55] bg-black/10 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsHintDrawerOpen(false)}
        />
      )}

      {/* Right Slide-in Hint/Theory Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-out flex flex-col border-l border-gray-100
          ${isHintDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-black text-xl text-gray-800 flex items-center gap-2">
            <Lightbulb className="text-yellow-400" /> 힌트 및 이론
          </h2>
          <button onClick={() => setIsHintDrawerOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition">
            <X size={24} strokeWidth={3} />
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto whitespace-pre-wrap leading-relaxed text-gray-700 text-lg">
          {currentStep.hint || "이번 문제는 스스로 해결해보세요!"}
        </div>
      </div>

      {/* Guest Mode Gift Modal inside Lesson */}
      {showHeartRefill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-bounce-in text-center">
            <div className="relative inline-block">
              <Heart className="w-20 h-20 text-red-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-full border-2 border-white transform rotate-12">
                GIFT
              </div>
            </div>
            <h2 className="text-2xl font-black text-gray-800 mb-2">하트가 모두 소진됐어요!</h2>
            <p className="text-gray-600 mb-6 font-bold">🎁 게스트 테스트를 위해<br/>5개 하트 선물이 도착했습니다.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  if (onRefillHearts) onRefillHearts();
                  setShowHeartRefill(false);
                }}
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold shadow-[0_4px_0_rgba(34,197,94,1)] active:translate-y-1 active:shadow-none transition flex items-center justify-center gap-2"
              >
                <Heart size={20} fill="currentColor" className="text-red-200" /> 선물 받기
              </button>
              <button
                onClick={() => {
                  setShowHeartRefill(false);
                  if (onForceExit) onForceExit();
                  else if (onBack) onBack();
                }}
                className="w-full py-4 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition"
              >
                취소 (학습 종료)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
