import React from 'react';
import { motion } from 'motion/react';
import { Question, AnswerStatus } from './types';
import { Check, X, RotateCcw, Clock, Award } from 'lucide-react';

interface RoscoWheelProps {
  questions: Question[];
  currentQuestionIndex: number;
  statuses: Record<number, AnswerStatus>;
  timeRemaining: number;
  score: number;
  onSelectLetter: (index: number) => void;
}

export const RoscoWheel: React.FC<RoscoWheelProps> = ({
  questions,
  currentQuestionIndex,
  statuses,
  timeRemaining,
  score,
  onSelectLetter,
}) => {
  const totalLetters = questions.length; // 27
  const activeQuestion = questions[currentQuestionIndex];

  // Calculate statistics
  const correctCount = Object.values(statuses).filter((s) => s === 'correct').length;
  const incorrectCount = Object.values(statuses).filter((s) => s === 'incorrect').length;
  const passedCount = Object.values(statuses).filter((s) => s === 'passed').length;
  const remainingCount = totalLetters - correctCount - incorrectCount;

  // Format timer
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="relative flex flex-col items-center justify-center w-full mx-auto py-2">
      {/* Container with golden aspect square for Rosco */}
      <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] flex items-center justify-center mx-auto p-2">
        {/* Background glow ring */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-600/30 via-indigo-600/20 to-amber-400/30 blur-2xl pointer-events-none" />

        {/* The Rosco SVG Ring */}
        <div className="relative w-full h-full">
          {questions.map((q, index) => {
            // Angle starting from top (-90 deg)
            const angleDeg = (index * 360) / totalLetters - 90;
            const angleRad = (angleDeg * Math.PI) / 180;

            // Distance from center (% of container radius)
            const radiusPercent = 41;
            const left = 50 + radiusPercent * Math.cos(angleRad);
            const top = 50 + radiusPercent * Math.sin(angleRad);

            const status = statuses[q.id] || 'pending';
            const isActive = index === currentQuestionIndex;

            // Style variants according to Pasapalabra status
            let bgClass = 'bg-sky-600 border-sky-400 text-white shadow-md shadow-sky-950/40 hover:border-amber-300';
            let statusIcon = null;

            if (status === 'correct') {
              bgClass = 'bg-emerald-500 border-emerald-300 text-white shadow-emerald-900/50';
              statusIcon = <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />;
            } else if (status === 'incorrect') {
              bgClass = 'bg-rose-600 border-rose-400 text-white shadow-rose-950/50';
              statusIcon = <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />;
            } else if (status === 'passed') {
              bgClass = 'bg-amber-500 border-amber-300 text-slate-950 font-bold shadow-amber-950/40';
              statusIcon = <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />;
            }

            if (isActive) {
              bgClass = 'bg-amber-400 border-yellow-200 text-slate-950 font-black shadow-xl shadow-amber-500/70 ring-4 ring-amber-300/80 z-30';
            }

            return (
              <motion.button
                key={q.id}
                onClick={() => onSelectLetter(index)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isActive ? 1.25 : 1,
                  opacity: 1,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-extrabold cursor-pointer transition-colors duration-200 focus:outline-none ${bgClass}`}
                title={`Letra ${q.letter} - ${q.categoryTitle}`}
              >
                {statusIcon ? (
                  <span className="flex flex-col items-center justify-center leading-none">
                    <span className="text-[9px] sm:text-[11px] font-black">{q.letter}</span>
                  </span>
                ) : (
                  <span>{q.letter}</span>
                )}
              </motion.button>
            );
          })}

          {/* CENTER DISPLAY OF EL ROSCO - ABSOLUTELY PERFECTLY CENTERED */}
          <div className="absolute inset-0 m-auto w-[52%] h-[52%] rounded-full bg-slate-900/95 border-2 border-amber-400/70 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-2 text-center z-20">
            {/* Active Letter Big Avatar */}
            <motion.div
              key={activeQuestion?.letter}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 text-slate-950 flex items-center justify-center text-2xl sm:text-4xl font-black shadow-lg shadow-amber-500/40 border-2 border-amber-200">
                {activeQuestion?.letter}
              </div>
            </motion.div>

            {/* Timer Display */}
            <div className="mt-1 flex items-center gap-1 text-white font-mono text-xs sm:text-sm font-bold bg-slate-800/90 px-3 py-0.5 rounded-full border border-slate-700 shadow-inner">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{formattedTime}</span>
            </div>

            {/* Mini Score Badges */}
            <div className="mt-1.5 grid grid-cols-3 gap-1 w-full max-w-[160px] text-[10px] sm:text-xs">
              <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded py-0.5 px-0.5 flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] text-emerald-300 font-medium leading-none">Aciertos</span>
                <span className="font-extrabold text-xs">{correctCount}</span>
              </div>
              <div className="bg-rose-950/80 border border-rose-500/40 text-rose-400 rounded py-0.5 px-0.5 flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] text-rose-300 font-medium leading-none">Fallos</span>
                <span className="font-extrabold text-xs">{incorrectCount}</span>
              </div>
              <div className="bg-amber-950/80 border border-amber-500/40 text-amber-300 rounded py-0.5 px-0.5 flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] text-amber-300 font-medium leading-none">Pasadas</span>
                <span className="font-extrabold text-xs">{passedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar below wheel */}
      <div className="w-full px-4 mt-1 flex items-center gap-2">
        <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
          <div
            className="bg-gradient-to-r from-emerald-500 via-amber-400 to-indigo-500 h-full transition-all duration-300"
            style={{
              width: `${((correctCount + incorrectCount) / totalLetters) * 100}%`,
            }}
          />
        </div>
        <span className="text-xs text-slate-400 font-mono font-medium whitespace-nowrap">
          {correctCount + incorrectCount}/{totalLetters} respuestas
        </span>
      </div>
    </div>
  );
};
