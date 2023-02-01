import { NextSeo } from 'next-seo'

const title = '有性言語の無性化'
export default () => <>
  <NextSeo title={title} />
  <h2>{title}</h2>

  <section><h3>En</h3>
    <p><em>單數they</em>の浸透により殆ど問題が無い.</p>
  </section>

  <section><h3>Es</h3>
    <p>-{'{'}a, o{'}'}を-eに置換すれば良い.</p>

    <table>
      <tr>
        <th></th>
        <th>男</th>
        <th>女</th>
        <th>新</th>
      </tr>
      <tr>
        <th>the</th>
        <td>el, los</td>
        <td>la(s)</td>
        <td>le(s)</td>
      </tr>
      <tr>
        <th>he</th>
        <td>él, ellos</td>
        <td>ella(s)</td>
        <td>elle(s)</td>
      </tr>
      <tr>
        <th>him</th>
        <td>lo(s)</td>
        <td>la(s)</td>
        <td>le(s)</td>
      </tr>
      <tr>
        <th>to him</th>
        <td colSpan={2}>le(s)</td>
        <td>a le(s)</td>
      </tr>
      <tr>
        <th>friend</th>
        <td>amigo</td>
        <td>amiga</td>
        <td>amigue</td>
      </tr>
    </table>

    <p>發音を考慮しない方法として-@を使ふ事が有るが醜いので-ꜵが良い.</p>
  </section>

  <section><h3>Es</h3>
    <p>Es語に近い.</p>

    <table>
      <tr>
        <th></th>
        <th>男</th>
        <th>女</th>
        <th>新</th>
      </tr>
      <tr>
        <th>an</th>
        <td>um, uns</td>
        <td>uma(s)</td>
        <td>ume(s)</td>
      </tr>
      <tr>
        <th>the, him</th>
        <td>o(s)</td>
        <td>a(s)</td>
        <td>el(s)</td>
      </tr>
      <tr>
        <th>he</th>
        <td>ele(s)</td>
        <td>ela(s)</td>
        <td>el(s)</td>
      </tr>
      <tr>
        <th>friend</th>
        <td>amigo</td>
        <td>amiga</td>
        <td>amigue</td>
      </tr>
    </table>

    <p>發音を考慮しない方法として-@を使ふ事が有るが醜いので-ꜵが良い.</p>
  </section>

  <section><h3>Fr</h3>
    <p>詞末母音の變化のみでは對處不能なので, 男性形を廢止するのが良い (女性形は詞末子音を發音し明晰な爲).</p>
  </section>
</>