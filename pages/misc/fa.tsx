import { Page, Section } from "../../components/page"

export default () => <Page title='ぺるしや語'>
  <Section title='母音表記'>
    <table>
      <tr>
        <th>early new persian</th>
        <td>[i]</td>
        <td rowSpan={2}>[iː]</td>
        <td rowSpan={2}>[eː]</td>
        <td>[u]</td>
        <td rowSpan={2}>[uː]</td>
        <td rowSpan={2}>[oː]</td>
        <td rowSpan={2}>[a]</td>
        <td rowSpan={2}>[ɑː]</td>
      </tr>
      <tr>
        <th>dari</th>
        <td>[ɪ]</td>
        <td>[ʊ]</td>
      </tr>
      <tr>
        <th>tajik</th>
        <td colSpan={2}>[i]</td>
        <td>[e]</td>
        <td colSpan={2}>[u]</td>
        <td>[ɵ]</td>
        <td>[a]</td>
        <td>[ɔ]</td>
      </tr>
      <tr>
        <th>iranian</th>
        <td>[e]</td>
        <td colSpan={2}>[iː]</td>
        <td>[o]</td>
        <td colSpan={2}>[uː]</td>
        <td>[æ]</td>
        <td>[ɒː]</td>
      </tr>
      <tr>
        <th>arabic</th>
        <td>ـِ</td>
        <td colSpan={2}>ی</td>
        <td>ـُ</td>
        <td colSpan={2}>و</td>
        <td>ـَ</td>
        <td>ا</td>
      </tr>
      <tr>
        <th>notation</th>
        <td>ĭ</td>
        <td>i</td>
        <td>e</td>
        <td>ŭ</td>
        <td>u</td>
        <td>o</td>
        <td>ă</td>
        <td>a</td>
      </tr>
    </table>
  </Section>

  <Section title='代名詞'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th>i</th>
        <th>thou</th>
        <th>he</th>
        <th>we</th>
        <th>ye</th>
        <th>they</th>
      </tr>
      <tr>
        <th>代名詞</th>
        {
          [
            ['măn', 'ман', 'من'],
            ['tŭ', 'ту', 'تو'],
            ['u', 'ӯ', 'او'],
            ['ma', 'мо', 'ما'],
            ['šŭma', 'шумо', 'شما'],
            ['ešan', 'эшон', 'ایشان'],
          ].map(([x, y, z]) => <td>{x}<br />{y}<br />{z}</td>)
        }
      </tr>
      <tr>
        <th>斜格接辭</th>
        {
          [
            ['-ăm', '-ам', 'ـم'],
            ['-ăt', '-ат', 'ـت'],
            ['-ăš', '-ат', 'ـش'],
            ['-ĭman', '-амон', 'ـمان'],
            ['-ĭtan', '-атон', 'ـتان'],
            ['-ĭšan', '-ашон', 'ـشان'],
          ].map(([x, y, z]) => <td>{x}<br />{y}<br />{z}</td>)
        }
      </tr>
      <tr>
        <th>動詞接辭</th>
        {
          [
            ['-ăm', '-ам', 'ـم'],
            ['-i', '-ӣ', 'ـی'],
            ['-ăd', '-ад', 'ـد'],
            ['-em', '-ем', 'ـیم'],
            ['-ed', '-ед', 'ـید'],
            ['-ănd', '-анд', 'ـند'],
          ].map(([x, y, z]) => <td>{x}<br />{y}<br />{z}</td>)
        }
      </tr>
    </table>
  </Section>

  <Section title='vocabulary'>
    <table>
      <tr className='v-parent'>
        <th>En</th>
        <th>Translit</th>
        <th>cyrillic</th>
        <th>arabic</th>
      </tr>
      {
        [
          ['do', 'kărdăn, kŭn', 'кардан, кун', 'كردن، کن'],
          ['become', 'šŭdăn, šăv', 'шудан, шав', 'شدن، شو'],
          ['have', 'daštăn, dar', 'доштан, дор', 'داشتن، دار'],
          ['give', 'dadăn, dĭh', 'додан, деҳ', 'دادن، ده'],
          ['take', 'gĭrĭftăn, gir', 'гирифтан, ', 'گرفتن، گیر'],
          ['go', 'răftăn, răv', 'рафтан, рав', 'رفتن، رو'],
        ].map(([mean, x, y, z]) => <tr>
          <th>{mean}</th>
          <td>{x}</td>
          <td>{y}</td>
          <td>{z}</td>
        </tr>)
      }
    </table>
  </Section>

</Page >