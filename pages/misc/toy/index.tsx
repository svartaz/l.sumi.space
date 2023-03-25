import { Page, Section } from '../../../components/page';
import { dict, notAllowed, translate } from './dict';

const Sample = props => <table>{
  props.data.map(([klass, ja, l]) => <tr>
    <td>{klass}</td>
    <td>{ja}</td>
    <td>{l}</td>
    <td>{translate(l)}</td>
  </tr>)
}</table>

const title = 'toy language'
export default () => <Page title='toy language'>
  <Section title='字素と音素'>
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
          <td></td>
          <td>z</td>
          <td>v</td>
        </tr>
        <tr>
          <th>彈</th>
          <td></td>
          <td>r [ɾ,l]</td>
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
          <td>w</td>
          <td>u</td>
        </tr>

        <tr>
          <th></th>
          <td>e</td>
          <td>ö</td>
          <td>(ǝ)</td>
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

    許容しない字列
    <ul>{
      notAllowed.map(x => <li>{x}</li>)
    }</ul>
  </Section>

  <Section title='文法'>
    <Sample data={[
      [
        '項',
        '我',
        'I',
      ],
      [
        '項',
        '汝',
        'THOU',
      ],
      [
        '述',
        'AはBを與ふ',
        'GIVE-_PREDICATE',
      ],
      [
        '文',
        '我は與ふ',
        'I [DER] GIVE-_PREDICATE',
      ],
      [
        '文',
        '我は汝に與ふ',
        'I [DER] THOU AS TAKE GIVE-_PREDICATE',
      ],
      [
        '述',
        'Aは眞である',
        'TRUE-_PREDICATE',
      ],
      [
        '項',
        '眞實',
        'TRUE',
      ],
      [
        '文',
        '我は汝に眞實を與ふ',
        'I [DER] TRUE [DEN] THOU AS TAKE GIVE-_PREDICATE',
      ],

      [
        '述',
        'AはBは求む',
        'WANT-_PREDICATE',
      ],
      [
        '文',
        '我は汝の求む物を與ふ',
        'I [DER] (WHAT DEN THOU [DER] WANT-_PREDICATE) [DEN] GIVE-_PREDICATE',
      ],
      [
        '文',
        '我は汝の求む眞實を與ふ',
        'I [DER] TRUE AND (WHAT DEN THOU [DER] WANT-_PREDICATE) DEN GIVE-_PREDICATE',
      ],
      [
        '文',
        '我は與へたり',
        'I [DER] _TENSE NEGATIVE GIVE-_PREDICATE',
      ],
      [
        '文',
        '我は與へず',
        'I [DER] SO_MUCH ZERO GIVE-_PREDICATE',
      ],
    ]} />
  </Section>

  <Section title='辭書'>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>音</th>
        <th>類</th>
        <th>義</th>
      </tr>
      {Object.entries(dict).map(([k, [word, klass, mean]]: any, i) =>
        <tr key={i}>
          <th>{i}</th>
          <th>{k.toUpperCase()}</th>
          <td>{word}</td>
          <td>{klass}</td>
          <td>{mean}</td>
        </tr>
      )}
    </table>
  </Section>
</Page>