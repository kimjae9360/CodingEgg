import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { X, Heart, Lightbulb, Check, ChevronRight } from 'lucide-react';
import eggCharacter from '../assets/egg_character.png';
import Confetti from './Confetti';
import LessonSummaryScreen from './LessonSummaryScreen';
import { playCorrectSound, playWrongSound, playFinishSound } from '../lib/sound';

export default function InteractiveLessonBoard({ 
  nodeId, trackData, overrideNode, isSkipTest = false, 
  onComplete, onBack, hearts, onLoseHeart, onRefillHearts,
  xpPerLesson = 20, gemsPerLesson = 10,
  currentLessonIndex = 0
}) {
  const [stepsQueue, setStepsQueue] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mistakeCount, setMistakeCount] = useState(0);

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

      // Parse theory into hints
      let newQueue = [];
      let accumulatedTheory = [];
      for (const step of selectedSteps) {
        if (step.type === 'theory') {
          accumulatedTheory.push(step.content);
        } else {
          newQueue.push({
            ...step,
            hintTheory: accumulatedTheory.join('\n\n') || step.hint
          });
          accumulatedTheory = [];
        }
      }

      setStepsQueue([...newQueue]);
    }
  }, [nodeId, trackData, overrideNode, isSkipTest, currentLessonIndex]);

  // When step changes, reset states
  const currentStep = stepsQueue[currentStepIndex];
  useEffect(() => {
    if (currentStep) {
      if (currentStep.type === 'quiz_code') {
        setUserAnswer(currentStep.initialCode || '');
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

  if (!currentStep) return null;

  if (isFinished) {
    return (
      <>
        {showConfetti && <Confetti />}
        <LessonSummaryScreen
          nodeTitle={overrideNode ? overrideNode.title : "레슨 완료"}
          xpEarned={isSkipTest ? xpPerLesson * 2 : xpPerLesson}
          gemsEarned={gemsPerLesson}
          accuracy={stepsQueue.length > 0 ? Math.round(((stepsQueue.length - mistakeCount) / stepsQueue.length) * 100) : 100}
          timeSpentMs={finishTimeRef.current - startTimeRef.current}
          onContinue={onComplete}
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
    if (onRefillHearts) onRefillHearts(); 
    setShowHeartRefill(false);
  };

  const checkAnswer = async () => {
    if (userAnswer === null || userAnswer === '') return; // Disabled button anyway

    if (currentStep.type === 'quiz_multiple_choice') {
      if (userAnswer === currentStep.answer) {
        playCorrectSound();
        setSubmissionState('correct');
      } else {
        playWrongSound();
        onLoseHeart();
        setMistakeCount(c => c + 1);
        setSubmissionState('wrong');
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
        } else {
          playWrongSound();
          onLoseHeart();
          setMistakeCount(c => c + 1);
          setSubmissionState('wrong');
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
    if (submissionState === 'wrong') {
      // Duolingo pushes the wrong question to the end, but here we can just reset state and force retry, or push to end.
      // Let's push to end.
      setStepsQueue(prev => [...prev, currentStep]);
    }

    if (currentStepIndex >= stepsQueue.length - 1) {
      // Finished
      finishTimeRef.current = Date.now();
      setIsFinished(true);
      setShowConfetti(true);
      playFinishSound();
    } else {
      setCurrentStepIndex(i => i + 1);
    }
  };

  const progressPercentage = (currentStepIndex / stepsQueue.length) * 100;

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
            style={{ width: \`\${progressPercentage}%\` }}
          />
        </div>
        
        <div className="flex items-center gap-2 font-black text-xl text-red-500">
          <Heart size={28} fill="currentColor" /> {hearts}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-40 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-3xl mt-4 md:mt-10 flex flex-col">
          
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-gray-800 leading-snug break-keep">
              {currentStep.content.replace(/\[.*?\]\s*/g, '')} {/* Remove [복습] tags from UI display */}
            </h1>
            <button 
              onClick={() => setIsHintDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-full font-bold transition whitespace-nowrap"
            >
              <Lightbulb size={20} /> 힌트 보기
            </button>
          </div>

          {/* Multiple Choice Card Grid */}
          {currentStep.type === 'quiz_multiple_choice' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentStep.options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => setUserAnswer(i)}
                  className={\`p-6 rounded-2xl border-2 font-bold text-lg md:text-xl transition-all active:scale-95 flex flex-col items-center justify-center min-h-[160px]
                    \${userAnswer === i 
                      ? 'border-blue-400 bg-blue-50 text-blue-500 shadow-[0_4px_0_rgba(96,165,250,1)]' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-[0_4px_0_rgba(229,231,235,1)] text-gray-700'
                    }
                  \`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Terminal Style Coding */}
          {currentStep.type === 'quiz_code' && (
            <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl mt-4 border border-gray-800 flex flex-col">
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-gray-400 text-sm font-mono font-bold">Terminal - Python</span>
              </div>
              <div className="flex-1 flex flex-col p-4">
                <div className="h-[250px] md:h-[300px] border border-gray-700 rounded-lg overflow-hidden bg-[#1e1e1e]">
                  <Editor
                    height="100%"
                    language="python"
                    theme="vs-dark"
                    value={userAnswer || ''}
                    onChange={(val) => setUserAnswer(val)}
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
      <div className={\`absolute bottom-0 left-0 right-0 border-t-2 transition-colors duration-300 flex items-center justify-center p-6
        \${submissionState === 'idle' ? 'bg-white border-gray-200' : ''}
        \${submissionState === 'correct' ? 'bg-green-100 border-green-200' : ''}
        \${submissionState === 'wrong' ? 'bg-red-100 border-red-200' : ''}
      \`}>
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
                className={\`px-10 py-4 rounded-2xl font-black text-white transition uppercase tracking-wider text-sm md:text-base
                  \${(userAnswer === null || userAnswer === '') 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-400 shadow-[0_4px_0_rgba(34,197,94,1)] active:translate-y-1 active:shadow-none'}
                \`}
              >
                확인
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <div className={\`flex items-center gap-2 font-black text-xl md:text-2xl mb-1
                  \${submissionState === 'correct' ? 'text-green-600' : 'text-red-500'}
                \`}>
                  {submissionState === 'correct' ? <><Check size={28} strokeWidth={4}/> 정답입니다!</> : <><X size={28} strokeWidth={4}/> 틀렸습니다!</>}
                </div>
                {submissionState === 'wrong' && currentStep.type === 'quiz_multiple_choice' && (
                  <div className="text-red-400 font-bold text-sm md:text-base">
                    정답: {currentStep.options[currentStep.answer]}
                  </div>
                )}
                {submissionState === 'wrong' && currentStep.type === 'quiz_code' && (
                  <div className="text-red-400 font-bold text-sm md:text-base">
                    힌트: {currentStep.hintTheory || currentStep.hint || "출력 결과를 다시 확인하세요."}
                  </div>
                )}
              </div>
              
              <button
                onClick={handleContinue}
                className={\`px-10 py-4 rounded-2xl font-black text-white transition uppercase tracking-wider text-sm md:text-base shadow-[0_4px_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none
                  \${submissionState === 'correct' ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400'}
                \`}
              >
                계속하기
              </button>
            </>
          )}

        </div>
      </div>

      {/* Right Slide-in Hint/Theory Drawer */}
      <div 
        className={\`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out flex flex-col border-l border-gray-100
          \${isHintDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        \`}
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
          {currentStep.hintTheory || currentStep.hint || "이번 문제는 스스로 해결해보세요!"}
        </div>
      </div>

      {/* Heart Refill Modal Overlay */}
      {showHeartRefill && (
        <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full flex flex-col items-center text-center shadow-2xl animate-bounce-in">
            <Heart size={64} className="text-red-500 mb-6 drop-shadow-md" fill="currentColor" />
            <h2 className="text-2xl font-black text-gray-800 mb-4">하트가 부족해요!</h2>
            <p className="text-gray-500 mb-8 font-bold leading-relaxed">
              남은 하트가 없습니다.<br/>무료로 리필하여 계속 학습하세요!
            </p>
            <button 
              onClick={handleRefillHearts}
              className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-2xl font-black text-lg shadow-[0_4px_0_rgba(59,130,246,1)] active:translate-y-1 active:shadow-none transition"
            >
              무료로 리필하기
            </button>
            <button 
              onClick={onBack}
              className="mt-4 w-full py-4 text-gray-400 hover:text-gray-600 font-bold transition"
            >
              나중에 하기
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
