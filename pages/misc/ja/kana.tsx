import { Page } from '../../../components/page'

export default () => <Page title='かな'>
  <table style={{ fontFamily: 'sans-serif' }}>
    {
      [
        'いえあおうイ𛀀アオウ',
        'きけかこくキケカコク',
        'しせさそすシセサソス',
        'ちてたとつチテタトツ',
        'にねなのぬニネナノヌ',
        'ひへはほふヒヘハホフ',
        'みめまもむミメマモム',
        '\u{1B006}\u{1B001}やよゆ\u{1B120}エヤヨユ',
        'ゐゑわを\u{1B11F}ヰヱワヲ\u{1B122}',
      ].map(row => <tr>
        {
          [...row].map(c => <td>{c}</td>)
        }
      </tr>)
    }
  </table>

</Page>