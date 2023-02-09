import Random from '../../../lib/random';
import { Page, Section } from '../../../components/page';

const consonants = 'g n m c d b k t p x s f h z v l'.split(' ')
const vowels = 'i ü u ë ö e o ä a'.split(' ')
// æœ

const consonants2 = 'nc nd nb nk nt np ns nz nl kn pn ks ps kl pl lc ld lb lk lt lp ls lz ln'.split(' ')
const vowels2 = 'üi ui ei eu öi oi ai'.split(' ')

const forbidden = /^[nl][cdbktpsz]|^nl|^ln/

const syllables2 = consonants.flatMap(c => vowels.map(v => c + v))
const syllables3 = [
  ...consonants2.flatMap(cc => vowels.map(v => cc + v)),
  ...consonants.flatMap(c => vowels2.map(vv => c + vv)),
]
const signifierss = {
  2: syllables2,
  3: syllables3,
  4: consonants2.flatMap(cc => vowels2.map(vv => cc + vv)),
  '2_2': syllables2.flatMap(s => syllables2.map(s1 => s + s1)),
  5: [
    ...syllables3.flatMap(s => syllables2.map(s1 => s + s1)),
    ...syllables2.flatMap(s => syllables3.map(s1 => s + s1)),
  ],
}

import dictPre from './dict'
let dict = {};
const categories = [...new Set(Object.values(dictPre).map(v => v[1]))]
const random = new Random();
(() => {
  const usedWords = []
  for (const category of categories) {
    const usedInitials = []

    for (const [k, [x, c, klass, mean]] of Object.entries(dictPre)) {
      if (c == category) {
        for (let i = 0; ; i++) {
          console.log(`${category} ${x} ${i}`)

          const w = random.choose(signifierss[x])

          if (forbidden.test(w) || category != '' && usedInitials.includes(w.charAt(0)) || usedWords.includes(w))
            continue

          usedInitials.push(w.charAt(0))
          usedWords.push(w)
          dict[k] = [w, klass, mean]
          break
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
            <td>h [ʔ, ʁ, ∅]</td>
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
            <td>i</td>
            <td>ü</td>
            <td></td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>ë</td>
            <td>ö </td>
            <td>e</td>
            <td>o</td>
          </tr>

          <tr>
            <th>低</th>
            <td>ä</td>
            <td></td>
            <td>a</td>
            <td></td>
          </tr>
        </table>
      </div>
    </Section>

    <Section title='文法'>
      <pre>
        VP       ← verb | verb_'n' (preposition verb)* end-verb?<br />
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