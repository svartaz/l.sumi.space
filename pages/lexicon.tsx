import { Page } from "../components/page";
import { dict } from "../lib/dict";
import { ipa } from "../lib/phoneme";
import { Section } from "../components/section";

export default () => <Page title='詞彙'>
  <Section title='一覧'>
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
      {
        // @ts-ignore
        Object.entries(dict).map(([k, { signifier, type, signifiee, etymology, version }], i) =>
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
        )
      }
    </table>
  </Section>
</Page >
