import Random from "./random";

const compareWords = (w: string, w1: string) => {
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
}

export const notAllowed = [
  `[^${[...cs, ...vs].join('')}]`,
  '(..)\\1',
  '[wâôû].[wâôû]',
  'g[âôy]',
  '[szxj][wâôy]',
  '[gckhfv]w'
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
const cvcvs = cvcs.flatMap(cvc => vs.map(v => cvc + v)).filter(isAllowed)
console.log(`CV: ${cvs.length}`);
console.log(`CVC: ${cvcs.length}`);
console.log(`CVCV: ${cvcvs.length}`);

import { cs, dictBase, letters, vs } from "./dict-base";
export const dict = (() => {
  let d = {};
  const random = new Random();
  const usedWords = []

  for (const [k, { signifier, ...rest }] of Object.entries(dictBase))
    if (typeof signifier == 'string' && !/[CV]/.test(signifier)) {
      if (usedWords.includes(signifier))
        throw `${signifier} used twice`
      if (notAllowed.some(p => new RegExp(p).test(signifier)))
        throw `${signifier} (${k}) not allowed`
      usedWords.push(signifier)
      d[k] = { signifier, ...rest }
      delete dictBase[k]
    }

  for (const [k, { signifier, ...rest }] of Object.entries(dictBase))
    if (typeof signifier == 'string') {
      const n: string = (() => {
        for (let i = 0; i < 1000; i++) {
          const n = signifier
            .replace(/C/g, () => random.choose(cs))
            .replace(/V/g, () => random.choose(vs))
          if (!isAllowed(n) || usedWords.includes(n))
            continue;
          else
            return n;
        }
        throw 'failed: generate word'
      })()
      usedWords.push(n)
      d[k] = { signifier: n, ...rest }
    }
  for (const [k, { signifier, ...rest }] of Object.entries(dictBase))
    if (signifier.hasOwnProperty('alias')) {
      const n = (signifier as any).alias
        .replace(/[A-Z_]+/g, k => d[k.toLowerCase()].signifier)
      //.replace(/-(.)/g, (x, m) => m.toUpperCase())
      d[k] = { signifier: n, ...rest }
    } else if (signifier.hasOwnProperty('affix')) {
      for (let i = 0; i < 1000; i++) {
        const n = (signifier as any).affix
          .replace(/C/g, () => random.choose(cs))
          .replace(/V/g, () => random.choose(vs))
          .replace(/-/, d[(signifier as any).main].signifier)
        console.log(n)
        if (!isAllowed(n)) {
          console.debug(`${k}: '${n}' is not allowed`)
          continue
        } else if (usedWords.includes(n)) {
          console.debug(`${k}: '${n}' is used`)
          continue
        }
        else {
          d[k] = { signifier: n, ...rest }
          break
        }
      }
    }

  console.log('dict generated')

  const dSorted = Object.fromEntries(
    Object.entries(d).sort(([k, v]: any, [k1, v1]: any) =>
      compareWords(v.signifier, v1.signifier)
    )
  )
  console.log('dict sorted')

  return dSorted
})()

export const translate = s =>
  s
    .replace(/'[A-QØS-Z]'/g, it => letters[it.charAt(1).toLowerCase()].name)
    .replace(/(?<![_A-Z])[_A-Z]+(?![_A-Z])/g, it => {
      const k = it.toLowerCase()
      if (dict.hasOwnProperty(k))
        return (dict[k] as any).signifier;
      else
        return it;
    })
//.replace(/[a-zø]/g, it => letters[it].cyrl)

export const ipa = s =>
  s
    .toUpperCase()
    .replace(/[^ A-PS-ZÔÂ]+/g, '')
    .replace(/(?<![A-PS-ZÔÂ])([BCDFGHJ-NPSTVXZÔÂ][IEAOUWÂÔY])(?=[A-PS-ZÔÂ])/g, '$1ꜛ')

    .replace(/(?<=[IEAOUWÂÔY])C(?=[IEAOUWÂÔY])/g, 'ɣ')
    .replace(/H(?=[IY])/g, 'ç')

    .replace(/G/g, 'ŋ')
    .replace(/N/g, 'n')
    .replace(/M/g, 'm')

    .replace(/C/g, 'g')
    .replace(/D/g, 'd')
    .replace(/B/g, 'b')

    .replace(/K/g, 'k')
    .replace(/T/g, 't')
    .replace(/P/g, 'p')

    .replace(/H/g, 'x')
    .replace(/X/g, 'ʃ')
    .replace(/S/g, 's')
    .replace(/F/g, 'f')

    .replace(/J/g, 'ʒ')
    .replace(/Z/g, 'z')
    .replace(/V/g, 'v')

    .replace(/L/g, 'ɾ')

    .replace(/I/g, 'i')
    .replace(/Y/g, 'y')
    .replace(/W/g, 'ɨ')
    .replace(/U/g, 'u')

    .replace(/E/g, 'e')
    .replace(/Ô/g, 'ø')
    .replace(/O/g, 'o')

    .replace(/Â/g, 'ja')
    .replace(/A/g, 'a')
