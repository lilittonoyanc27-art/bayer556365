import React from 'react';
import { motion } from 'motion/react';
import { Question, AnswerStatus } from './types';
import { Trophy, RotateCcw, CheckCircle2, XCircle, Award, Sparkles, Clock } from 'lucide-react';

interface ResultsModalProps {
  questions: Question[];
  statuses: Record<number, AnswerStatus>;
  userAnswers: Record<number, string>;
  timeRemaining: number;
  initialTime: number;
  onRestart: () => void;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  questions,
  statuses,
  userAnswers,
  timeRemaining,
  initialTime,
  onRestart,
}) => {
  const correctCount = Object.values(statuses).filter((s) => s === 'correct').length;
  const incorrectCount = Object.values(statuses).filter((s) => s === 'incorrect').length;
  const totalQuestions = questions.length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  const timeUsedSeconds = Math.max(0, initialTime - timeRemaining);
  const minutes = Math.floor(timeUsedSeconds / 60);
  const seconds = timeUsedSeconds % 60;

  let medalTitle = '¡Gran esfuerzo!';
  let medalColor = 'from-blue-500 to-indigo-600';
  let armenianGrade = 'Լավ արդյունք!';

  if (accuracy >= 90) {
    medalTitle = '¡Campeón de Pasapalabra!';
    medalColor = 'from-amber-400 via-yellow-500 to-amber-600';
    armenianGrade = 'Գերազանց! Դուք հիանալի տիրապետում եք վերադարձ բայերին!';
  } else if (accuracy >= 70) {
    medalTitle = '¡Excelente nivel!';
    medalColor = 'from-slate-300 via-slate-400 to-slate-500';
    armenianGrade = 'Շատ լավ! Դուք ունեք գերազանց գիտելիքներ:';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg overflow-y-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto text-white"
      >
        {/* Header with Trophy */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/30 text-slate-950">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-400">
            {medalTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            {armenianGrade}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">
              Aciertos (Ճիշտ)
            </span>
            <span className="text-2xl font-black text-emerald-400">{correctCount}</span>
            <span className="text-xs text-slate-400 block">/ {totalQuestions}</span>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">
              Fallos (Սխալ)
            </span>
            <span className="text-2xl font-black text-rose-400">{incorrectCount}</span>
            <span className="text-xs text-slate-400 block">հարց</span>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">
              Precisión (Ճշտություն)
            </span>
            <span className="text-2xl font-black text-amber-400">{accuracy}%</span>
            <span className="text-xs text-slate-400 block">հաջողություն</span>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">
              Tiempo (Ժամանակ)
            </span>
            <span className="text-2xl font-black text-indigo-400 font-mono">
              {minutes}:{seconds < 10 ? '0' : ''}{seconds}
            </span>
            <span className="text-xs text-slate-400 block">ծախսված</span>
          </div>
        </div>

        {/* Questions Review list */}
        <div className="my-4 max-h-60 overflow-y-auto space-y-2 pr-1 border-t border-b border-slate-800 py-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Հարցերի ամփոփում (Resumen de respuestas):
          </h3>
          {questions.map((q) => {
            const st = statuses[q.id];
            const isCorr = st === 'correct';
            const userAns = userAnswers[q.id] || 'Pasada';

            return (
              <div
                key={q.id}
                className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-3 ${
                  isCorr
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-6 h-6 rounded-md bg-slate-800 font-black text-xs flex items-center justify-center shrink-0 text-amber-400">
                    {q.letter}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium truncate text-slate-200">{q.promptSpanish}</p>
                    <p className="text-[10px] opacity-80">
                      Ճիշտ պատասխան: <span className="font-mono font-bold">{q.correctAnswer}</span>
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 font-bold">
                  {isCorr ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Restart Action */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onRestart}
            className="py-3.5 px-8 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-base uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/20 flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            <span>ԿՐԿԻՆ ԽԱՂԱԼ (Jugar de nuevo)</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
