import { Page } from '../components/page';
import { Section } from '../components/section';
import { dict, ipa, notAllowed, translate } from '../lib/dict';

console.debug(translate(`I DO CAUSE THAT THOU _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z])(?=[^_A-Z])|(?<=[^_A-Z])(?=[_A-Z])/g)
    .map(it => /[_A-Z]+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>
  <thead>
    <tr>
      <th>型</th>
      <th>Ja</th>
      <th>譯</th>
      <th>音</th>
    </tr>
  </thead>
  {
    props.data.map(([klass, ja, l]) => {
      const t = translate(l)
      return <tr>
        <td>{klass}</td>
        <td>{ja}</td>
        <td><TranslateRuby datum={l} /></td>
        <td>[{ipa(t)}]</td>
      </tr>
    })
  }</table>

export default () => <>
  <p>制作途中。あらゆる 要素は かはりうる。</p>
  <Section title='版'>
    <table>
      <tr>
        <th>版</th>
        <th>内容</th>
      </tr>
      <tr>
        <td>2023XXXX</td>
        <td>初出</td>
      </tr>
    </table>
  </Section>

  <Section title='字素と音素'>
    <div className='tables'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>舌背</th>
            <th>反舌</th>
            <th>舌端</th>
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
          <td>q [k]</td>
          <td>k [tɕ,tʂ]</td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>無聲摩擦</th>
          <td>h [h,x]</td>
          <td>x [ɕ,ʂ]</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>有聲摩擦</th>
          <td></td>
          <td>j [ʑ,ʐ]</td>
          <td>z</td>
          <td>v [v,β,w]</td>
        </tr>
        <tr>
          <th>接近</th>
          <td></td>
          <td>l [ɾ,l]</td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>前舌非円唇</th>
            <th>前舌円唇</th>
            <th></th>
            <th>後舌</th>
          </tr>
        </thead>
        <tr>
          <th>高</th>
          <td>i</td>
          <td>y</td>
          <td>w [ɨ,ə]</td>
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

    許容しない 字列
    <ul>{
      notAllowed.map(x => <li>{x}</li>)
    }</ul>
  </Section>

  <Section title='構文'>
    <p>文の 基本は <em>動句</em>なり。</p>
    <Sample data={[
      [
        '動句',
        'A われなり',
        'DO I',
      ],
      [
        '名詞',
        'A 眞なり',
        'DO TRUE',
      ],
      [
        '動句',
        'A Bを あたへる',
        'DO GIVE',
      ],
    ]} />

    <p>動句から 助詞<TranslateRuby datum='DO' />を のぞき <em>名詞</em>を える。
      <br />これ 動句の Aに いるべき ものを あらはす。</p>
    <Sample data={[
      [
        '名詞',
        'われ',
        'I',
      ],
      [
        '名詞',
        '眞實',
        'TRUE',
      ],
      [
        '名詞',
        '供與者',
        'GIVE',
      ],
    ]} />

    <p>動句の もつ 空欄A・Bに 名詞を いれ <em>文</em>を える。
      <br />A・Bと 名詞の 對應は 詞順や 助詞で あらはす。</p>

    <p>[…]は省略可能要素</p>
    <Sample data={[
      [
        '文',
        '（たれか なにかを）あたへる',
        'DO GIVE',
      ],
      [
        '文',
        'われ（なにかを）あたへる',
        'I [DER] DO GIVE',
      ],
      [
        '文',
        '（たれか）眞實を あたへる',
        'TRUE DEN DO GIVE',
      ],
      [
        '文',
        'われ 眞實を あたへる',
        'I [DER] TRUE [DEN] THOU AS TAKE DO GIVE',
      ],
      [
        '文',
        '眞實を われ あたへる',
        'TRUE DEN I [DER] THOU DO GIVE',
      ],
    ]} />

    <p>特定の 詞を 文に 前置し 名句を える。</p>
    <Sample data={[
      [
        '名句',
        '眞實を あたへる もの',
        'WHAT [DER] TRUE [DEN] DO GIVE',
      ],
      [
        '名句',
        'わが あたへる もの',
        'WHAT DEN I [DER] DO GIVE',
      ],
      [
        '文',
        'わが あたへる もの 眞實なり (≡われ 眞實を あたへる)',
        'WHAT DEN I [DER] DO GIVE DO TRUE',
      ],
      [
        '動句',
        'A 文 ‘あたへる’ なりて Bを 意味する',
        'DO THAT DO GIVE',
      ],
    ]} />

    <p>特定の 詞で 借用を はさんで 名句を える。
      <br />現實の 發話では 所作で あらはし 省略して よい。</p>
    <Sample data={[
      [
        '動句',
        'A 字列 ‘sumi’ なりて Bを 意味する',
        'DO _QUOTE sumi [_QUOTE]',
      ],
      [
        '文',
        'われ sumiなり',
        'I DEN DO _QUOTE sumi [_QUOTE]',
      ],
    ]} />


    <p>ほかの 助詞で 動句が 内包しない 名句を 追加する。
      <br />特定の 詞を 名句に 前置し 關聯する 助詞を 得る。</p>

    <Sample data={[
      [
        '名句',
        'なれ',
        'THOU',
      ],
      [
        '動句',
        'なれについては われ あたへる',
        'I [DER] THOU ABOUT DO GIVE',
      ],
      [
        '文',
        'われ なれに あたへる',
        'I [DER] THOU AS TAKE DO GIVE',
      ],
    ]} />

    <p>（雜多な例文）</p>
    <Sample data={[
      [
        '文',
        'われ 日本國に すむ',
        `I [DER] _QUOTE 'J' 'P' _QUOTE OF NATION [DEN] DO IN`,
      ],
      [
        '文',
        'いろ なき みどりの かんがへ 猛烈に ねむる',
        `SO_MUCH ZERO COLOUR AND GREEN AND _SWAP THINK DO FIGURATIVE ANGER OF NOT WAKE`,
      ],
    ]} />
  </Section>

  <Section title='辭書'>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>音</th>
        <th>IPA</th>
        <th>源</th>
        <th>型</th>
        <th>義</th>
        <th>版</th>
      </tr>
      {Object.entries(dict).map(([k, { name, type, named, etymology, version }]: any, i) =>
        <tr key={i}>
          <th>{i}</th>
          <th>{k.toUpperCase()}</th>
          <td>{name}</td>
          <td>[{ipa(name)}]</td>
          <td>{etymology}</td>
          <td>{type}</td>
          <td>{named}</td>
          <td>{version}</td>
        </tr>
      )}
    </table>
  </Section>
</>