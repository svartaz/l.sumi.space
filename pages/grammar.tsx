import { Section } from '../components/section';
import { dict, translate } from '../lib/dict';
import { Page } from '../components/page';
import { cs, isAllowed, vs } from '../lib/phoneme';

console.log(translate(`DER I DO CAUSE DEN THAT DER THOU DEN _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z'])(?=[^_A-Z'])|(?<=[^_A-Z'])(?=[_A-Z'])/g)
    .map(it => /[_A-Z']+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <tr>
    <th style={{ textAlign: 'center' }}>{
      // @ts-ignore
      dict._language.signifier
    }</th>
    <th>Ja</th>
  </tr>
  {
    props.data.map(([eng, l]) =>
      <tr>
        <td><TranslateRuby datum={l} /></td>
        <td>{eng}</td>
      </tr>
    )
  }
</table>

export default () => <Page title='文法'>
  現在 統べての詞を亂擇生成して居, 内容更新の度に變化します

  <Section title='由來'>
    作者は {translate('_LANGUAGE')} を lojban の文法と Fr 語の音韻を參考にしつつ隙間に Ja 語を詰めて作った.
    詞彙の大部分は亂數生成なれど諸自然言語を詞源にする物も有る.
  </Section>

  <Section title='音と字'>
    <div>
      ここに示す音素の分類は音聲學的な物でなく文化的な物である.
    </div>
    <div>
      子音.
      <table>
        <thead>
          <tr>
            <th></th>
            <th>硬口蓋</th>
            <th>軟口蓋</th>
            <th>齒</th>
            <th>脣</th>
          </tr>
        </thead>
        <tr>
          <th>鼻</th>
          <td>{/*g [ŋ]*/}</td>
          <td>{/*ň [ɲ]*/}</td>
          <td>n</td>
          <td>m</td>
        </tr>
        <tr>
          <th>有聲破裂</th>
          <td>c [g-, -ɣ-]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>無聲破裂</th>
          <td>q [k]</td>
          <td>{/*[tɕ]*/}</td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>無聲摩擦</th>
          <td>h [h, x, ç]</td>
          <td>x [ɕ]</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>接近~有聲摩擦</th>
          <td></td>
          <td>j [ʑ]</td>
          <td>r [l, ɾ, r]</td>
          <td>v [v, w]</td>
        </tr>
      </table>
    </div>

    <div>
      母音.
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
          <th>閉</th>
          <td>i</td>
          <td>y [y,ju]</td>
          <td>{/*w [ɨ]*/}</td>
          <td>u</td>
        </tr>
        <tr>
          <th>開</th>
          <td>e</td>
          <td>ø [ø,jo]</td>
          <td>a</td>
          <td>o</td>
        </tr>
      </table>
    </div>

    <div>
      音節: 子音 母音.
    </div>

    <div>
      灰色の字列は音節でない.
      <table>
        {
          cs.map(c =>
            <tr>
              {
                vs.map(v =>
                  <td style={{ padding: '0.25em', backgroundColor: isAllowed(c + v) ? 'transparent' : 'lightgray' }}>{c}{v}</td>
                )
              }
            </tr>
          )
        }
      </table>
    </div>

    <div>
      圓脣前舌音は軟口蓋音の後で圓脣後舌音として書かれる.
    </div>

    <div>
      c, j は母音間で摩擦音である. 他の破裂音は母音間に起こらない.
    </div>

    <div>
      詞頭の音節は低く殘りは高い.
    </div>
  </Section>

  <Section title='槪觀'>
    <ul>
      <li>文: 0個以上の副句と1個の述句の列び</li>
      <li>副句: 量句 格標識 關係</li>
      <li>述句: {translate('DO')} 助關係 極句 關係</li>
    </ul>

  </Section>

  <Section title='詞順'>
    <div>
      基本の詞順は
      <div className='indent'>
        {translate('DER')} V0 {translate('DEN')} V1 {translate('DO')} V2
      </div>
      で
      <div className='indent'>
        V0 は V1 を V2 する
      </div>
      を意味する.
    </div>
    <div>
      V<span style={{ fontStyle: 'italic' }}>n</span> は統べて關係であり, その前の格標識が格を示す.
      それ故に詞順は自由である.
    </div>

    <Sample data={[
      [
        '我れは汝れを知る',
        'DER I DEN THOU DO KNOW',
      ],
      [
        '汝れを知る, 我れは',
        'DEN THOU DO KNOW DER I',
      ],
    ]} />
  </Section>

  <Section title='形容'>
    <div className='indent'>
      V0 V1
    </div>
    は
    <div className='indent'>
      V1的にV0である
    </div>
    を意味する.
    V0 と V1 の關係は曖昧である.
    左結合である

    <Sample data={[
      [
        '明るい (明るい-的な) 星を見る',
        'DEN STAR BRIGHT DO SEE',
      ],
    ]} />
  </Section>

  <Section title='節'>
    <div>
      <div className='indent'>
        {translate('THAT')} P ({translate('_CLOSE')})
      </div>
      は
      <div className='indent'>
        文 P は {translate('DER')} を表す
      </div>
      を意味する關係を作る.
    </div>

    <Sample data={[
      [
        '我れは知る, 汝れが星を見るを',
        'DER I DO KNOW DEN THAT DER THOU DEN STAR DO SEE',
      ],
      [
        '生きる事は食ふ事なり',
        'DER THAT DO LIVE (_CLOSE) DO THAT DO EAT',
      ],
    ]} />
  </Section>

  <Section title='關係節'>
    <div>
      <div className='indent'>
        K V {translate('WHICH')} P(… K1 {translate('WHAT')} …) ({translate('_CLOSE')})
      </div>
      は
      <div className='indent'>
        V であり, P を{translate('WHAT')}として滿たす物をKとして
      </div>
      を意味する.
      <div className='indent'>
        K1 {translate('WHAT')}
      </div>
      は K1 が {translate('DER')} または {translate('DEN')} でありもう一方が P に含まれるなら, 省略して良い.
    </div>

    <Sample data={[
      [
        '我れ知る, 汝れが見る星を',
        'DER I DO KNOW DEN STAR WHICH DER THOU (DEN WHAT) DO SEE',
      ],
    ]} />
  </Section>

  <Section title='格標識'>
    <div>
      <div className='indent'>
        {translate('AS')} V0 V1
      </div>
      は
      <div className='indent'>
        V1 を V0 として
      </div>
      を意味する.
    </div>

    <Sample data={[
      [
        '汝れを原因として我れは知る',
        'DER I DO KNOW AS CAUSE THOU',
      ],
    ]} />
  </Section>

  <Section title='數'>
    <div>
      數は數詞を算用數字と同樣に列べて作る.
      {translate('EXP')} は指数表記を作る.
    </div>

    <Sample data={
      'ZERO ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE'.split(' ').map((k, i) => [i, k])
        .concat([
          [
            'E',
            'EXP',
          ],
          [
            '321',
            'THREE TWO ONE',
          ],
          [
            '3.21',
            'THREE NUMBER_DOT TWO ONE',
          ],
          [
            '3.21E3 (=3210)',
            'THREE TWO ONE EXP THREE',
          ],
        ])
    } />

    <div>
      <div className='indent'>
        N K V
      </div>
      は
      <div className='indent'>
        N 個の V を K として
      </div>
      を意味する.
    </div>

    <Sample data={[
      [
        '0人が知る (誰も知らない)',
        'ZERO DER PERSON DO KNOW',
      ],
    ]} />
  </Section>

  <Section title='極'>
    <div>
      極は關係の程度を示す.
      關係は暗黙的な極を持つ.
      <div className='indent'>
        {translate('DO')} N V
      </div>
      は
      <div className='indent'>
        N 程度に V する
      </div>
      を意味する.
    </div>

    <Sample data={[
      [
        '主觀的に通常の數',
        'NORMAL',
      ],
      [
        '主觀的に通常を超える數',
        'HIGH',
      ],
      [
        'Sは長い',
        'LONG',
      ],
      [
        'Sは長い',
        'DO HIGH LONG',
      ],
      [
        'Sは通常程度に長い',
        'DO NORMAL LONG',
      ],
      [
        'Sは短い (低程度に長い)',
        'DO LOW LONG',
      ],
      [
        'Sは長くない',
        'DO LESS NORMAL LONG',
      ],
      [
        '長くないものを',
        'DEN LESS NORMAL LONG',
      ],
    ]} />
  </Section>

  <Section title='疑問'>
    <div>
      <div className='indent'>
        P(… {translate('_ASK WHAT')} …)
      </div>
      は {translate('WHAT')} を滿たす關係を問ふ.
    </div>
    <Sample data={[
      [
        '何を恐る?',
        'DEN _ASK WHAT DO FEAR',
      ],
      [
        '— 時を',
        '(DO) TIME',
      ],
    ]}></Sample>

    <div>
      <div className='indent'>
        P(… {translate('_ASK HOW_MUCH')} …)
      </div>
      は {translate('HOW_MUCH')} を滿たす數を問ふ.
    </div>
    <Sample data={[
      [
        'なれは (どの程度) 人か?',
        'DER THOU _DEGREE _ASK HOW_MUCH DO PERSON',
      ],
      [
        '— 人である.',
        'NORMAL',
      ],
      [
        '— 人でない (人-度0である).',
        'ZERO',
      ],
    ]} />
  </Section>

  <Section title='引用'>
    <div>
      <div className='indent'>
        {translate('_QUOTE')} 外來詞F {translate('_QUOTE')}
      </div>
      は
      <div className='indent'>
        {translate('DER')} は F であり, {translate('DEN')} を表す
      </div>
      を意味する關係を作る.
    </div>
    <Sample data={[
      [
        '‹sumi› は我れを意味する',
        'DO _QUOTE sumi _QUOTE DEN I',
      ],
    ]} />
  </Section>

  <Section title='格交換'>
    <div>
      <div className='indent'>
        {translate('DO')} K V
      </div>
      は V の {translate('DER')} と K を交換する.
      {translate('AS, _SWAP')} も同樣の構造を持つ.
    </div>
  </Section>

  <Section title='時制と相と法'>
    <Sample data={[
      [
        '生きた',
        'DO _PAST LIVE',
      ],
      [
        '生きる',
        'DO _PRESENT LIVE',
      ],
      [
        '生きむ',
        'DO _FUTURE DO LIVE',
      ],
      [
        '生まれて居ない',
        'DO _BEFORE LIVE',
      ],
      [
        '生まれる',
        'DO _BEGIN LIVE',
      ],
      [
        '生きて居る',
        'DO _WHILE LIVE',
      ],
      [
        '死ぬ',
        'DO _END LIVE',
      ],
      [
        '死んで居る',
        'DO _AFTER LIVE',
      ],
      [
        '生きてはならぬ',
        'DO _MOOD ZERO LIVE',
      ],
      [
        '生きてよい',
        'DO _MOOD ZERO LESS LIVE',
      ],
      [
        '生きねばならぬ',
        'DO _MOOD MAX LIVE',
      ],
    ]} />
  </Section>

  <Section title='接續'>
    <div>
      接續は文と文の關係を示す.
      は
      <div className='indent'>
        P0 {translate('_CONNECT')} V P1
      </div>
      <div className='indent'>
        {translate('DER THAT')} P0 {translate('_CLOSE DEN THAT')} P1 {translate('DO')} V
      </div>
      を表す.
    </div>
    <Sample data={[
      [
        '彼が死んだ時に彼は幸福だった',
        'DER HE DO _PAST _END LIVE _CONNECT TOGETHER DER HE DO _PAST _WHILE HAPPY',
      ],
    ]} />
  </Section>
</Page >
