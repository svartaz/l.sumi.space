import Random from '../../lib/random';
import { Page, Section } from '../../components/page';

const hasDup = as =>
  new Set(as).size !== as.length

const consonants = 'g n m c d b k t p x q s f h z v l'.split(' ')
const vowels = 'i y u e ø o a'.split(' ')

const consonants2 = 'kn pn ks ps kl pl'.split(' ')
const vowels2 = 'yi ui ei eu øi oi ai'.split(' ')

const syllables2 = consonants.flatMap(c => vowels.map(v => c + v))
const syllables3 = [
  ...consonants2.flatMap(cc => vowels.map(v => cc + v)),
  ...consonants.flatMap(c => vowels2.map(vv => c + vv)),
]
const syllables4 = consonants2.flatMap(cc => vowels2.map(vv => cc + vv))
const words2_2 = syllables2.flatMap(s => syllables2.map(s1 => s + s1))

const dict = {
  i: [2, 'aは話者'],
  thou: [2, 'aは聽者'],
  he: [2, 'aは話者でも聽者でもない何か'],

  what: [2, 'aは何か'],

  from: [2, '格詞 :から'],
  to: [2, '格詞 :へ'],
  via: [2, '格詞 :を介して'],
  object: [2, '格詞 :を'],

  have: [4, 'aはbを有す'],
  cause: [4, 'aはbを起こす'],
  not: [4, 'aはbに矛盾する'],

  see: [4, 'aはbを見る'],
  hear: [4, 'aはbを聞く'],

  zero: [3, '數詞 :0'],
  one: [3, '數詞 :1'],
  two: [3, '數詞 :2'],
  three: [3, '數詞 :3'],
  four: [3, '數詞 :4'],
  five: [3, '數詞 :5'],
  six: [3, '數詞 :6'],
  seven: [3, '數詞 :7'],
  eight: [3, '數詞 :8'],
  nine: [3, '數詞 :9'],

  more: [3, '數詞 :aより多い'],
  every: [3, '數詞 :全'],
}

export default () => {
  let dictFixed = null;
  for (let seed = 1; seed < 1000000; seed++) {
    const sss = {
      2: [...syllables2],
      3: [...syllables3],
      4: [...syllables4, ...words2_2],
    }

    const random = new Random(seed)

    let d = Object.fromEntries(
      Object.entries(dict).map(([k, [n, mean]]) => {
        const word = random.pop(sss[n])
        return [k, [word, mean]]
      })
    )

    if (
      hasDup('zero one two three four five six seven eight nine'.split(' ').map(k => d[k][0].charAt(0)))
      || hasDup('i thou he'.split(' ').map(k => d[k][0].charAt(0)))
    )
      continue

    console.log(`seed ${seed} succeeded`)
    dictFixed = d
    break
  }

  if (dictFixed == null)
    throw ('dict not defined')

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
            <th>無聲破擦</th>
            <td></td>
            <td>q [ts]</td>
            <td></td>
          </tr>
          <tr>
            <th>無聲摩擦</th>
            <td>x</td>
            <td>s</td>
            <td>f</td>
          </tr>
          <tr>
            <th>有聲摩擦</th>
            <td>h [ɣ]</td>
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
            <td>y</td>
            <td></td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>e</td>
            <td>ø</td>
            <td></td>
            <td>o</td>
          </tr>

          <tr>
            <th>低</th>
            <td></td>
            <td></td>
            <td>a</td>
            <td></td>
          </tr>
        </table>
      </div>
    </Section>

    <Section title='音節'>
      <table>
        <tr>
          <td>{syllables2.join(' ')}</td>
          <td>{syllables2.length}</td>
        </tr>
        <tr>
          <td>{syllables3.join(' ')}</td>
          <td>{syllables3.length}</td>
        </tr>
        <tr>
          <td>{syllables4.join(' ')}</td>
          <td>{syllables4.length}</td>
        </tr>
      </table>
    </Section>

    <Section title='辭書'>
      <table>
        {Object.entries(dictFixed).map(([k, [word, mean]]: any, i) =>
          <tr key={i}>
            <th>{k}</th>
            <td>{word}</td>
            <td>{mean}</td>
          </tr>
        )}
      </table>
    </Section>
  </Page>
}