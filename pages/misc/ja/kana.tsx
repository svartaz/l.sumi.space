import { Page } from '../../../components/page'

export default () => <Page title='かな'>
  <table style={{ fontFamily: 'sans-serif' }}>{
    [
      'い え あ お う イ 𛀀 ア オ ウ',
      'き け か こ く キ ケ カ コ ク',
      'し せ さ そ す シ セ サ ソ ス',
      'ち て た と つ チ テ タ ト ツ',
      'に ね な の ぬ ニ ネ ナ ノ ヌ',
      'ひ へ は ほ ふ ヒ ヘ ハ ホ フ',
      'み め ま も む ミ メ マ モ ム',
      '\u{1B006} \u{1B001} や よ ゆ \u{1B120} エ ヤ ヨ ユ',
      'ゐ ゑ わ を \u{1B11F} ヰ ヱ ワ ヲ \u{1B122}',
    ].map(xs => <tr>{
      xs.split(' ').map(x => <td>{x}</td>)
    }</tr>)
  }</table>
</Page>