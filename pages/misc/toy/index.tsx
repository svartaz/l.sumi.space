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
          <th>反舌</th>
          <th>舌端</th>
          <th>脣</th>
        </tr>
        <tr>
          <th>鼻</th>
          <td>g [ŋ]</td>
          <td></td>
          <td>n</td>
          <td>m</td>
        </tr>
        <tr>
          <th>有聲破裂</th>
          <td>c [g]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>無聲破裂</th>
          <td>q</td>
          <td>k</td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>無聲摩擦</th>
          <td>h</td>
          <td>x</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>有聲摩擦</th>
          <td></td>
          <td>j</td>
          <td>z</td>
          <td>v</td>
        </tr>
        <tr>
          <th>彈</th>
          <td></td>
          <td></td>
          <td>r</td>
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
    <p>述詞は格を支配する。</p>
    <table>
      <tr>
        <th>出格 G</th>
        <td>…より</td>
      </tr>
      <tr>
        <th>能格 E</th>
        <td>…を</td>
      </tr>
      <tr>
        <th>入各 D</th>
        <td>…へ</td>
      </tr>
    </table>

    <Sample data={[
      [
        '述詞',
        'GよりEをDは得る',
        'GIVE',
      ],
      [
        '項句',
        '與へる者',
        'GIVE-GET_G',
      ],
      [
        '項句',
        '與へらる物',
        'GIVE-GET_E',
      ],
      [
        '項句',
        '得る者',
        'GIVE-GET_D',
      ],

      [
        '述詞',
        'Gは我、Eはこの發話、Dは汝である',
        'SELF',
      ],
      [
        '項句',
        '我',
        'SELF-GET_G',
      ],
      [
        '飾詞',
        '我より',
        'SELF-GET_G SET_G'
      ],
      [
        '飾詞',
        '我より與ふ',
        'SELF-GET_G SET_G GIVE'
      ],

      [
        '項詞',
        '汝',
        'SELF-GET_D'
      ],
      [
        '項詞',
        '汝へ',
        'SELF-GET_D SET_D'
      ],
      [
        '文',
        '我より汝へ與ふ',
        'SELF-GET_G SET_G SELF-GET_D SET_D GIVE',
      ],
      [
        '述詞',
        'Eは眞である',
        'TRUE',
      ],
      [
        '項句',
        '眞實',
        'TRUE-GET_E',
      ],
      [
        '飾句',
        '眞實を',
        'TRUE-GET_E SET_E',
      ],
      [
        '文',
        '我は汝に眞實を與ふ',
        'SELF-GET_G SET_G SELF-GET_D SET_D TRUE-GET_E SET_E GIVE',
      ],

      [
        '述詞',
        'EをDは求む',
        'WANT',
      ], [
        '文',
        '我は汝の求む物を與ふ',
        '(SELF-GET_G SET_G) (SELF-GET_D SET_D) (THAT WHAT SET_E SELF-GET_D SET_D WANT) SET_E GIVE',
      ],

      [
        '文',
        '我は求む',
        '(SELF-GET_G SET_D) WANT',
      ],
      [
        '文',
        '我は求めたり',
        '(SELF-GET_G SET_D) WANT SET_G (NOW-GET_E SET_D)? BEFORE',
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