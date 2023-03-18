import Random from "../../../lib/random";

const cs = 'g n m c d b q k t p h x s f j z v r'.split(' ');
const vs = 'i y w u e ö o ä a'.split(' ');
// í ý ẃ ú é ǿ ó á

const compareWords = (w, w1) => {
  if (w == w1)
    return 0
  else if (w == '')
    return -1
  else if (w1 == '')
    return 1
  else {
    const c = w.charAt(0);
    const c1 = w1.charAt(0);

    const result = [...cs, ...vs].indexOf(c) - [...cs, ...vs].indexOf(c1);
    if (result == 0)
      return compareWords(w.slice(1), w1.slice(1));
    else
      return result;
  }
};

export const notAllowed = [
  '[kxj][äöy]',
  '[gm](?!V)',
]
const isAllowed = x =>
  !new RegExp(
    notAllowed
      .join('|')
      .replace(/C/g, `[${cs.join('')}]`)
      .replace(/V/g, `[${vs.join('')}]`)
  ).test(x);

const cvs = cs.flatMap(c => vs.map(v => c + v)).filter(isAllowed)
const cvcs = cvs.flatMap(cv => cs.map(c => cv + c)).filter(isAllowed)
console.log(`CV: ${cvs.length}`);
console.log(`CVC: ${cvcs.length}`);

import { dictBase } from "./dict-base";
export const dict = (() => {
  let d = {};
  const random = new Random();
  const usedWords = []

  for (const [k, [x, category, klass, mean]] of Object.entries(dictBase))
    if (typeof x == 'string') {
      usedWords.push(x)
      d[k] = [x, klass, mean]
    } else if (x.hasOwnProperty('random')) {
      const w = (() => {
        for (let i = 0; i < 1000; i++) {
          const w = x.random
            .replace(/C/g, () => random.choose(cs))
            .replace(/V/g, () => random.choose(vs))
          if (!isAllowed(w) || usedWords.includes(w))
            continue;
          else
            return w;
        }
        throw 'failed: generate word'
      })()
      usedWords.push(w)
      d[k] = [w, klass, mean]
    }
  console.log('dict generated')

  const dSorted = Object.fromEntries(
    Object.entries(d).sort(([key, [word]], [key1, [word1]]) =>
      compareWords(word, word1)
    )
  )
  console.log('dict sorted')

  return dSorted
})()

export const translate = s =>
  s
    .replace(/(?<![_A-Z])[_A-Z]+(?![_A-Z])/g, x => {
      const k = x.toLowerCase()
      if (dict.hasOwnProperty(k))
        return dict[k][0];
      else
        return x;
    })
    .replace(/=/g, '');
