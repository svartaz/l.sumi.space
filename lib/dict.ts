import Random from "./random";
import { cs, vs, isAllowed } from './phoneme'
import { Dict, dictBase, letters } from "./dict-base";

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

const cvs = cs.flatMap(c => vs.map(v => c + v)).filter(isAllowed)
const cvcs = cvs.flatMap(cv => cs.map(c => cv + c)).filter(isAllowed)
const cvcvs = cvcs.flatMap(cvc => vs.map(v => cvc + v)).filter(isAllowed)

console.log(`CV: ${cvs.length}`);
console.log(`CVC: ${cvcs.length}`);
console.log(`CVCV: ${cvcvs.length}`);

export const dict: Dict = (() => {
  let d: Dict = new Map();
  const random = new Random();
  const usedWords = []

  for (const [k, { signifier, ...rest }] of dictBase.entries())
    if (!/[CV]/.test(signifier)) {
      if (usedWords.includes(signifier))
        throw `${k}: ${signifier} used twice`
      if (!isAllowed(signifier))
        throw `${k}: ${signifier} is not allowed`
      usedWords.push(signifier)
      d.set(k, { signifier, ...rest });
      dictBase.delete(k);
    }

  for (const [k, { signifier, ...rest }] of dictBase.entries()) {
    const w: string = (() => {
      for (let i = 0; i < 1000; i++) {
        const w = signifier
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
    d.set(k, { signifier: w, ...rest });
  }

  return d
})();

export const translate = s => s
  .replace(/'[A-QØS-Z]'/g, it => letters.get(it.charAt(1).toLowerCase()).name)
  .replace(/[_A-Z]+/g, it =>
    dict.get(it.toLowerCase())?.signifier ?? it
  );
