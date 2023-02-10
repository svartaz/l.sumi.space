import Random from '../../../lib/random';
import { Page, Section } from '../../../components/page';

const cs = 'g n m c d b k t p x s f h z v l'.split(' ')
const vs = 'ï ü i u e ö o a'.split(' ')

const ccs = 'nc nd nb nk nt np ns nz nl kn ks kl pn ps pl sn sk st sp sl lc ld lb lk lt lp ls lz ln'.split(' ')

const allowed = x => !/^[nl][cdbktpsz]|^nl|^ln/.test(x)

const cvs = cs.flatMap(c => vs.map(v => c + v)).filter(allowed)
const ccvs = ccs.flatMap(cc => vs.map(v => cc + v)).filter(allowed)
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
}

for (const k in signifierss)
  console.log(k + ': ' + signifierss[k].length)

import dictPre from './dict'
let dict = {};
(() => {
  const categories = [...new Set(Object.values(dictPre).map(v => v[1]))]
  const random = new Random();

  const usedWords = []

  for (const [k, [x, category, klass, mean]] of Object.entries(dictPre))
    if (typeof x == 'string') {
      usedWords.push(x)
      dict[k] = [x, klass, mean]
    }

  for (const category of categories) {
    const usedInitials = []

    for (const [k, [x, c, klass, mean]] of Object.entries(dictPre)) {
      if (c == category) {
        for (let i = 0; ; i++) {
          console.log(`${category} ${x} ${i}`)

          if ('random' in x) {
            const w = random.choose(signifierss[x.random])
            const initial = w.match(new RegExp(`^[${cs.join('')}]+`))[0]

            if (category != '' && usedInitials.includes(initial) || usedWords.includes(w))
              continue

            usedInitials.push(initial)
            usedWords.push(w)
            dict[k] = [w, klass, mean]
            break
          } else {
            // FIXME
          }
        }
      }
    }
  }
})()
console.log('dict generated')

const title = 'toy language'
export default () => {
  const translate = s =>
    Object.entries(dict).reduce((acc, [k, [word]]) =>
      acc.replace(new RegExp(`(?<![_A-Z])${k.toUpperCase()}(?![_A-Z])`, 'g'), word)
      , s)

  return <Page title='toy language'>
    <Section title='音韻'>
      <div className='tables'>
        <table>
          <tr className='v-parent'>
            <th></th>
            <th>舌背</th>
            <th>舌端</th>
            <th>脣</th>
          </tr>
          <tr>
            <th>鼻</th>
            <td>g [ŋ]</td>
            <td>n</td>
            <td>m</td>
          </tr>
          <tr>
            <th>有聲破裂</th>
            <td>c [g]</td>
            <td>d</td>
            <td>b</td>
          </tr>
          <tr>
            <th>無聲破裂</th>
            <td>k</td>
            <td>t</td>
            <td>p</td>
          </tr>
          <tr>
            <th>無聲摩擦</th>
            <td>x</td>
            <td>s</td>
            <td>f</td>
          </tr>
          <tr>
            <th>有聲摩擦</th>
            <td>h [ʁ, ʔ, ∅]</td>
            <td>z</td>
            <td>v</td>
          </tr>
          <tr>
            <th>有聲摩擦</th>
            <td></td>
            <td>l</td>
            <td></td>
          </tr>
        </table>

        <table>
          <tr className='v-parent'>
            <th></th>
            <th>前舌非円唇</th>
            <th>前舌円唇</th>
            <th></th>
            <th>後舌</th>
          </tr>
          <tr>
            <th>高</th>
            <td>ï [i]</td>
            <td>ü [y]</td>
            <td>i [ɨ]</td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>e</td>
            <td>ö [ø]</td>
            <td></td>
            <td>o</td>
          </tr>

          <tr>
            <th>低</th>
            <td></td>
            <td></td>
            <td>a [a~ə]</td>
            <td></td>
          </tr>
        </table>
      </div>
    </Section>

    <Section title='文法'>
      <pre>
        VP       ← verb | verb '{translate('VERB')}' (preposition verb)* ({translate('END VERB')})?<br />
        sentence ← VP (preposition VP)*
      </pre>
    </Section>

    <Section title='例'>
      <table>
        <tr>
          <td>i see an animal.</td>
          <td>{translate('I (SEE VERB (OBJECT ANIMAL))')}</td>
        </tr>
        <tr>
          <td>i see an black animal.</td>
          <td>{translate('I (SEE VERB (OBJECT ANIMAL ZERO-BRIGHT))')}</td>
        </tr>
        <tr>
          <td>i saw an animal.</td>
          <td>{translate('I (SEE VERB (OBJECT ANIMAL) (ADVERB BEFORE))')}</td>
        </tr>
        <tr>
          <td>i see an animal which likes him.</td>
          <td>{translate('I (SEE VERB (OBJECT ANIMAL (GLAD VERB (OBJECT HE))))')}</td>
        </tr>
      </table>

    </Section>

    <Section title='辭書'>
      <table>
        <tr>
          <th></th>
          <th>音</th>
          <th>類</th>
          <th>義</th>
        </tr>
        {Object.entries(dict).map(([k, [word, klass, mean]]: any, i) =>
          <tr key={i}>
            <th>{k}</th>
            <td>{word}</td>
            <td>{klass}</td>
            <td>{mean}</td>
          </tr>
        )}
      </table>
    </Section>
  </Page>
}