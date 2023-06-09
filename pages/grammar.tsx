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
        V0 V1 V2
      </div>
      で
      <div className='indent'>
        V1 する者は V2 する者を V0 する
      </div>
      を意味する.
    </div>
    <div>
      V<span style={{ fontStyle: 'italic' }}>n</span> は統べて關係である.
      格標識を使って詞順を變へる事も可能である.
    </div>

    <Sample data={[
      [
        '我れは汝れを知る',
        'KNOW I THOU ≡ DER I KNOW THOU ≡ DER I DEN THOU KNOW ≡ …',
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
        'SEE DEN STAR OF BRIGHT',
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
        文 P は A を表す
      </div>
      を意味する關係を作る.
    </div>

    <Sample data={[
      [
        '我れは知る, 汝れが星を見るを',
        'KNOW I THAT SEE THOU STAR (CLAUSE_END)',
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
        'KNOW I STAR WHICH SEE THOU (WHAT) (CLAUSE_END)',
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
        N V
      </div>
      は
      <div className='indent'>
        N 個の V する者
      </div>
      を意味する.
    </div>

    <Sample data={[
      [
        '0人が知る (誰も知らない)',
        'KNOW ZERO PERSON',
      ],
    ]} />
  </Section>

  <Section title='極'>
    <div>
      極は關係の程度を示す.
      關係は暗黙的な極を持つ.
      <div className='indent'>
        _DEGREE N V
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
        '長い',
        '_DEGREE HIGH LONG',
      ],
      [
        '通常程度に長い',
        '_DEGREE NORMAL LONG',
      ],
      [
        '短い (低程度に長い)',
        '_DEGREE LOW LONG',
      ],
      [
        '長くない',
        '_DEGREE LESS NORMAL LONG',
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
        P(… {translate('_ASK WHETHER')} …)
      </div>
      は {translate('_ASK WHETHER')} を滿たす數を問ふ.
    </div>
    <Sample data={[
      [
        '幾人 見える?',
        'SEE THOU _ASK WHETHER PERSON',
      ],
      [
        'どれ程 長い?',
        '_ASK WHETHER LONG',
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
        'はい & いいえ (ToDo)',
        '',
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
        'MEAN _QUOTE sumi _QUOTE I',
      ],
    ]} />
  </Section>

  <Section title='時制と相と法'>
    <Sample data={[
      [
        '生きた',
        '_PAST LIVE',
      ],
      [
        '生きる',
        '_PRESENT LIVE',
      ],
      [
        '生きむ',
        '_FUTURE LIVE',
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
        '_MOOD ZERO LIVE',
      ],
      [
        '生きてよい',
        '_MOOD ZERO LESS LIVE',
      ],
      [
        '生きねばならぬ',
        '_MOOD MAX LIVE',
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
        '_PAST _END LIVE HE _CONNECT TOGETHER CLAUSE_END _PAST _WHILE HAPPY HE',
      ],
    ]} />
  </Section>
</Page >
