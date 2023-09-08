import { Section } from '../components/section';
import { translate } from '../lib/dict';
import { Page } from '../components/page';
import { Lang } from '../components/lang';

console.log(translate(`SHALL CAUSE I THEN KNOW THOU _LANGUAGE`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z][_A-Z0-9]*)(?![_A-Z0-9])|(?<![_A-Z0-9])(?=[_A-Z][_A-Z0-9]*)/g)
    .map(it => /[_A-Z][_A-Z0-9]*/.test(it) ? <ruby><Lang>{translate(it)}</Lang><rt>{it}</rt></ruby> : <Lang>{it}</Lang>)
}</span>

const Sample = props => <table>
  <tr>
    <th style={{ textAlign: 'center' }}>
      <Lang>{translate('_LANGUAGE')}</Lang>
    </th>
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
  この記事を標準的な Ja 語を使ひて書きたらず

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
    <Section title='傳統的な字と音の分類'>
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
          <th>軟塞音</th>
          <td>c [g]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>硬塞音</th>
          <td>q [k]</td>
          <td></td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>硬擦音</th>
          <td>x [h]</td>
          <td>k [ɕ]</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>軟擦音</th>
          <td>∅ [ʔ]</td>
          <td>j [ʑ]</td>
          <td>z</td>
          <td>v</td>
        </tr>
        <tr>
          <th>流音</th>
          <td></td>
          <td></td>
          <td>l</td>
          <td></td>
        </tr>
        <tr>
          <th>強母音</th>
          <td>a</td>
          <td>i</td>
          <td></td>
          <td>u</td>
        </tr>
        <tr>
          <th>弱母音</th>
          <td></td>
          <td>e</td>
          <td></td>
          <td>o</td>
        </tr>
      </table>
    </Section>

    <Section title='字と音の對應の由來'>
      <ul>
        <li>Roa 語派に C が [k] を表すは Ett 語が齎した混亂なり, Γ と由來を共にせば [g] を表す</li>
        <li>本來 存在しない G は [g] と有聲性と調音點を共にす [ŋ] を表す</li>
        <li>Q と K は, Ine 語族の舌背塞音3系列を Q, ?, K で表したと假定し, satem 語の如く合流したと考ふ</li>
      </ul>
    </Section>

    <Section title='異音'>
      <table>
        <thead>
          <tr>
            <th>字</th>
            <th>條件</th>
            <th>異音</th>
            <th></th>
          </tr>
        </thead>
        <tr>
          <td>q, t, p</td>
          <td rowSpan={2}>_(!V)</td>
          <td>(有氣)</td>
          <td rowSpan={2}>子音が後續しない塞音は有氣性が有聲性を代替する</td>
        </tr>
        <tr>
          <td>c, d, b</td>
          <td>(無聲)</td>
        </tr>
        <tr>
          <td>j</td>
          <td rowSpan={2}>_(!V)</td>
          <td>[tɕ]</td>
          <td rowSpan={2}>子音が後續しない有聲擦音は無聲塞擦音に成る</td>
        </tr>
        <tr>
          <td>z</td>
          <td>[ts]</td>
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
          <td>_i, i_(!V)</td>
          <td>[ç]</td>
        </tr>
        <tr>
          <td>i</td>
          <td>(n, s, z)_</td>
          <td>[ɨ]</td>
        </tr>
        <tr>
          <td>u</td>
          <td rowSpan={2}>_舌</td>
          <td>[y]</td>
          <td rowSpan={2}>舌子音に後續する脣母音は圓脣前舌母音に成る</td>
        </tr>
        <tr>
          <td>o</td>
          <td>[ø]</td>
        </tr>
      </table>
    </Section>

    <div>
      音節: 子音 母音.
    </div>

    <div>
      詞頭の音節は低く殘りは高い.
    </div>
  </Section>

  <Section title='詞順'>
    <Section title='格'>
      <em>關係</em> (自然言語の動詞, 名詞, 形容詞に樣に多樣な意味を擔ふ部分) を PNAD… の順に竝べて文を作る.

      <ul>
        <li>P 述部 {translate('_P')}: Vする (文頭に省略可能)</li>
        <li>N 主部 {translate('_N')}: Vが</li>
        <li>A 客部 {translate('_A')}: Vを</li>
        <li>D 與部 {translate('_D')}: Vへ, Vの, Vと …</li>
      </ul>
    </Section>

    <Sample data={[
      [
        '我は汝を知る',
        'KNOW I THOU',
      ],
      [
        '汝は我へ眞實を與ふ',
        'GIVE THOU TRUE I',
      ],
    ]} />
  </Section>

  <Section title='形容'>
    <div>
      {translate('OF')} の後の關係は前の關係の意味を修飾する.
    </div>
    <Sample data={[
      [
        '汝は明るい (明るい-的な) 星を見る',
        'SEE THOU SUN OF BRIGHT',
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
        {translate('_N')} は文 P として {translate('_A')}  を表す
      </div>
      を意味する關係を作る.
      構造終止 {translate('CLAUSE_END')} を文末に省略可能.
    </div>

    <Sample data={[
      [
        '我は知る, 汝が星を見るを',
        'KNOW I THAT SEE THOU SUN (CLAUSE_END)',
      ],
    ]} />
  </Section>

  <Section title='缺節'>
    <div>
      <div className='indent'>
        {translate('WHAT')}
      </div>
      は文の空欄を意味し
      <div className='indent'>
        {translate('WHICH')} P(… {translate('WHAT')} …) ({translate('CLAUSE_END')})
      </div>
      は關係
      <div className='indent'>
        {translate('_N')} は {translate('WHAT')} として P を滿たす
      </div>
      を意味する.
      <br />N, A, D の内 未登場の部としての {translate('WHAT')} を省略可能.
    </div>

    <Sample data={[
      [
        '我は知る, 汝が見る星 (星なりて汝が見るもの) を',
        'KNOW I SUN AND WHICH SEE THOU (WHAT) (CLAUSE_END)',
      ],
    ]} />
  </Section>

  <Section title='副文'>
    <div>
      <div className='indent'>
        P0 {translate('then')} P1
      </div>
      は順接, 逆接, 竝列などの多樣な文關係を示す (分詞構文の樣に).
    </div>

    <Sample data={[
      [
        '汝が引き起こして我が知る',
        'CAUSE THOU THEN KNOW I',
      ],
      [
        '汝が, 我が知るを引き起こす',
        'CAUSE THOU THAT KNOW I',
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
        '人を0回見る (人を見ない, 見たことが無い)',
        'ZERO SEE MAN',
      ],
      [
        '0人を見る (誰も見ない)',
        'SEE ZERO MAN',
      ],
    ]} />
  </Section>

  <Section title='疑問'>
    <div>
      <div className='indent'>
        P({translate('WHAT _ASK')})
      </div>
      は {translate('WHAT')} を滿たす關係を問ふ.
    </div>
    <Sample data={[
      [
        '我は汝の何だ?',
        'WHAT _ASK I THOU',
      ],
      [
        '誰が汝を知る?',
        'KNOW WHAT _ASK THOU',
      ],
    ]} />

    <div>
      <div className='indent'>
        P(… {translate('HOW_MANY _ASK')} …)
      </div>
      は {translate('HOW_MANY _ASK')} を滿たす數を問ふ.
    </div>
    <Sample data={[
      [
        '汝は幾人を見る?',
        'THOU SEE HOW_MANY _ASK MAN',
      ],
      [
        'どれ程 長い?',
        'LONG OF CARDINAL HOW_MANY _ASK',
      ],
    ]} />

    <div>
      文頭の {translate('_ASK')} は文全體を問ふ.
    </div>
    <Sample data={[
      [
        '汝れは我れを知るか?',
        ' _ASK KNOW THOU I',
      ],
      [
        'はい',
        'KNOW',
      ],
      [
        'いいえ',
        'NO KNOW',
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
        {translate('_N')} は表現 F として{translate('_A')} を意味する
      </div>
      を意味する關係を作る.
    </div>
    <Sample data={[
      [
        '‹sumi› は我れを意味する',
        '_QUOTE sumi, I',
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
        '生きる',
        'DO LIVE',
      ],
      [
        '生きむ',
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
        'MAY OF ZERO LIVE',
      ],
      [
        '生きてよい',
        'MAY LIVE',
      ],
      [
        '生きねばならぬ',
        'MAY OF ALL LIVE',
      ],
    ]} />
  </Section>
</Page >
