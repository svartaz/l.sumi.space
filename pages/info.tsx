import { Page } from "../components/page";
import { Section } from "../components/section";
import { dict } from "../lib/dict";
import { cs, vs } from "../lib/phoneme";
import style from "./style.module.sass";

const frequency = new Map<string, number>();
for (const k in dict) {
  for (const c of dict.get(k).signifier) {
    if (frequency.hasOwnProperty(c))
      frequency[c] += 1
    else
      frequency[c] = 1
  }
}
const frequencySorted = [...frequency.entries()].sort((a, b) => a[1] - b[1]).reverse()

export default () => <Page title='情報'>
  <Section title='頻度'>
    <div className={style.row}>
      {
        [cs, vs].map(xs =>
          <table>
            {
              frequencySorted.filter(([l]) => xs.includes(l)).map(([l, f]) =>
                <tr>
                  <td>{l}</td>
                  <td>{f}</td>
                </tr>
              )
            }
          </table>
        )
      }
    </div>
  </Section>
</Page>