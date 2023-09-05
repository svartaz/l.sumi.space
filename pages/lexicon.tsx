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
        [...dict.entries()].map(([k, { signifier, klass, signifiee, etymology, }], i) =>
          <tr key={i}>
            <th>{i}</th>
            <th style={{ textAlign: 'left' }}>{k.toUpperCase()}</th>
            <td>{signifier}</td>
            <td>[{ipa(signifier)}]</td>
            <td>{
              Object.entries(etymology).map(([k, v]) => <span>{v}<sub>{k}</sub>, </span>)
            }</td>
            <td>{klass}</td>
            <td>{signifiee}</td>
          </tr>
        )
      }
    </table>
  </Section>
</Page >
