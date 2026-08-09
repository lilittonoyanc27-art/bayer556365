import { Question } from './types';

export const QUESTIONS: Question[] = [
  // --- EJERCICIO 1: Rellenar la forma correcta del verbo reflexivo (1 - 9) ---
  {
    id: 1,
    letter: 'A',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Ես ամեն օր վեր եմ կենում / արթնանում եմ ժամը յոթին։',
    promptSpanish: 'Yo __________ a las siete todos los días. (levantarse)',
    infinitive: 'levantarse',
    correctAnswer: 'me levanto',
    acceptableAnswers: ['me levanto', 'Yo me levanto'],
    hint: 'Pronombre para Yo: "me". Verbo: levanto.',
    explanation: 'Yo -> me levanto. Pronombre reflexivo "me" + primera persona del singular.'
  },
  {
    id: 2,
    letter: 'B',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Լուսիան առավոտյան արագ հագնվում է։',
    promptSpanish: 'Lucía __________ rápidamente por la mañana. (vestirse)',
    infinitive: 'vestirse',
    correctAnswer: 'se viste',
    acceptableAnswers: ['se viste', 'Lucía se viste'],
    hint: 'Lucía (ella) usa el pronombre "se". Cambio e->i: viste.',
    explanation: 'Lucía (tercera persona) -> se viste (verbo con cambio vocálico e->i).'
  },
  {
    id: 3,
    letter: 'C',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Կառլոսը նախաճաշից հետո ատամներն է լվանում։',
    promptSpanish: 'Carlos __________ los dientes después del desayuno. (lavarse)',
    infinitive: 'lavarse',
    correctAnswer: 'se lava',
    acceptableAnswers: ['se lava', 'Carlos se lava'],
    hint: 'Carlos (él) usa el pronombre "se". Verbo: lava.',
    explanation: 'Carlos (él) -> se lava los dientes.'
  },
  {
    id: 4,
    letter: 'D',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Մենք պարկում ենք քնելու գիշերը ժամը տասնմեկին։',
    promptSpanish: 'Nosotros __________ a las once de la noche. (acostarse)',
    infinitive: 'acostarse',
    correctAnswer: 'nos acostamos',
    acceptableAnswers: ['nos acostamos', 'Nosotros nos acostamos'],
    hint: 'Nosotros usa "nos". En nosotros NO hay cambio vocálico.',
    explanation: 'Nosotros -> nos acostamos. Recordatorio: la forma de nosotros no cambia la o por ue.'
  },
  {
    id: 5,
    letter: 'E',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Սովորաբար ժամը քանիսի՞ն ես դու արթնանում։',
    promptSpanish: '¿A qué hora __________ tú normalmente? (despertarse)',
    infinitive: 'despertarse',
    correctAnswer: 'te despiertas',
    acceptableAnswers: ['te despiertas', 'te despiertas tú'],
    hint: 'Tú usa "te". Cambio e->ie: despiertas.',
    explanation: 'Tú -> te despiertas. Verbo e->ie en presente de indicativo.'
  },
  {
    id: 6,
    letter: 'F',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Անան սանրվում է հայելու առջև։',
    promptSpanish: 'Ana __________ delante del espejo. (peinarse)',
    infinitive: 'peinarse',
    correctAnswer: 'se peina',
    acceptableAnswers: ['se peina', 'Ana se peina'],
    hint: 'Ana (ella) usa "se". Verbo regular: peina.',
    explanation: 'Ana -> se peina delante del espejo.'
  },
  {
    id: 7,
    letter: 'G',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Դուք աշխատանքից հետո նստում եք բազմոցին։',
    promptSpanish: 'Vosotros __________ en el sofá después del trabajo. (sentarse)',
    infinitive: 'sentarse',
    correctAnswer: 'os sentáis',
    acceptableAnswers: ['os sentáis', 'os sentais', 'Vosotros os sentáis', 'Vosotros os sentais'],
    hint: 'Vosotros usa "os". Verbo: sentáis.',
    explanation: 'Vosotros -> os sentáis (con tilde en la a).'
  },
  {
    id: 8,
    letter: 'H',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Իմ ընկերները այս գիշեր մնում են տանը։',
    promptSpanish: 'Mis amigos __________ en casa esta noche. (quedarse)',
    infinitive: 'quedarse',
    correctAnswer: 'se quedan',
    acceptableAnswers: ['se quedan', 'Mis amigos se quedan'],
    hint: 'Mis amigos (ellos) usa "se". Verbo: quedan.',
    explanation: 'Mis amigos (ellos) -> se quedan en casa.'
  },
  {
    id: 9,
    letter: 'I',
    category: 'conjugation',
    categoryTitle: 'Վարժություն 1 — Լրացրեք ճիշտ ձևով',
    promptArmenian: 'Փակագծում տրված բայը դրեք ճիշտ ձևով:',
    translationArmenian: 'Պեդրոն ցնցուղ է ընդունում աշխատանքի գնալուց առաջ։',
    promptSpanish: 'Pedro __________ antes de ir al trabajo. (ducharse)',
    infinitive: 'ducharse',
    correctAnswer: 'se ducha',
    acceptableAnswers: ['se ducha', 'Pedro se ducha'],
    hint: 'Pedro (él) usa "se". Verbo: ducha.',
    explanation: 'Pedro -> se ducha antes de ir al trabajo.'
  },

  // --- EJERCICIO 2: Ordenar la frase (10 - 18) ---
  {
    id: 10,
    letter: 'J',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Ես ամեն օր վաղ եմ արթնանում։',
    promptSpanish: 'Desorden: levanto / me / todos / temprano / los días',
    wordsToOrder: ['Me', 'levanto', 'temprano', 'todos', 'los', 'días'],
    correctAnswer: 'Me levanto temprano todos los días',
    acceptableAnswers: [
      'Me levanto temprano todos los días',
      'Todos los días me levanto temprano',
      'me levanto temprano todos los dias'
    ],
    hint: 'Empieza con "Me levanto" o "Todos los días".',
    explanation: 'Sujeto implícito (Yo) + pronombre "me" + verbo "levanto" + adverbio/complemento.'
  },
  {
    id: 11,
    letter: 'K',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Կառլոսը երբեմն ուշ է պարկում քնելու։',
    promptSpanish: 'Desorden: se / Carlos / a / acuesta / tarde / veces',
    wordsToOrder: ['Carlos', 'a', 'veces', 'se', 'acuesta', 'tarde'],
    correctAnswer: 'Carlos a veces se acuesta tarde',
    acceptableAnswers: [
      'Carlos a veces se acuesta tarde',
      'A veces Carlos se acuesta tarde',
      'Carlos se acuesta tarde a veces'
    ],
    hint: 'Puedes empezar con "Carlos" o con "A veces".',
    explanation: 'Pronombre "se" va inmediatamente antes del verbo conjugado "acuesta".'
  },
  {
    id: 12,
    letter: 'L',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Լուսիան առավոտյան արագ հագնվում է։',
    promptSpanish: 'Desorden: rápidamente / Lucía / se / viste / por la mañana',
    wordsToOrder: ['Lucía', 'se', 'viste', 'rápidamente', 'por', 'la', 'mañana'],
    correctAnswer: 'Lucía se viste rápidamente por la mañana',
    acceptableAnswers: [
      'Lucía se viste rápidamente por la mañana',
      'Por la mañana Lucía se viste rápidamente',
      'Lucia se viste rapidamente por la mañana'
    ],
    hint: 'Lucía + se viste + rápidamente + por la mañana.',
    explanation: 'Pronombre "se" precede al verbo "viste".'
  },
  {
    id: 13,
    letter: 'M',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Մենք ցնցուղ ենք ընդունում սպորտով զբաղվելուց հետո։',
    promptSpanish: 'Desorden: nos / después / duchamos / deporte / de / hacer',
    wordsToOrder: ['Nos', 'duchamos', 'después', 'de', 'hacer', 'deporte'],
    correctAnswer: 'Nos duchamos después de hacer deporte',
    acceptableAnswers: [
      'Nos duchamos después de hacer deporte',
      'Después de hacer deporte nos duchamos',
      'Nos duchamos despues de hacer deporte'
    ],
    hint: 'Nos duchamos + después de hacer deporte.',
    explanation: 'Nos (pronombre) duchamos (verbo) + locución "después de" + infinitivo "hacer".'
  },
  {
    id: 14,
    letter: 'N',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Ժամը քանիսի՞ն ես արթնանում։',
    promptSpanish: 'Desorden: te / ¿ / a qué hora / despiertas / ?',
    wordsToOrder: ['¿A', 'qué', 'hora', 'te', 'despiertas?'],
    correctAnswer: '¿A qué hora te despiertas?',
    acceptableAnswers: [
      '¿A qué hora te despiertas?',
      'A qué hora te despiertas?',
      'A que hora te despiertas',
      '¿A que hora te despiertas?'
    ],
    hint: 'Es una pregunta: ¿A qué hora ... ?',
    explanation: 'Estructura interrogativa: ¿A qué hora + pronombre "te" + verbo "despiertas"?'
  },
  {
    id: 15,
    letter: 'Ñ',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Անան սանրվում է հայելու առջև։',
    promptSpanish: 'Desorden: espejo / se / Ana / delante / peina / del',
    wordsToOrder: ['Ana', 'se', 'peina', 'delante', 'del', 'espejo'],
    correctAnswer: 'Ana se peina delante del espejo',
    acceptableAnswers: [
      'Ana se peina delante del espejo',
      'Delante del espejo Ana se peina'
    ],
    hint: 'Sujeto: Ana. Verbo: se peina.',
    explanation: 'Ana + se peina + locución "delante del espejo".'
  },
  {
    id: 16,
    letter: 'O',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Մենք նստում ենք այստեղ։',
    promptSpanish: 'Desorden: aquí / nosotros / nos / sentamos',
    wordsToOrder: ['Nosotros', 'nos', 'sentamos', 'aquí'],
    correctAnswer: 'Nosotros nos sentamos aquí',
    acceptableAnswers: [
      'Nosotros nos sentamos aquí',
      'Nos sentamos aquí nosotros',
      'Nosotros nos sentamos aqui'
    ],
    hint: 'Nosotros + nos sentamos + aquí.',
    explanation: 'Sujeto "Nosotros" + pronombre "nos" + verbo "sentamos" + adverbio de lugar "aquí".'
  },
  {
    id: 17,
    letter: 'P',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Նրանք մնում են Մադրիդում։',
    promptSpanish: 'Desorden: Madrid / quedan / ellos / se / en',
    wordsToOrder: ['Ellos', 'se', 'quedan', 'en', 'Madrid'],
    correctAnswer: 'Ellos se quedan en Madrid',
    acceptableAnswers: [
      'Ellos se quedan en Madrid',
      'Se quedan en Madrid ellos'
    ],
    hint: 'Ellos + se quedan + en Madrid.',
    explanation: 'Ellos (sujeto) + se (pronombre) + quedan (verbo) + en Madrid (complemento).'
  },
  {
    id: 18,
    letter: 'Q',
    category: 'word-order',
    categoryTitle: 'Վարժություն 2 — Կազմեք ճիշտ նախադասություն',
    promptArmenian: 'Բառերը դրեք ճիշտ հերթականությամբ:',
    translationArmenian: 'Ի՞նչ է քո անունը։ / Ինչպե՞ս են քեզ կոչում։',
    promptSpanish: 'Desorden: llamas / cómo / te / ¿ / ?',
    wordsToOrder: ['¿Cómo', 'te', 'llamas?'],
    correctAnswer: '¿Cómo te llamas?',
    acceptableAnswers: [
      '¿Cómo te llamas?',
      'Cómo te llamas?',
      'Como te llamas',
      '¿Como te llamas?'
    ],
    hint: 'Pregunta clásica: ¿Cómo te llamas?',
    explanation: 'Interrogación básica para preguntar el nombre con llamarse.'
  },

  // --- EJERCICIO 3: Elegir el pronombre reflexivo correcto (19 - 24) ---
  {
    id: 19,
    letter: 'R',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (me / te / se):',
    translationArmenian: 'Ես արթնանում եմ ժամը ութին։',
    promptSpanish: 'Yo [ me / te / se ] despierto a las ocho.',
    options: ['me', 'te', 'se'],
    correctAnswer: 'me',
    acceptableAnswers: ['me', 'Yo me despierto a las ocho.'],
    hint: 'Sujeto "Yo" -> pronombre "me".',
    explanation: 'Para la 1ª persona del singular (Yo), el pronombre reflexivo es "me".'
  },
  {
    id: 20,
    letter: 'S',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (me / se / nos):',
    translationArmenian: 'Կառլոսը ցնցուղ է ընդունում առավոտյան։',
    promptSpanish: 'Carlos [ me / se / nos ] ducha por la mañana.',
    options: ['me', 'se', 'nos'],
    correctAnswer: 'se',
    acceptableAnswers: ['se', 'Carlos se ducha por la mañana.'],
    hint: 'Carlos (él) -> pronombre "se".',
    explanation: 'Para la 3ª persona del singular (él / Carlos), el pronombre es "se".'
  },
  {
    id: 21,
    letter: 'T',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (os / nos / se):',
    translationArmenian: 'Մենք կանուխ ենք պարկում քնելու։',
    promptSpanish: 'Nosotros [ os / nos / se ] acostamos temprano.',
    options: ['os', 'nos', 'se'],
    correctAnswer: 'nos',
    acceptableAnswers: ['nos', 'Nosotros nos acostamos temprano.'],
    hint: 'Nosotros -> pronombre "nos".',
    explanation: 'Para la 1ª persona del plural (Nosotros), el pronombre es "nos".'
  },
  {
    id: 22,
    letter: 'U',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (te / se / me):',
    translationArmenian: 'Դու հագնվո՞ւմ ես նախաճաշելուց առաջ։',
    promptSpanish: '¿Tú [ te / se / me ] vistes antes de desayunar?',
    options: ['te', 'se', 'me'],
    correctAnswer: 'te',
    acceptableAnswers: ['te', '¿Tú te vistes antes de desayunar?'],
    hint: 'Tú -> pronombre "te".',
    explanation: 'Para la 2ª persona del singular (Tú), el pronombre es "te".'
  },
  {
    id: 23,
    letter: 'V',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (se / nos / os):',
    translationArmenian: 'Լուսիան և Անան նստում են պատուհանի մոտ։',
    promptSpanish: 'Lucía y Ana [ se / nos / os ] sientan cerca de la ventana.',
    options: ['se', 'nos', 'os'],
    correctAnswer: 'se',
    acceptableAnswers: ['se', 'Lucía y Ana se sientan cerca de la ventana.'],
    hint: 'Lucía y Ana (ellas) -> pronombre "se".',
    explanation: 'Para la 3ª persona del plural (ellas), el pronombre reflexivo es "se".'
  },
  {
    id: 24,
    letter: 'W',
    category: 'pronoun-select',
    categoryTitle: 'Վարժություն 3 — Ընտրեք ճիշտ տարբերակը',
    promptArmenian: 'Ընտրեք ճիշտ դերանունը (se / os / nos):',
    translationArmenian: 'Դուք շատ վաղ եք արթնանում։',
    promptSpanish: 'Vosotros [ se / os / nos ] levantáis muy temprano.',
    options: ['se', 'os', 'nos'],
    correctAnswer: 'os',
    acceptableAnswers: ['os', 'Vosotros os levantáis muy temprano.'],
    hint: 'Vosotros -> pronombre "os".',
    explanation: 'Para la 2ª persona del plural en España (Vosotros), el pronombre es "os".'
  },

  // --- EJERCICIO 4: Encontrar y corregir el error (25 - 27) ---
  {
    id: 25,
    letter: 'X',
    category: 'error-fix',
    categoryTitle: 'Վարժություն 4 — Գտեք և ուղղեք սխալը',
    promptArmenian: 'Գտեք սխալը և գրեք ճիշտ նախադասությունը:',
    translationArmenian: 'Ես արթնանում եմ ժամը յոթին։',
    promptSpanish: 'Frase con error: "Yo se levanto a las siete."',
    correctAnswer: 'Yo me levanto a las siete.',
    acceptableAnswers: [
      'Yo me levanto a las siete.',
      'Yo me levanto a las siete',
      'me levanto',
      'me levanto a las siete'
    ],
    hint: '"Yo" no usa "se". Necesita el pronombre "me".',
    explanation: 'El error era usar "se" con "Yo". La frase correcta es: Yo ME levanto a las siete.'
  },
  {
    id: 26,
    letter: 'Y',
    category: 'error-fix',
    categoryTitle: 'Վարժություն 4 — Գտեք և ուղղեք սխալը',
    promptArmenian: 'Գտեք սխալը և գրեք ճիշտ նախադասությունը:',
    translationArmenian: 'Կառլոսը ցնցուղ է ընդունում մարզասրահից հետո։',
    promptSpanish: 'Frase con error: "Carlos te ducha después del gimnasio."',
    correctAnswer: 'Carlos se ducha después del gimnasio.',
    acceptableAnswers: [
      'Carlos se ducha después del gimnasio.',
      'Carlos se ducha después del gimnasio',
      'se ducha',
      'se ducha después del gimnasio'
    ],
    hint: 'Carlos (él) requiere el pronombre "se", no "te".',
    explanation: 'El error era "te". Para Carlos (él) se debe usar "se": Carlos SE ducha...'
  },
  {
    id: 27,
    letter: 'Z',
    category: 'error-fix',
    categoryTitle: 'Վարժություն 4 — Գտեք և ուղղեք սխալը',
    promptArmenian: 'Գտեք սխալը և գրեք ճիշտ նախադասությունը:',
    translationArmenian: 'Մենք պարկում ենք քնելու ժամը տասնմեկին։',
    promptSpanish: 'Nosotros se acostamos a las once.',
    correctAnswer: 'Nosotros nos acostamos a las once.',
    acceptableAnswers: [
      'Nosotros nos acostamos a las once.',
      'Nosotros nos acostamos a las once',
      'nos acostamos',
      'nos acostamos a las once'
    ],
    hint: 'Nosotros requiere el pronombre "nos".',
    explanation: 'El error era "se". Para Nosotros el pronombre es "nos": Nosotros NOS acostamos...'
  }
];

// Normalize helper to compare answers safely
export function normalizeAnswer(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[¿?¡!.,;:]/g, '')     // remove punctuation
    .trim()
    .replace(/\s+/g, ' ');           // collapse spaces
}

export function checkAnswer(userInput: string, question: Question): boolean {
  const normUser = normalizeAnswer(userInput);
  if (!normUser) return false;

  const normCorrect = normalizeAnswer(question.correctAnswer);
  if (normUser === normCorrect) return true;

  for (const alt of question.acceptableAnswers) {
    if (normUser === normalizeAnswer(alt)) {
      return true;
    }
  }

  return false;
}
