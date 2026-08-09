import React, { useState, useEffect } from 'react';
import { RotateCcw, X, Check } from 'lucide-react';

interface WordBuilderProps {
  words: string[];
  onChange: (sentence: string) => void;
  onSubmit: () => void;
  currentValue: string;
}

export const WordBuilder: React.FC<WordBuilderProps> = ({
  words,
  onChange,
  onSubmit,
  currentValue,
}) => {
  // Available pool vs selected word chips
  const [availableWords, setAvailableWords] = useState<{ id: string; text: string }[]>([]);
  const [selectedWords, setSelectedWords] = useState<{ id: string; text: string }[]>([]);

  // Initialize pool on question change
  useEffect(() => {
    // Shuffle or map words with unique IDs
    const wordObjects = words.map((w, index) => ({
      id: `${w}-${index}`,
      text: w,
    }));
    setAvailableWords(wordObjects);
    setSelectedWords([]);
  }, [words]);

  // Update parent string whenever selectedWords changes
  const handleSelectWord = (wordObj: { id: string; text: string }) => {
    const newSelected = [...selectedWords, wordObj];
    const newAvailable = availableWords.filter((w) => w.id !== wordObj.id);
    setSelectedWords(newSelected);
    setAvailableWords(newAvailable);

    const fullSentence = newSelected.map((w) => w.text).join(' ');
    onChange(fullSentence);
  };

  const handleDeselectWord = (wordObj: { id: string; text: string }) => {
    const newSelected = selectedWords.filter((w) => w.id !== wordObj.id);
    const newAvailable = [...availableWords, wordObj];
    setSelectedWords(newSelected);
    setAvailableWords(newAvailable);

    const fullSentence = newSelected.map((w) => w.text).join(' ');
    onChange(fullSentence);
  };

  const handleReset = () => {
    const all = words.map((w, index) => ({
      id: `${w}-${index}`,
      text: w,
    }));
    setAvailableWords(all);
    setSelectedWords([]);
    onChange('');
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Selected Words Area / Constructed Sentence */}
      <div className="min-h-[56px] w-full bg-slate-900 border-2 border-indigo-500/40 rounded-xl p-2.5 flex flex-wrap items-center gap-2 transition-all">
        {selectedWords.length === 0 ? (
          <span className="text-slate-500 text-sm italic px-1">
            Կտտացրեք բառերին՝ ճիշտ հերթականությամբ կազմելու համար (Tap words below)
          </span>
        ) : (
          selectedWords.map((wordObj) => (
            <button
              key={wordObj.id}
              onClick={() => handleDeselectWord(wordObj)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-3 py-1.5 rounded-lg border border-indigo-400 flex items-center gap-1.5 shadow-sm transition-all animate-in fade-in zoom-in-95 duration-150 cursor-pointer"
            >
              <span>{wordObj.text}</span>
              <X className="w-3.5 h-3.5 text-indigo-200" />
            </button>
          ))
        )}
      </div>

      {/* Control buttons bar for Word Builder */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Հասանելի բառեր (Available words):</span>
        {selectedWords.length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Մաքրել (Reset)</span>
          </button>
        )}
      </div>

      {/* Available Words Pool */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-800/60 rounded-xl border border-slate-700/60">
        {availableWords.map((wordObj) => (
          <button
            key={wordObj.id}
            type="button"
            onClick={() => handleSelectWord(wordObj)}
            className="bg-slate-700 hover:bg-indigo-600 text-slate-100 hover:text-white font-medium text-sm px-3.5 py-1.5 rounded-lg border border-slate-600 hover:border-indigo-400 shadow transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            {wordObj.text}
          </button>
        ))}
      </div>
    </div>
  );
};
