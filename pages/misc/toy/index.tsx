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
            <td>x [x~ʂ]</td>
            <td>s</td>
            <td>f</td>
          </tr>
          <tr>
            <th>有聲摩擦</th>
            <td>h [ɣ~ʐ]</td>
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
            <td>ǐ [i]</td>
            <td>ǔ [y]</td>
            <td>i [ɨ]</td>
            <td>u</td>
          </tr>

          <tr>
            <th></th>
            <td>ě</td>
            <td>ǒ</td>
            <td>e</td>
            <td>o</td>
          </tr>

          <tr>
            <th>低</th>
            <td>ǎ</td>
            <td></td>
            <td></td>
            <td>a</td>
          </tr>
        </table>
      </div>
    </Section>

    <Section title='文法'>
      <pre>
        VP       ← verb | verb '{translate('VERB')}' (preposition verb)* ({translate('END VERB')})?<br />
        sentence ← VP (preposition VP)*
      </pre>
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
              'i speak.',
              'I SPEAK',
            ],
            [
              'i speak truth.',
              'I SPEAK( PATIENT TRUE',
            ],
            [
              'i speak truth to you.',
              'I SPEAK( PATIENT TRUE TO THOU',
            ],
            [
              'i am a speaker of truth.',
              'I HABITUAL SPEAK( PATIENT TRUE',
            ],
            [
              'thou dost not know it.',
              'THOU (NOT KNOW)( PATIENT IT',
            ],
            [
              'i speak that which thou know not.',
              'I SPEAK( PATIENT PASSIVE (NOT KNOW)( PATIENT THOU',
            ],
            [
              'i speak truth which thou know not.',
              'I SPEAK( PATIENT PASSIVE TRUE (NOT KNOW)( PATIENT THOU',
            ],
            [
              'i spoke.',
              'I SPEAK( ADVERB BEFORE',
            ],
            [
              'i speak when thou see me.',
              'I SPEAK ADVERB NOW'
            ],
          ].map(([en, code], i) =>
            <tr key={i}>
              <td>{en}</td>
              <td>{code}</td>
              <td>{translate(code)}</td>
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