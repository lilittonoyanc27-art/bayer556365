import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, AnswerStatus } from './types';
import { WordBuilder } from './WordBuilder';
import { Lightbulb, Send, Forward, CheckCircle2, XCircle, Info, Sparkles } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  status: AnswerStatus;
  onSubmitAnswer: (answer: string) => void;
  onPasapalabra: () => void;
  onNextQuestion?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  status,
  onSubmitAnswer,
  onPasapalabra,
  onNextQuestion,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showArmenianTranslation, setShowArmenianTranslation] = useState(false);

  // Reset local state when question changes
  useEffect(() => {
    setUserAnswer('');
    setShowArmenianTranslation(false);
  }, [question.id]);

  const handleInsertChar = (char: string) => {
    setUserAnswer((prev) => prev + char);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userAnswer.trim()) return;
    onSubmitAnswer(userAnswer.trim());
  };

  const isAnswered = status === 'correct' || status === 'incorrect';

  return (
    <div className="w-full bg-slate-900 border-2 border-indigo-500/30 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
      {/* Top Banner with Exercise Badge & Letter */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-400 font-black text-lg flex items-center justify-center shadow-md shadow-amber-500/10">
            {question.letter}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              {question.categoryTitle}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              Pregunta #{question.id}
            </span>
          </div>
        </div>

        {/* Armenian Translation Clickable Button */}
        <button
          type="button"
          onClick={() => setShowArmenianTranslation(!showArmenianTranslation)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
            showArmenianTranslation
              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
              : 'bg-slate-800 text-amber-300 hover:bg-slate-700 border-amber-500/40'
          }`}
        >
          <span>🇦🇲</span>
          <span>{showArmenianTranslation ? 'Թաքցնել թարգմանությունը' : 'Թարգմանություն (Перевод)'}</span>
        </button>
      </div>

      {/* Main Spanish Sentence Prompt */}
      <div 
        onClick={() => setShowArmenianTranslation(!showArmenianTranslation)}
        className="my-3 text-slate-100 font-medium text-base sm:text-lg leading-relaxed bg-slate-800/80 hover:bg-slate-800/95 p-4 rounded-xl border border-slate-700/80 cursor-pointer transition-all relative group"
        title="Սեղմեք թարգմանությունը տեսնելու համար"
      >
        <p className="font-serif tracking-wide">{question.promptSpanish}</p>
        <div className="flex items-center justify-between mt-2 pt-1">
          {question.infinitive ? (
            <span className="text-xs font-mono font-semibold text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-500/30">
              Infinitive: {question.infinitive}
            </span>
          ) : <span />}
          <span className="text-xs text-amber-400/90 font-sans group-hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold">
            🇦🇲 {showArmenianTranslation ? 'Թաքցնել թարգմանությունը' : 'Տեսնել թարգմանությունը 👆'}
          </span>
        </div>
      </div>

      {/* Armenian Translation Box on Click */}
      <AnimatePresence>
        {showArmenianTranslation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3.5 bg-amber-950/40 border border-amber-500/50 rounded-xl text-amber-200 text-sm flex items-start gap-2.5 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-amber-300 text-xs tracking-wider uppercase">
                🇦🇲 Հայերեն թարգմանություն (Перевод):
              </span>
              <p className="font-medium text-base text-amber-50 leading-relaxed bg-amber-900/30 p-2 rounded-lg border border-amber-500/20">
                {question.translationArmenian || question.promptArmenian}
              </p>
              <p className="text-xs text-amber-300/80 pt-0.5 font-sans">
                📌 <span className="font-semibold">Հանձնարարություն:</span> {question.promptArmenian}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ANSWER SECTION DEPENDING ON STATE AND CATEGORY */}
      {!isAnswered ? (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          {/* CATEGORY 2: WORD ORDER WITH CHIPS */}
          {question.category === 'word-order' && question.wordsToOrder ? (
            <WordBuilder
              words={question.wordsToOrder}
              onChange={(val) => setUserAnswer(val)}
              onSubmit={handleSubmit}
              currentValue={userAnswer}
            />
          ) : question.category === 'pronoun-select' && question.options ? (
            /* CATEGORY 3: PRONOUN SELECTION BUTTONS */
            <div className="flex flex-col gap-2">
              <span className="text-xs text-slate-400 font-medium">
                Ընտրեք ճիշտ վերադարձ դերանունը:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {question.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setUserAnswer(opt);
                      onSubmitAnswer(opt);
                    }}
                    className={`py-3 px-4 rounded-xl font-bold text-base transition-all cursor-pointer border ${
                      userAnswer === opt
                        ? 'bg-indigo-600 text-white border-indigo-400 ring-2 ring-indigo-400/50 shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-700 text-indigo-200 border-slate-700 hover:border-indigo-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* CATEGORY 1 & 4: TEXT INPUT */
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  autoFocus
                  className="w-full bg-slate-950 border-2 border-indigo-500/50 focus:border-amber-400 text-white text-base sm:text-lg font-medium px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all placeholder:text-slate-500 shadow-inner"
                />
              </div>

              {/* Spanish Accents Toolbar */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <span className="text-[11px] text-slate-400 mr-1">Իսպաներեն տառեր:</span>
                {['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '?'].map((char) => (
                  <button
                    key={char}
                    type="button"
                    onClick={() => handleInsertChar(char)}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 active:bg-indigo-600 text-indigo-200 hover:text-white rounded text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS: COMPROBAR & PASAPALABRA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-2 border-t border-slate-800">
            {/* Submit Button */}
            <button
              type="submit"
              disabled={!userAnswer.trim()}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>ՊԱՏԱՍԽԱՆԵԼ (Comprobar)</span>
            </button>

            {/* Pasapalabra Button */}
            <button
              type="button"
              onClick={onPasapalabra}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
            >
              <Forward className="w-4 h-4" />
              <span>PASAPALABRA (Անցնել)</span>
            </button>
          </div>
        </form>
      ) : (
        /* ANSWERED FEEDBACK CARD */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`mt-4 p-4 rounded-xl border flex flex-col gap-3 ${
            status === 'correct'
              ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200'
              : 'bg-rose-950/50 border-rose-500/50 text-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {status === 'correct' ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
            )}
            <div>
              <span className="font-extrabold text-base block">
                {status === 'correct' ? '¡Correcto! (Ճիշտ է)' : '¡Incorrecto! (Սխալ է)'}
              </span>
              <span className="text-xs opacity-90">
                Ճիշտ պատասխանը (Correct Answer):{' '}
                <strong className="underline text-white font-mono">{question.correctAnswer}</strong>
              </span>
            </div>
          </div>

          {/* Educational Explanation */}
          <div className="bg-slate-900/80 p-3 rounded-lg text-xs text-slate-300 border border-slate-700/60 leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-indigo-300 block mb-0.5">Բացատրություն (Explicación):</span>
              {question.explanation}
            </div>
          </div>

          {/* Next Button */}
          {onNextQuestion && (
            <button
              type="button"
              onClick={onNextQuestion}
              className="mt-1 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Հաջորդ տառը (Siguiente)</span>
              <Forward className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};
