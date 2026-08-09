export type QuestionCategory = 
  | 'conjugation'    // Ejercicio 1: Rellenar con la forma correcta
  | 'word-order'     // Ejercicio 2: Ordenar la frase
  | 'pronoun-select' // Ejercicio 3: Elegir el pronombre reflexivo
  | 'error-fix';     // Ejercicio 4: Encontrar y corregir el error

export type AnswerStatus = 'pending' | 'correct' | 'incorrect' | 'passed';

export interface Question {
  id: number;
  letter: string;
  category: QuestionCategory;
  categoryTitle: string; // e.g., "Ejercicio 1 — Rellenar el hueco"
  promptArmenian: string; // Instructions in Armenian / Russian as requested
  translationArmenian: string; // Full Armenian translation of the sentence
  promptSpanish: string;
  infinitive?: string; // e.g., "levantarse"
  options?: string[]; // for Exercise 3: ['me', 'te', 'se']
  wordsToOrder?: string[]; // for Exercise 2: ['levanto', 'me', 'todos', ...]
  correctAnswer: string;
  acceptableAnswers: string[]; // Variations (e.g. without accents or alternate order)
  explanation: string; // Explanation in Spanish & Armenian/Russian for educational value
  hint: string;
}

export interface GameStats {
  correct: number;
  incorrect: number;
  passed: number;
  total: number;
  timeRemaining: number; // in seconds
  isCompleted: boolean;
  isPaused: boolean;
  score: number;
}
