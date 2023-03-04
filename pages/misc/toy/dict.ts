import Random from "../../../lib/random";

const cs = 'g n m c d b k t p x s f h z v l'.split(' ');
const vs = 'i y u e ö o a ä'.split(' ');
const ccs = [
  ...'c d b h z v l'.split(' ').map(c => 'n' + c),
  ...'k t p'.split(' ').flatMap(c => 'n x s f l'.split(' ').map(c1 => c + c1)),
  ...'x s f'.split(' ').flatMap(c => 'n k t p l'.split(' ').map(c1 => c + c1)),
  ...'n c d b h z v'.split(' ').map(c => 'l' + c),
];

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

const allowed = x =>
  !new RegExp(`^[nl][${cs.join('')}]`).test(x);

const cvs = cs.flatMap(c => vs.map(v => c + v)).filter(allowed);
const ccvs = ccs.flatMap(cc => vs.map(v => cc + v)).filter(allowed);
const signifierss = {
  'c': cs,
  'v': vs,
  'cv': cvs,
  'ccv': ccvs,
  'cvc': cvs.flatMap(cv => cs.map(c => cv + c)),
  'cvcv': cvs.flatMap(cv => cvs.map(cv1 => cv + cv1)).filter(allowed),
  'cxxcv': [
    ...ccvs.flatMap(ccv => cvs.map(cv => ccv + cv)).filter(allowed),
    ...cvs.flatMap(cv => ccvs.map(ccv => cv + ccv)).filter(allowed),
  ],
};

for (const k in signifierss)
  console.log(k + ': ' + signifierss[k].length);

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
          const w = random.choose(signifierss[x.random])
          if (usedWords.includes(w))
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
