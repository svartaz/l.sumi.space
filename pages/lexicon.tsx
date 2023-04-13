import { Page } from "../components/page";
import { dict, ipa } from "../lib/dict";

export default () => <Page title='詞彙'>
  <table>
    <tr>
      <th></th>
      <th></th>
      <th>signifier</th>
      <th>表現</th>
      <th>源</th>
      <th>型</th>
      <th>被表現</th>
      <th>版</th>
    </tr>
    {Object.entries(dict).map(([k, { signifier, type, signifiee, etymology, version }]: any, i) =>
      <tr key={i}>
        <th>{i}</th>
        <th style={{ textAlign: 'left' }}>{k.toUpperCase()}</th>
        <td>{signifier}</td>
        <td>[{ipa(signifier)}]</td>
        <td>{etymology}</td>
        <td>{type}</td>
        <td>{signifiee}</td>
        <td>{version}</td>
      </tr>
    )}
  </table>
</Page>