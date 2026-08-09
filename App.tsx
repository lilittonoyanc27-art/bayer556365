import React, { useState, useEffect } from 'react';
import { QUESTIONS, checkAnswer } from './data';
import { Question, AnswerStatus } from './types';
import { RoscoWheel } from './RoscoWheel';
import { QuestionCard } from './QuestionCard';
import { GrammarGuide } from './GrammarGuide';
import { ResultsModal } from './ResultsModal';
import { soundFx } from './AudioFx';
import {
  Volume2,
  VolumeX,
  BookOpen,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Play,
  Flame,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const TOTAL_TIME_SECONDS = 1200; // 20 minutes timer (20 * 60 = 1200s) for 27 questions

export default function App() {
  const [questions, setQuestions] = useState<Question[]>(QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [statuses, setStatuses] = useState<Record<number, AnswerStatus>>({});
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const [timeRemaining, setTimeRemaining] = useState<number>(TOTAL_TIME_SECONDS);
  const [isGameActive, setIsGameActive] = useState<boolean>(true);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const [showGrammarGuide, setShowGrammarGuide] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'rosco' | 'categories'>('rosco');

  // Timer countdown hook
  useEffect(() => {
    if (!isGameActive || isCompleted) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsGameActive(false);
          setIsCompleted(true);
          soundFx.playVictory();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameActive, isCompleted]);

  // Find next pending or passed question in circular order
  const findNextAvailableIndex = (fromIdx: number): number | null => {
    const total = questions.length;
    for (let i = 1; i <= total; i++) {
      const nextIdx = (fromIdx + i) % total;
      const qId = questions[nextIdx].id;
      const st = statuses[qId] || 'pending';
      if (st === 'pending' || st === 'passed') {
        return nextIdx;
      }
    }
    return null; // All questions answered
  };

  // Submit Answer handler
  const handleSubmitAnswer = (answerText: string) => {
    const currentQ = questions[currentIndex];
    const isCorrect = checkAnswer(answerText, currentQ);
    const newStatus: AnswerStatus = isCorrect ? 'correct' : 'incorrect';

    const updatedStatuses = { ...statuses, [currentQ.id]: newStatus };
    const updatedAnswers = { ...userAnswers, [currentQ.id]: answerText };

    setStatuses(updatedStatuses);
    setUserAnswers(updatedAnswers);

    if (isCorrect) {
      soundFx.playCorrect();
    } else {
      soundFx.playIncorrect();
    }

    // Check if game is completed
    const answeredCount = Object.keys(updatedStatuses).length;
    if (answeredCount >= questions.length) {
      setIsCompleted(true);
      setIsGameActive(false);
      soundFx.playVictory();
      return;
    }

    // Auto navigate to next question after small delay
    setTimeout(() => {
      const nextIdx = findNextAvailableIndex(currentIndex);
      if (nextIdx !== null) {
        setCurrentIndex(nextIdx);
      } else {
        setIsCompleted(true);
        setIsGameActive(false);
        soundFx.playVictory();
      }
    }, 1200);
  };

  // Pasapalabra (Pass) handler
  const handlePasapalabra = () => {
    const currentQ = questions[currentIndex];
    setStatuses((prev) => ({ ...prev, [currentQ.id]: 'passed' }));
    soundFx.playPasapalabra();

    const nextIdx = findNextAvailableIndex(currentIndex);
    if (nextIdx !== null) {
      setCurrentIndex(nextIdx);
    }
  };

  // Manual letter click on Rosco wheel
  const handleSelectLetter = (index: number) => {
    setCurrentIndex(index);
  };

  // Restart game
  const handleRestart = () => {
    setStatuses({});
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(TOTAL_TIME_SECONDS);
    setIsGameActive(true);
    setIsCompleted(false);
  };

  const currentQ = questions[currentIndex];
  const currentStatus = statuses[currentQ?.id] || 'pending';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      {/* Top Header Bar */}
      <header className="w-full bg-slate-900/90 border-b border-indigo-500/20 backdrop-blur-md sticky top-0 z-40 px-4 py-3 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30 border border-amber-200">
              P
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                <span>PASAPALABRA</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  27 Preguntas
                </span>
              </h1>
              <p className="text-[11px] text-indigo-300 font-medium hidden sm:block">
                Verbos Reflexivos en Español (Վերադարձ բայեր)
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Mode Switcher Tabs */}
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab('rosco')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'rosco'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rosco Wheel</span>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'categories'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">4 Խմբեր</span>
              </button>
            </div>

            {/* Grammar Guide Toggle */}
            <button
              onClick={() => setShowGrammarGuide(!showGrammarGuide)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 transition-colors cursor-pointer"
              title="Քերականական ուղեցույց (Grammar Rules)"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setIsMuted(soundFx.toggleMute())}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 transition-colors cursor-pointer"
              title={isMuted ? 'Ձայնն ապաարգելափակել' : 'Ձայնն անջատել'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition-colors cursor-pointer"
              title="Վերասկսել (Reiniciar)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Optional Grammar Collapsible Drawer */}
        {showGrammarGuide && <GrammarGuide />}

        {/* TAB 1: ROSCO WHEEL GAMEPLAY */}
        {activeTab === 'rosco' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Iconic Pasapalabra Wheel (Visible & Interactive) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <RoscoWheel
                questions={questions}
                currentQuestionIndex={currentIndex}
                statuses={statuses}
                timeRemaining={timeRemaining}
                score={Object.values(statuses).filter((s) => s === 'correct').length}
                onSelectLetter={handleSelectLetter}
              />
            </div>

            {/* Right Column: Active Question Card */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {currentQ && (
                <QuestionCard
                  question={currentQ}
                  status={currentStatus}
                  onSubmitAnswer={handleSubmitAnswer}
                  onPasapalabra={handlePasapalabra}
                  onNextQuestion={() => {
                    const nextIdx = findNextAvailableIndex(currentIndex);
                    if (nextIdx !== null) setCurrentIndex(nextIdx);
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* TAB 2: EXERCISES BY CATEGORIES */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="bg-slate-900 p-4 rounded-2xl border border-indigo-500/30">
              <h2 className="text-lg font-bold text-white mb-1">
                27 Վարժությունների ամբողջական ցանկը (27 Ejercicios por categorías)
              </h2>
              <p className="text-xs text-slate-400">
                Կարող եք ընտրել ցանկացած վարժություն և անմիջապես կատարել Pasapalabra անիվի վրա:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով', range: [1, 9] },
                { title: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն', range: [10, 18] },
                { title: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը', range: [19, 24] },
                { title: 'Վարժություն 4 — Գտեք և ուղղեք սխալը', range: [25, 27] },
              ].map((cat, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <h3 className="font-bold text-amber-400 text-sm border-b border-slate-800 pb-2">
                    {cat.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {questions
                      .filter((q) => q.id >= cat.range[0] && q.id <= cat.range[1])
                      .map((q) => {
                        const qIndex = questions.findIndex((item) => item.id === q.id);
                        const st = statuses[q.id] || 'pending';
                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              setCurrentIndex(qIndex);
                              setActiveTab('rosco');
                            }}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                              st === 'correct'
                                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                                : st === 'incorrect'
                                ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
                                : 'bg-slate-800 border-slate-700 hover:border-amber-400 text-slate-200'
                            }`}
                          >
                            <span>Տառ {q.letter}</span>
                            <span className="text-[10px] font-mono opacity-80">#{q.id}</span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Results Modal on game completion */}
      {isCompleted && (
        <ResultsModal
          questions={questions}
          statuses={statuses}
          userAnswers={userAnswers}
          timeRemaining={timeRemaining}
          initialTime={TOTAL_TIME_SECONDS}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
