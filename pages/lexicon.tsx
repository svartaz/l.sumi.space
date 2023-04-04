import { Page } from "../components/page";
import { dict, ipa } from "../lib/dict";

export default () => <Page title='lexicon'>
  <table>
    <tr>
      <th></th>
      <th></th>
      <th>meaner</th>
      <th>IPA</th>
      <th>etymology</th>
      <th>type</th>
      <th>meant</th>
      <th>version</th>
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
</Page>