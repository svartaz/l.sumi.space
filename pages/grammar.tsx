import { Section } from '../components/section';
import { dict, translate } from '../lib/dict';
import { Page } from '../components/page';
import style from './style.module.sass'
import { cs, isAllowed, vs } from '../lib/phoneme';

console.log(translate(`I BY THOU _LANGUAGE DO _FUTURE KNOW`))

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
  現在 統べての詞を亂擇生成して居, 内容更新の度に變化します

  <Section title='音と字'>
    <div className='item'>
      子音: 以下に示すもの
      <table>
        <thead>
          <tr>
            <th></th>
            <th>軟口蓋</th>
            <th>硬口蓋</th>
            <th>齒</th>
            <th>脣</th>
          </tr>
        </thead>
        <tr>
          <th>鼻</th>
          <td>g [ŋ]</td>
          <td></td>
          <td>n</td>
          <td>m</td>
        </tr>
        <tr>
          <th>有聲破裂</th>
          <td>c [g,ɣ]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>無聲破裂</th>
          <td>k</td>
          <td></td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>無聲摩擦</th>
          <td>x [h,x,ç]</td>
          <td>š [ɕ]</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>有聲摩擦</th>
          <td></td>
          <td>j [ʑ]</td>
          <td>z</td>
          <td>v [v,β,ʋ]</td>
        </tr>
        <tr>
          <th>流</th>
          <td></td>
          <td></td>
          <td>r [l,ɻ,ɾ,r]</td>
          <td></td>
        </tr>
      </table>
    </div>

    <div className='item'>
      母音: 以下に示すもの
      <table>
        <thead>
          <tr>
            <th></th>
            <th>非圓脣前舌</th>
            <th>圓脣前舌</th>
            <th>中舌</th>
            <th>圓脣後舌</th>
          </tr>
        </thead>
        <tr>
          <th>狹</th>
          <td>i</td>
          <td>y [y,ju]</td>
          <td>w [ɨ]</td>
          <td>u</td>
        </tr>
        <tr>
          <th></th>
          <td>e</td>
          <td>ø [ø,jo]</td>
          <td></td>
          <td>o</td>
        </tr>
        <tr>
          <th>廣</th>
          <td></td>
          <td></td>
          <td>a</td>
          <td></td>
        </tr>
      </table>
    </div>

    <div className='item'>
      音節: 子音 母音
    </div>

    <div className='item'>
      軟音: i | y | e | ø
    </div>

    <div className='item'>
      (硬口蓋音 軟音) は存在しない
    </div>

    <div className='item'>
      詞頭の音節は低く殘りは高い
    </div>
  </Section>

  <Section title='文'>
    <svg height={254} width={504} style={{ margin: '0 auto' }}>
      <g transform='translate(1,1)'>
        <rect x={0} y={0} width={50} height={50} stroke='black' fill='none' />
        <text x={25} y={25} textAnchor='middle' dominantBaseline='middle'>數</text>

        <rect x={50} y={0} width={50} height={50} stroke='black' fill='none' />
        <text x={75} y={25} textAnchor='middle' dominantBaseline='middle'>格標識</text>

        <rect x={100} y={0} width={100} height={50} stroke='black' fill='none' />
        <text x={150} y={25} textAnchor='middle' dominantBaseline='middle'>文</text>

        <path d='M 200 25 l 25 0 l 0 75 l 25 0' stroke='black' fill='none' />

        <text x={100} y={100} textAnchor='middle' dominantBaseline='middle'>⋮</text>
        <path d='M 200 100 l 50 0' stroke='black' fill='none' />

        <rect x={0} y={150} width={50} height={50} stroke='black' fill='none' />
        <text x={25} y={175} textAnchor='middle' dominantBaseline='middle'>數</text>

        <rect x={50} y={150} width={50} height={50} stroke='black' fill='none' />
        <text x={75} y={175} textAnchor='middle' dominantBaseline='middle'>格標識</text>

        <rect x={100} y={150} width={100} height={50} stroke='black' fill='none' />
        <text x={150} y={175} textAnchor='middle' dominantBaseline='middle'>文</text>

        <path d='M 200 175 l 25 0 l 0 -75 l 25 0' stroke='black' fill='none' />


        <rect x={250} y={75} width={100} height={50} stroke='black' fill='none' />
        <text x={300} y={100} textAnchor='middle' dominantBaseline='middle'>助關係*</text>

        <rect x={350} y={75} width={50} height={50} stroke='black' fill='none' />
        <text x={375} y={100} textAnchor='middle' dominantBaseline='middle'>極</text>

        <rect x={400} y={75} width={100} height={50} stroke='black' fill='none' />
        <text x={450} y={100} textAnchor='middle' dominantBaseline='middle'>關係</text>
      </g>
    </svg>

    <div className='item'>
      文は1個の關係を持つ.
      <hr />
      <small>
        terminology. 關係とは言はゆる動詞 (句) の事である.
        普通は ‘動詞 verb’ と呼ぶが, ここでは詞 wordと句 phraseを區別しない方法を求めた.
        次の候補は ‘述語 predicate’ だが, ‘語 language’ と紛らはしい.
        ここではそれに近しい ‘關係’ とする.
        verbとそのまま書く方法も有り實際そのために本文全體を英語で書く事も檢討したが, やはり日本語に拘る事とする.
        能ふ限り普通のことば遣ひをしたいが, 已む無し.
      </small>
    </div>

    <div className='item'>
      文: 文節* 關係
    </div>

    <div className='item'>
      文節: 格標識 文
    </div>

    <Sample data={[
      [
        '文',
        '(何かが) (何かを) 見る',
        'SEE',
      ],
      [
        '文',
        '我れは見る',
        'DER I SEE',
      ],
      [
        '文',
        '我れ汝れをは見る',
        'DER I DEN THOU SEE',
      ],
    ]} />
  </Section>

  <Section title='文節'>
    <div className='item'>
      文節はその文の ‹{translate('WHAT')}› を滿たす對象を意味する
    </div>
    <div className='item'>
      文節中の ‹{translate('DER WHAT')}› を省略しても良い
    </div>

    <Sample data={[
      [
        '關係',
        'DERは我れである',
        'I',
      ],
      [
        '文節',
        '我れが',
        'DER (DER WHAT) I',
      ],
      [
        '文節',
        '我れを',
        'DEN (DER WHAT) I',
      ],
      [
        '關係',
        'DERはDENを持つ',
        'HAVE',
      ],
      [
        '文節',
        '(何かを) 持つものを',
        'DEN (DER WHAT) HAVE',
      ],
      [
        '文節',
        'それを持つものを',
        'DEN (DER WHAT) DEN HE HAVE',
      ],
      [
        '文',
        'それを持つものを見る',
        'DEN (DER WHAT) DEN HE HAVE SEE',
      ],
    ]} />
  </Section>

  <Section title='格標識'>
    <div className='item'>
      ‹{translate('AS')}› は關係から格標識を作る
    </div>
    <Sample data={[

      [
        '虛詞',
        '(格標識を作る)',
        'AS',
      ],
      [
        '關係',
        'SはOを引き起こす',
        'CAUSE',
      ],
      [
        '格標識',
        'を原因として, に因り',
        'AS CAUSE',
      ],
      [
        '文',
        '汝れに因って我れは知る',
        'AS CAUSE THOU DER I KNOW',
      ],
    ]} />
  </Section>

  <Section title='數'>
    <div className='item'>
      數は數詞を算用數字と同樣に列べて作る
    </div>
    <div className='item'>
      ‹{translate('EXP')}› は小數や大きな數を作る
    </div>

    <Sample data={
      'ZERO ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE'.split(' ').map((k, i) => ['數', i, k])
        .concat([
          [
            '數',
            'E',
            'EXP',
          ],
          [
            '數',
            '321',
            'THREE TWO ONE',
          ],
          [
            '數',
            '3.21',
            'THREE TWO ONE EXP',
          ],
          [
            '數',
            '3.21E3 (=3210)',
            'THREE TWO ONE ZERO EXP THREE',
          ],
        ])
    } />

    <div className='item'>
      格標識の前の數は文節が指す對象の量を示す
    </div>
    <Sample data={[
      [
        '文節',
        '0人が',
        'ZERO DER PERSON',
      ],
      [
        '文節',
        '1人以上が',
        'ONE AT_MOST DER PERSON',
      ],
      [
        '文節',
        '各人が',
        'MAX DER PERSON',
      ],
    ]} />
  </Section>

  <Section title='極'>
    <div className='item'>
      極は關係の程度を示す
    </div>
    <div className='item'>
      關係は暗黙的な極を持つ
    </div>
    <div className='item'>
      ‹{translate('_DEGREE')}› は數から極を作る
    </div>
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
        'LONG',
      ],
      [
        '關係',
        'Sは長い',
        '_DEGREE HIGH LONG',
      ],
      [
        '關係',
        'Sは通常程度に長い',
        '_DEGREE NORMAL LONG',
      ],
      [
        '關係',
        'Sは短い (低程度に長い)',
        '_DEGREE LOW LONG',
      ],
      [
        '關係',
        'Sは長くない',
        '_DEGREE LESS NORMAL LONG',
      ],
      [
        '文節',
        '長くないものを',
        'DEN _DEGREE LESS NORMAL LONG',
      ],
    ]} />
  </Section>

  <Section title='疑問'>
    <div className='item'>
      ‹{translate('_ASK WHAT')}› は關係を問ふ
    </div>
    <Sample data={[
      [
        '文',
        '何を恐る?',
        'DEN _ASK WHAT FEAR',
      ],
      [
        '文',
        '— 時を',
        'TIME',
      ],
      [
        '文',
        '我れは汝れに何である?',
        'DEN I DER THOU _ASK WHAT',
      ],
      [
        '文',
        '— 好む.',
        'DEN THOU GLAD',
      ],
    ]}></Sample>

    <div className='item'>
      ‹{translate('_ASK HOW_MUCH')}› は數を問ふ
    </div>
    <Sample data={[
      [
        '文',
        'なれは (どの程度) 人か?',
        'DER THOU _DEGREE _ASK HOW_MUCH PERSON',
      ],
      [
        '文',
        '— 人である.',
        'NORMAL',
      ],
      [
        '文',
        '— 人でない (人-度0である).',
        'ZERO',
      ],
    ]} />
  </Section>

  <Section title='節'>
    <ul>
      <li>‹{translate('THAT')}› は文を項に變へ, それは<dfn>節</dfn>である.</li>
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
        'Sは字列 ‹sumi› であるOを意味する',
        'DO _QUOTE sumi _QUOTE',
      ],
      [
        '文',
        '‹sumi› はわれを意味する',
        'DO _QUOTE sumi _QUOTE I',
      ],
    ]} />
  </Section>

  <Section title='接續'>
    <ul>
      <li><dfn>接續</dfn>は文と文の關係を示す.</li>
      <li>‹{translate('THAT')} 文<sub>0</sub> {translate('THAT')} 文<sub>1</sub> {translate('DO')} 項› ≡ ‹文<sub>0</sub> {translate('_CONNECT')} 項 文<sub>1</sub>›</li>
    </ul>
    <Sample data={[
      [
        '述',
        'SはO以前である',
        'DO BEFORE',
      ],
      [
        '文',
        '彼が死ぬ前に彼は幸福である',
        'HE DO HAPPY _CONNECT BEFORE HE DO END LIVE',
      ],
    ]} />
  </Section>

</Page >
