import { Section } from '../components/section';
import { translate } from '../lib/dict';
import { Page } from '../components/page';

console.log(translate(`SHALL CAUSE I THEN KNOW THOU _LANGUAGE`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z][_A-Z0-9]*)(?![_A-Z0-9])|(?<![_A-Z0-9])(?=[_A-Z][_A-Z0-9]*)/g)
    .map(it => /[_A-Z][_A-Z0-9]*/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <tr>
    <th style={{ textAlign: 'center' }}>{
      translate('_LANGUAGE')
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
  <Section title='由來'>
    <ul>
      <li>lojban の文法</li>
      <li>En, De 語の詞彙</li>
      <li>Fr, Ru 語の音韻</li>
      <li>Sa 語の音韻論</li>
      <li>Ja 語 (作者の母語) の無意識な諸諸</li>
    </ul>
  </Section>

  <Section title='音と字'>
    <div>
      下の表は音韻論的ならず文化的な.
      <table>
        <thead>
          <tr>
            <th></th>
            <th>喉音</th>
            <th>舌音</th>
            <th>齒音</th>
            <th>脣音</th>
          </tr>
        </thead>
        <tr>
          <th>鼻音</th>
          <td>g [ŋ]</td>
          <td style={{ visibility: 'hidden' }}>ň [ɲ]</td>
          <td>n</td>
          <td>m</td>
        </tr>
        <tr>
          <th>軟破裂音</th>
          <td>c [g]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>硬破裂音</th>
          <td>q [k]</td>
          <td>k [ɕ]</td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>硬摩擦音</th>
          <td>x [h]</td>
          <td></td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>軟摩擦音</th>
          <td>∅</td>
          <td>j [ʑ]</td>
          <td>z</td>
          <td>v</td>
        </tr>
        <tr>
          <th>接近音</th>
          <td></td>
          <td></td>
          <td>r</td>
          <td></td>
        </tr>
        <tr style={{ borderTopStyle: 'double' }}>
          <th>強音</th>
          <td>a</td>
          <td>i</td>
          <td></td>
          <td>u [ɯ]</td>
        </tr>
        <tr>
          <th>弱音</th>
          <td>∅ [ə]</td>
          <td>e</td>
          <td></td>
          <td>o</td>
        </tr>
      </table>
    </div>

    <div>
      條件異音.

      <table>
        <tr>
          <th>音</th>
          <th>環境</th>
        </tr>
        <tr>
          <td>g</td>
          <td>_V</td>
          <td>[ɲ]</td>
        </tr>
        <tr>
          <td>c</td>
          <td>V_V</td>
          <td>[ɣ]</td>
        </tr>
        <tr>
          <td>x</td>
          <td>_i | i_^</td>
          <td>[ç]</td>
        </tr>
        <tr>
          <td>i</td>
          <td>齒_</td>
          <td>[ɨ]</td>
        </tr>
        <tr>
          <td>u</td>
          <td>_舌</td>
          <td>[y]</td>
        </tr>
        <tr>
          <td>o</td>
          <td>_舌</td>
          <td>[ø]</td>
        </tr>
      </table>
    </div>

    <div>
      音節: 子音 母音.
    </div>

    <div>
      詞頭の音節は低く殘りは高い.
    </div>
  </Section>

  <Section title='詞順'>
    <div>
      基本の詞順は
      <div className='indent'>
        V0 V1 V2
      </div>
      で
      <div className='indent'>
        V1 する者は V2 する者を V する
      </div>
      を意味する. V<span style={{ fontStyle: 'italic' }}>n</span> は統べて關係である.
    </div>
    <div>
      格標識を使って詞順を變へる事も可能である.
    </div>

    <Sample data={[
      [
        '我れは汝れを知る',
        'KNOW I THOU',
      ],
      [
        '〃',
        '_N I KNOW THOU',
      ],
      [
        '〃',
        '_N I _A THOU KNOW',
      ],
    ]} />
  </Section>

  <Section title='形容'>
    <div className='indent'>
      V0 {translate('OF')} V1
    </div>
    は
    <div className='indent'>
      V1 的に V0 する
    </div>
    を意味する.
    V0 と V1 の關係は曖昧である.
    左結合である

    <Sample data={[
      [
        '明るい (明るい-的な) 星を見る',
        'SEE _A SUN OF BRIGHT',
      ],
    ]} />
  </Section>

  <Section title='節'>
    <div>
      <div className='indent'>
        {translate('THAT')} P ({translate('CLAUSE_END')})
      </div>
      は
      <div className='indent'>
        文 P は {translate('_N')} を表す
      </div>
      を意味する關係を作る.
    </div>

    <Sample data={[
      [
        '我れは知る, 汝れが星を見るを',
        'KNOW I THAT SEE THOU SUN (CLAUSE_END)',
      ],
      [
        '生きる事は食ふ事なり',
        'THAT EAT CLAUSE_END THAT LIVE',
      ],
    ]} />
  </Section>

  <Section title='有格句'>
    <div>
      <div className='indent'>
        {translate('WHICH')} P(… {translate('WHAT')} …) ({translate('CLAUSE_END')})
      </div>
      は {translate('WHAT')} として P を滿たす關係を意味する.
      節の右端の {translate('WHAT')} を省略しても良い.
    </div>

    <Sample data={[
      [
        '我れ知る, 汝れが見る星を',
        'KNOW I SUN WHICH SEE THOU (WHAT) (CLAUSE_END)',
      ],
    ]} />
  </Section>

  <Section title='副文'>
    <div>
      <div className='indent'>
        {translate('WITH')} P ({translate('CLAUSE_END')})
      </div>
      は主文に副次的な文を追加する.
    </div>

    <Sample data={[
      [
        '汝れが引き起こして我れは知る (汝れが我れに知らせる)',
        'KNOW I WITH CAUSE THOU (CLAUSE_END)',
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
            'THREE DECIMAL TWO ONE',
          ],
          [
            '3.21E3 (=3210)',
            'THREE TWO ONE EXP THREE',
          ],
        ])
    } />

    <div>
      <div className='indent'>
        N V
      </div>
      は
      <div className='indent'>
        N 個の V する者
      </div>
      または
      <div className='indent'>
        N 回 V する
      </div>
      を意味する.
    </div>

    <Sample data={[
      [
        '0人が知る (誰も知らない)',
        'KNOW ZERO MAN',
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
        '我れは汝れの何だ?',
        '_ASK WHAT I THOU',
      ],
      [
        '誰れが汝れを知る?',
        'KNOW _ASK WHAT THOU',
      ],
      [
        '我れは誰れを知る?',
        'KNOW I _ASK WHAT',
      ],
    ]} />

    <div>
      <div className='indent'>
        P(… {translate('_ASK HOW_MANY')} …)
      </div>
      は {translate('_ASK HOW_MANY')} を滿たす數を問ふ.
    </div>
    <Sample data={[
      [
        '幾人 見える?',
        'SEE THOU _ASK HOW_MANY MAN',
      ],
      [
        'どれ程 長い?',
        '_ASK HOW_MANY LONG',
      ],
    ]} />

    <div>
      文末の {translate('_ASK')} は文全體を問ふ.
    </div>
    <Sample data={[
      [
        '汝れは我れを知るか?',
        'KNOW THOU I _ASK',
      ],
      [
        'はい',
        'KNOW',
      ],
      [
        'いいえ',
        'NOT KNOW',
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
        表現 F である
      </div>
      を意味する關係を作る.
    </div>
    <Sample data={[
      [
        '‹sumi› は我れを意味する',
        'NAME _QUOTE sumi _QUOTE I',
      ],
    ]} />
  </Section>

  <Section title='時制と相と法'>
    <Sample data={[
      [
        '生きた',
        'DID LIVE',
      ],
      [
        '生く',
        'DO LIVE',
      ],
      [
        '生かむ',
        'SHALL LIVE',
      ],
      [
        '生まれて居ない',
        '_BEFORE LIVE',
      ],
      [
        '生まれる',
        '_BEGIN LIVE',
      ],
      [
        '生きて居る',
        '_WHILE LIVE',
      ],
      [
        '死ぬ',
        '_END LIVE',
      ],
      [
        '死んで居る',
        '_AFTER LIVE',
      ],
      [
        '生きてはならぬ',
        'ZERO-MAY LIVE',
      ],
      [
        '生きてよい',
        'MAY ZERO LESS LIVE',
      ],
      [
        '生きねばならぬ',
        'MAX-MAY LIVE',
      ],
    ]} />
  </Section>

  <Section title='接續'>
    <div>
      接續は文と文の關係を示す.
      <div className='indent'>
        P0 {translate('_CONNECT')} V {translate('CLAUSE_END')} P1
      </div>
      は
      <div className='indent'>
        V {translate('THAT')} P0 {translate('CLAUSE_END THAT')} P1 ({translate('CLAUSE_END')})
      </div>
      を表す.
    </div>
    <Sample data={[
      [
        '彼が死ぬ時に彼は幸福だった',
        '_PAST _END LIVE HE _CONNECT AT CLAUSE_END _PAST _WHILE LOVE HE',
      ],
    ]} />
  </Section>
</Page >
