import { Page, Section } from "../../../components/page"
import style from './style.module.sass'

export default () => <Page title='persian unified romanisation'>
  <Section title='vowels'>
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

  <Section title='consonants'>
    <table className={style.consonants}>
      <thead>
        <tr>
          <th></th>
          <th>glottal</th>
          <th>uvular</th>
          <th>velar</th>
          <th>palatal</th>
          <th colSpan={2}>dental</th>
          <th>labial</th>
        </tr>
      </thead>
      <tr>
        <th>nasal</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td colSpan={2}>n<br />ن</td>
        <td>m<br />م</td>
      </tr>
      <tr>
        <th>plossive</th>
        <td>ɂ<br />ء ع</td>
        <td>q<br />ق</td>
        <td>
          <div>k<br />ک</div>
          <div>g<br />گ</div>
        </td>
        <td>
          <div>c<br />ج</div>
          <div>ǩ<br />چ</div>
        </td>
        <td colSpan={2}>
          <div>t<br />ت ط</div>
          <div>d<br />د</div>
        </td>
        <td>
          <div>p<br />پ</div>
          <div>b<br />ب</div>
        </td>
      </tr>
      <tr>
        <th>fricative</th>
        <td>h<br />ه ح</td>
        <td></td>
        <td>
          <div>x<br />خ</div>
          <div>ǥ<br />غ</div>
        </td>
        <td>
          <div>š<br />ش</div>
          <div>ž<br />ژ</div>
        </td>
        <td>
          <div>s<br />س ص</div>
          <div>z<br />ز ض ظ</div>
        </td>
        <td>
          <div>ŧ<br />ث</div>
          <div>đ<br />ذ</div>
        </td>
        <td>
          <div>f<br />ف</div>
          <div></div>
        </td>
      </tr>
      <tr>
        <th>tap</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td colSpan={2}>r<br />ر</td>
        <td></td>
      </tr>
      <tr>
        <th>approximant</th>
        <td></td>
        <td></td>
        <td></td>
        <td>j<br />ی</td>
        <td colSpan={2}>l<br />ل</td>
        <td>v<br />و</td>
      </tr>
    </table>
  </Section>

  <Section title='person and number'>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>i</th>
          <th>thou</th>
          <th>he</th>
          <th>we</th>
          <th>ye</th>
          <th>they</th>
        </tr>
      </thead>
      <tr>
        <th>pronoun</th>
        {
          [
            ['măn', 'ман', 'من'],
            ['tŭ', 'ту', 'تو'],
            ['u', 'ӯ', 'او'],
            ['ma', 'мо', 'ما'],
            ['šŭma', 'шумо', 'شما'],
            ['ešan', 'эшон', 'ایشان'],
          ].map(([a, b, c]) => <td>{a}<br />{b}<br />{c}</td>)
        }
      </tr>
      <tr>
        <th>oblique suffix</th>
        {
          [
            ['-ăm', '-ам', 'ـم'],
            ['-ăt', '-ат', 'ـت'],
            ['-ăš', '-ат', 'ـش'],
            ['-ĭman', '-амон', 'ـمان'],
            ['-ĭtan', '-атон', 'ـتان'],
            ['-ĭšan', '-ашон', 'ـشان'],
          ].map(([a, b, c]) => <td>{a}<br />{b}<br />{c}</td>)
        }
      </tr>
      <tr>
        <th>present suffix</th>
        <td rowSpan={2} style={{ borderBottom: 'none' }}>-ăm<br />-ам<br />ـم</td>
        <td rowSpan={2} style={{ borderBottom: 'none' }}>-i<br />-ӣ<br />ـی</td>
        <td>-ăd<br />-ад<br />ـد</td>
        <td rowSpan={2} style={{ borderBottom: 'none' }}>-em<br />-ем<br />ـیم</td>
        <td rowSpan={2} style={{ borderBottom: 'none' }}>-ed<br />-ед<br />ـید</td>
        <td rowSpan={2} style={{ borderBottom: 'none' }}>-ănd<br />-анд<br />ـند</td>
      </tr>
      <tr>
        <th>past suffix</th>
        <td>-∅</td>
      </tr>
    </table>
  </Section>

  <Section title='conjugation'>
    <table>
      <thead>
        <tr className='v-parent'>
          <th></th>
          <th>present</th>
          <th>past</th>
        </tr>
      </thead>
      <tr>
        <th>infinitive</th>
        <td colSpan={2}>kărd-ăn<br />кардан<br />كردن</td>
      </tr>
      <tr>
        <th>stem</th>
        <td>kŭn<br />кун<br />کن</td>
        <td>kărd<br />кард<br />كرد</td>
      </tr>
      <tr>
        <th>participle</th>
        <td>kŭn-ăndă<br />кунанда<br />کننده</td>
        <td>kărd-ă<br />карда<br />کرده</td>
      </tr>
      <tr>
        <th>aorist</th>
        <td>kŭn-<br />кун-<br />کنـ</td>
        <td>kărd-<br />кард-<br />کردـ</td>
      </tr>
      <tr>
        <th>progressive</th>
        <td>me-kŭn-<br />мекун-<br />می‌کنـ</td>
        <td>me-kărd-<br />мекард-<br />می‌کردـ</td>
      </tr>
    </table>
  </Section>

  <Section title='numeral'>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>n</th>
          <th>10+n</th>
          <th>10*n</th>
          <th>10^n</th>
        </tr>
      </thead>
      <tr>
        <th>0</th>
        <td>۰</td>
        <td>sĭfr<br />сифр<br />صفر</td>
        <td>dăh<br />даҳ<br />ده</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>1</th>
        <td>۱</td>
        <td>jăk<br />як<br />یک</td>
        <td>jaz-dăh<br />ёздаҳ<br />یازده</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>2</th>
        <td>۲</td>
        <td>dŭ<br />ду<br />دو</td>
        <td>dŭvaz-dăh<br />дувоздаҳ<br />دوازده</td>
        <td>bist<br />бист<br />بیست</td>
        <td>săd<br />сад<br />صد</td>
      </tr>
      <tr>
        <th>3</th>
        <td>۳</td>
        <td>se<br />се<br />سه</td>
        <td>sez-dăh<br />сенздаҳ<br />سیزده</td>
        <td>si<br />сӣ<br />سی</td>
        <td>hăzar<br />ҳазор<br />هزار</td>
      </tr>
      <tr>
        <th>4</th>
        <td>۴</td>
        <td>ǩăhar<br />чор<br />چهار</td>
        <td>ǩăhar-dăh<br />чордаҳ<br />چهارده</td>
        <td>ǩĭhĭl<br />чил<br />چهل</td>
        <td></td>
      </tr>
      <tr>
        <th>5</th>
        <td>۵</td>
        <td>pănc<br />панҷ<br />پنج</td>
        <td>panz-dăh<br />понздаҳ<br />پانزده</td>
        <td>păncah<br />панҷо<br />پنجاه</td>
        <td></td>
      </tr>
      <tr>
        <th>6</th>
        <td>۶</td>
        <td>šăš<br />шаш<br />شش</td>
        <td>šanz-dăh<br />шонздаҳ<br />شانزده</td>
        <td>šăst<br />шаст<br />شصت</td>
        <td></td>
      </tr>
      <tr>
        <th>7</th>
        <td>۷</td>
        <td>hăft<br />ҳафт<br />هفت</td>
        <td>hăf-dăh<br />ҳабдаҳ<br />هفده</td>
        <td>hăftad<br />ҳафтод<br />هفتاد</td>
        <td></td>
      </tr>
      <tr>
        <th>8</th>
        <td>۸</td>
        <td>hăšt<br />ҳашт<br />هشت</td>
        <td>hăc-dăh<br />ҳаждаҳ<br />هجده</td>
        <td>hăštad<br />ҳаштод<br />هشتاد</td>
        <td></td>
      </tr>
      <tr>
        <th>9</th>
        <td>۹</td>
        <td>nŭh<br />нуҳ<br />نه</td>
        <td>nŭz-dăh<br />нуздаҳ<br />نوزده</td>
        <td>năvăd<br />навад<br />نود</td>
        <td></td>
      </tr>
    </table>
  </Section>

  <Section title='vocabulary'>
    <table>
      <thead>
        <tr>
          <th>En</th>
          <th>Translit</th>
          <th>cyrillic</th>
          <th>arabic</th>
        </tr>
      </thead>
      {
        [
          ['do', 'kărdăn, kŭn', 'кардан, кун', 'كردن، کن'],
          ['become', 'šŭdăn, šăv', 'шудан, шав', 'شدن، شو'],
          ['have', 'daštăn, dar', 'доштан, дор', 'داشتن، دار'],
          ['give', 'dadăn, dĭh', 'додан, деҳ', 'دادن، ده'],
          ['take', 'gĭrĭftăn, gir', 'гирифтан, ', 'گرفتن، گیر'],
          ['go', 'răftăn, răv', 'рафтан, рав', 'رفتن، رو'],
        ].map(([mean, a, b, c]) => <tr>
          <th>{mean}</th>
          <td>{a}</td>
          <td>{b}</td>
          <td>{c}</td>
        </tr>)
      }
    </table>
  </Section>

</Page >