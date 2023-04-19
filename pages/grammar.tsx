import { Section } from '../components/section';
import { dict, notAllowed, translate } from '../lib/dict';
import { Page } from '../components/page';
import style from './style.module.sass'
import { cs, vs } from '../lib/dict-base';

console.log(translate(`I BY THOU _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z'])(?=[^_A-Z'])|(?<=[^_A-Z'])(?=[_A-Z'])/g)
    .map(it => /[_A-Z']+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <tr>
    <th style={{ textAlign: 'center' }}>型</th>
    <th>{(dict._language as any).signifier}</th>
    <th>譯</th>
  </tr>
  {
    props.data.map(([type, eng, l]) =>
      <tr>
        <td>{type}</td>
        <td><TranslateRuby datum={l} /></td>
        <td>{eng}</td>
      </tr>
    )
  }
</table>

export default () => <Page title='文法'>
  <Section title='音韻'>
    <ul>
      <li>字素と音素は一致する.</li>
      <li>以下の表で[…]は國際音聲記號である.</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>硬口蓋</th>
          <th>齒</th>
          <th>脣</th>
        </tr>
      </thead>
      <tr>
        <th>鼻</th>
        <td>g [ŋ]</td>
        <td>n</td>
        <td>m</td>
      </tr>
      <tr>
        <th>有聲破裂</th>
        <td>c [g,ɣ]</td>
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
        <th>接近</th>
        <td></td>
        <td>l</td>
        <td></td>
      </tr>
    </table>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>非圓脣前舌</th>
          <th>圓脣前舌</th>
          <th>中舌<br />非圓脣後舌</th>
          <th>圓脣後舌</th>
        </tr>
      </thead>
      <tr>
        <th>狹</th>
        <td>i</td>
        <td>y [y,ju]</td>
        <td>w [ɨ,ɯ]</td>
        <td>u</td>
      </tr>

      <tr>
        <th></th>
        <td>e</td>
        <td>ô [ø,jo]</td>
        <td></td>
        <td>o</td>
      </tr>

      <tr>
        <th>廣</th>
        <td>â [ja]</td>
        <td></td>
        <td>a</td>
        <td></td>
      </tr>
    </table>

    <ul>
      <li>音節はCVである.</li>
      <li>詞は(CV)+である.</li>
      <li>以下の音節は無い.</li>
    </ul>

    <table className={style.cv}>
      <tr>
        <th></th>
        {
          vs.map(v => <th>{v}</th>)
        }
      </tr>
      {
        cs.map(c => <tr>
          <th>{c}</th>{
            vs.map(v =>
              notAllowed.some(p => new RegExp(p).test(c + v)) ?
                <td style={{ backgroundColor: 'lightgray' }}><del>{c + v}</del></td>
                : <td>{c + v}</td>
            )
          }</tr>)
      }
    </table>

    <ul>
      <li>詞頭の音節は低く殘りは高い.</li>
    </ul>
  </Section>

  <Section title='詞順'>
    <ul>
      <li><dfn>文</dfn>は必ず<dfn>關係</dfn> (言はゆる動詞) を持つ.</li>
      <li>關係は<dfn>項</dfn> (言はゆる名詞) の關係を示す.</li>
      <li>基本詞順はSOV.</li>
    </ul>
    <Sample data={[
      [
        '項',
        'われ',
        'I',
      ],
      [
        '項',
        'なれ',
        'THOU',
      ],
      [
        '關係',
        'SはOを見る',
        'DO SEE',
      ],
      [
        '文',
        'われはなれを見る',
        'I THOU DO SEE',
      ],
    ]} />

    <ul>
      <li>SVOとVOSも可能 (Vの直後はOとなる).</li>
    </ul>
    <Sample data={[
      [
        '文',
        'われは見る, なれを',
        'I DO SEE THOU',
      ],
      [
        '文',
        '見る, なれをわれは',
        'DO SEE THOU I',
      ],
    ]} />

    <ul>
      <li>SとOは省略可能.</li>
    </ul>
    <Sample data={[
      [
        '文',
        '見る',
        'DO SEE',
      ],
      [
        '文',
        'われは見る',
        'I DO SEE',
      ],
      [
        '文',
        'なれを見る',
        'DO SEE THOU',
      ],
    ]} />
  </Section>

  <Section title='項化'>
    <ul>
      <li>關係から ‘{translate('DO')}’ を消すとそのSに相當する項を得る.</li>
    </ul>
    <Sample data={[
      [
        '關係',
        'Sは人である',
        'DO PERSON',
      ],
      [
        '項',
        '人',
        'PERSON',
      ],
    ]} />
  </Section>

  <Section title='助項'>
    <ul>
      <li><dfn>基本助項</dfn>は詞順の變更を許す.</li>
    </ul>
    <Sample data={[
      [
        '助項',
        '(主)',
        'DER',
      ],
      [
        '助項',
        '(客)',
        'DEN',
      ],
      [
        '文',
        'なれをわれは見る',
        'THOU DEN I DO SEE',
      ],
      [
        '文',
        'われは見るなれを',
        'DO SEE I DER THOU',
      ],
    ]} />

    <ul>
      <li>基本助項でない助項は<dfn>應用助項</dfn>であり, 文に項を附加する.</li>
    </ul>
    <Sample data={[
      [
        '關係',
        'SはOを與へる',
        'DO GIVE',
      ],
      [
        '關係',
        'Sは彼である',
        'DO HE',
      ],
      [
        '助項',
        '(が關聯して)',
        'ABOUT',
      ],
      [
        '文',
        'われは彼をなれに關して與へる',
        'I HE THOU ABOUT DO GIVE',
      ],
    ]} />

    <ul>
      <li>‘{translate('AS')}’ は項を助項に變へる.</li>
    </ul>
    <Sample data={[
      [
        '文',
        'われは彼をなれに (=なれが受けて) 與へる',
        'I HE THOU AS TAKE DO GIVE',
      ],
    ]} />
  </Section>

  <Section title='數'>
    <Sample data={
      'ZERO ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE'.split(' ').map((k, i) => ['數', i, k])
        .concat([
          [
            '數',
            'E',
            'EXP',
          ],
        ])

    } />
  </Section>

  <Section title='量'>
    <ul>
      <li><dfn>量</dfn>は項の前に來る數であり項が意味するものの數量を示す.</li>
    </ul>
    <Sample data={[
      [
        '項',
        '0人',
        'ZERO PERSON',
      ],
      [
        '項',
        '1人以上',
        'ONE AT_MOST PERSON',
      ],
      [
        '項',
        '各人',
        'MAX PERSON',
      ],
    ]} />
  </Section>

  <Section title='極'>
    <ul>
      <li><dfn>極</dfn>は項が意味するものの程度を示す.</li>
      <li>それぞれの項は暗黙的な極を持つ.</li>
      <li>‘{translate('_DEGREE')}’ は直後の數を極に變へる.</li>
    </ul>
    <Sample data={[
      [
        '數',
        '主觀的に通常の數',
        'NORMAL',
      ],
      [
        '數',
        '主觀的に通常を超える數',
        'HIGH',
      ],
      [
        '關係',
        'Sは長い',
        'DO LONG',
      ],
      [
        '關係',
        'Sは長い',
        'DO _DEGREE HIGH LONG',
      ],
      [
        '關係',
        'Sは通常程度に長い',
        'DO _DEGREE NORMAL LONG',
      ],
      [
        '關係',
        'Sは短い (低程度に長い)',
        'DO _DEGREE LOW LONG',
      ],
      [
        '關係',
        'Sは長くない',
        'DO _DEGREE LESS NORMAL LONG',
      ],
      [
        '項',
        '長くないもの',
        '_DEGREE LESS NORMAL LONG',
      ],
    ]}></Sample>
  </Section>

  <Section title='疑問文'>
    <ul>
      <li>‘{translate('WHAT')}’ は<dfn>項疑問文</dfn>を作る.</li>
    </ul>
    <Sample data={[
      [
        '文',
        'なれは何を恐る?',
        'THOU WHAT DO FEAR',
      ],
      [
        '文',
        '(返答) 時を.',
        'TIME DEN',
      ],
    ]}></Sample>

    <ul>
      <li>‘{translate('HOW_MUCH')}’ は<dfn>數疑問文</dfn>を作る.</li>
    </ul>
    <Sample data={[
      [
        '文',
        'なれは人か?',
        'THOU DO _DEGREE HOW_MUCH PERSON',
      ],
      [
        '文',
        '— 人である.',
        'DO PERSON',
      ],
      [
        '文',
        '— 人でない (人-度0である).',
        'DO _DEGREE ZERO PERSON',
      ],
    ]} />
  </Section>

  <Section title='節'>
    <ul>
      <li>‘{translate('THAT')}’ は文を項に變へ, それは<dfn>節</dfn>である.</li>
      <li>節の中で關係は最後にある.</li>
    </ul>
    <Sample data={[
      [
        '項',
        'われがなれを見ること',
        'THAT I THOU DO SEE',
      ],
      [
        '文',
        'われはなれを見ることを好む',
        'I DO LIKE THAT I THOU DO SEE',
      ],
    ]} />

    <ul>
      <li>項疑問文はその答へとなる項でもある.</li>
      <li>ただし疑問部は文頭に來る.</li>
    </ul>
    <Sample data={[
      [
        '文 | 項',
        'なれは何を知る? | なれが何を知るもの',
        'WHAT DEN THOU DO KNOW',
      ],
      [
        '關係',
        'SはOを恐れる',
        'FEAR',
      ],
      [
        '項',
        'われはなれが知るものを恐れる',
        'I DO FEAR WHAT DEN THOU DO KNOW',
      ],
    ]} />
  </Section>

  <Section title='引用'>
    <ul>
      <li><dfn>引用</dfn>は字列を項に變へる.</li>
    </ul>
    <Sample data={[
      [
        '關係',
        'Sは字列 ‘sumi’ であるOを意味する',
        'DO _QUOTE sumi _QUOTE',
      ],
      [
        '文',
        '‘sumi’ はわれを意味する',
        'DO _QUOTE sumi _QUOTE I',
      ],
    ]} />
  </Section>
</Page >
