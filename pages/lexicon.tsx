import { Page } from "../components/page";
import { dict } from "../lib/dict";
import { ipa } from "../lib/phoneme";
import { Section } from "../components/section";
import { ReactNode } from "react";
import { transliterate } from "../lib/letter";
import { Lang } from "../components/lang";

export default () => <Page title='詞彙'>
  <Section title='一覧'>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>字</th>
        <th>音</th>
        <th>源</th>
        <th>型</th>
        <th>義</th>
      </tr>
      {
        [...dict.entries()].map(([k, { signifier, klass, signifiee, etymology, }], i) =>
          <tr key={i}>
            <th>{i}</th>
            <th style={{ textAlign: 'left' }}>{k.toUpperCase()}</th>
            <td><Lang>{signifier}</Lang></td>
            <td>[{ipa(signifier)}]</td>
            <td>{
              Object.entries(etymology)
                .map(([k, v]: any) => <span><span style={{ textTransform: 'uppercase', fontSize: '50%' }}>{k}</span> {
                  typeof v === 'object'
                    ? v.n
                    : v
                }</span>)
                .reduce<ReactNode[]>((acc, elem) =>
                  acc === null ? [elem] : [...acc, ', ', elem], null)
            }</td>
            <td>{klass}</td>
            <td>{signifiee}</td>
          </tr>
        )
      }
    </table>
  </Section>
</Page >
