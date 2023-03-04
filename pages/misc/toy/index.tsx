import { Page, Section } from '../../../components/page';
import { dict, translate } from './dict';

const title = 'toy language'
export default () => {

  return <Page title='toy language'>
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
            <td>h [ɣ]</td>
            <td>z</td>
            <td>v</td>
          </tr>
          <tr>
            <th>有聲摩擦</th>
            <td></td>
            <td>l</td>
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
            <td></td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>e</td>
            <td>ö</td>
            <td></td>
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
    </Section>

    <Section title='格'>
      <table>
        <tr>
          <th></th>
          <th>出格</th>
          <th>主格</th>
          <th>入格</th>
        </tr>
        <tr>
          <th>移動</th>
          <td>*から</td>
          <td>*が往く</td>
          <td>*まで</td>
        </tr>
        <tr>
          <th>授受</th>
          <td>*が</td>
          <td>*を與へる</td>
          <td>*に</td>
        </tr>
        <tr>
          <th>思考</th>
          <td></td>
          <td>*が考へる</td>
          <td>*を</td>
        </tr>
        <tr>
          <th>感情</th>
          <td>*を</td>
          <td>*が感ずる</td>
          <td></td>
        </tr>
      </table>

    </Section>

    <Section title='例'>
      ‘()’ は理解の爲に追加した. 實際の文には表れない.
      <table>
        <tr>
          <th>En</th>
          <th>中間</th>
          <th>對象</th>
        </tr>
        {
          [
            [
              'i speak',
              `FROM I SPEAK`,
            ],
            [
              'i speak truth',
              `FROM I _O TRUE SPEAK`,
            ],
            [
              'i speak truth to you',
              `FROM I TO THOU _O TRUE SPEAK`,
            ],
            [
              'i speak not',
              `FROM I NOT SPEAK`,
            ],
            [
              'i speak that which thou knowst',
              `FROM I _O THAT THOU WHAT KNOW SPEAK`,
            ],
            [
              'i speak truth which thou knowst',
              `FROM I _O TRUE AND THAT FROM THOU _O WHAT KNOW SPEAK`,
            ],
            [
              'i spoke',
              `FROM THAT FROM I SPEAK TO NOW BEFORE`,
            ],
            [
              'i speak when thou see me',
              `FROM THAT FROM I SPEAK TO THAT FROM I TO THOU SEE ZERO-BEFORE`,
            ],
            [
              'every person likes someone',
              `FROM MAX PERSON _O MORE ZERO PERSON GLAD`,
            ],
          ].map(([en, medium], i) =>
            <tr>
              <td>{en}</td>
              <td style={{ fontFamily: 'Noto Sans Mono' }}>{medium}</td>
              <td>{translate(medium)}</td>
            </tr>
          )
        }
      </table>

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
}