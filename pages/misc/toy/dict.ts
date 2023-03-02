import Random from "../../../lib/random";

const cs = 'g n m c d b k t p x s f h z v l'.split(' ');
const vs = 'ı e a o u ǐ ě ǎ ǒ ǔ'.split(' ');
const ccs = [
  ...'c d b h z v l'.split(' ').map(c => 'n' + c),
  ...'k t p'.split(' ').flatMap(c => 'n x s f l'.split(' ').map(c1 => c + c1)),
  ...'x s f'.split(' ').flatMap(c => 'n k t p l'.split(' ').map(c1 => c + c1)),
  ...'n c d b h z v'.split(' ').map(c => 'l' + c),
];

const compareWords = (w, w1) => {
  const c = w.charAt(0);
  const c1 = w1.charAt(0);

  const result = [...cs, ...vs].indexOf(c) - [...cs, ...vs].indexOf(c1);
  if (result == 0)
    return compareWords(w.slice(1), w1.slice(1));
  else
    return result;
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

  const categories = [...new Set(Object.values(dictBase).filter(([x]) => x.hasOwnProperty('random')).map(v => v[1]))]
  const random = new Random();

  const usedWords = []

  for (const [k, [x, category, klass, mean]] of Object.entries(dictBase))
    if (typeof x == 'string') {
      usedWords.push(x)
      d[k] = [x, klass, mean]
    }

  for (const category of categories) {
    const usedInitials = []

    for (const [k, [x, c, klass, mean]] of Object.entries(dictBase)) {
      if (c == category) {
        for (let i = 0; ; i++) {
          console.log(`${category}\t${JSON.stringify(x)}\t${i}`)

          if (x.hasOwnProperty('random')) {
            const w = random.choose(signifierss[x.random])
            const initial = w.match(new RegExp(`^[${cs.join('')}]+`))[0]

            if (category != '' && usedInitials.includes(initial) || usedWords.includes(w))
              continue

            usedInitials.push(initial)
            usedWords.push(w)
            d[k] = [w, klass, mean]
            break
          } else {
            // FIXME
          }
        }
      }
    }
  }
  console.log('dict generated')

  const translate = s =>
    Object.entries(d).reduce((acc, [key, [word]]) =>
      acc.replace(new RegExp(`(?<![_A-Z])${key.toUpperCase()}(?![_A-Z])`, 'g'), word)
      , s)

  for (const [k, [x, c, klass, mean]] of Object.entries(dictBase)) {
    if (x.hasOwnProperty('compound'))
      d[k] = [translate(x), klass, mean]
  }

  const dSorted = Object.fromEntries(
    Object.entries(d).sort(([key, [word]], [key1, [word1]]) =>
      compareWords(word, word1)
    )
  )
  console.log('dict sorted')

  return dSorted
})()

export const translate = s =>
  Object.entries(dict).reduce((acc, [key, [word]]) =>
    acc.replace(new RegExp(`(?<![_A-Z])${key.toUpperCase()}(?![_A-Z])`, 'g'), word)
    , s)
