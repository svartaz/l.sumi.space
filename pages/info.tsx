import { Page } from "../components/page";
import { dict } from "../lib/dict";
import { cs, vs } from "../lib/phoneme";

const frequency = new Map<string, number>();
for (const k in dict) {
  for (const c of dict.get(k).signifier) {
    if (frequency.hasOwnProperty(c))
      frequency[c] += 1;
    else
      frequency[c] = 1;
  }
}
export default () => <Page title='情報'>
  <table>
    <tr>
      <th>子音の數</th>
      <td>{cs.length}</td>
    </tr>
    <tr>
      <th>母音の數</th>
      <td>{vs.length}</td>
    </tr>
    <tr>
      <th>音素の數</th>
      <td>{cs.length + vs.length}</td>
    </tr>
    <tr>
      <th>辭書の見出し數</th>
      <td>{Object.keys(dict)}</td>
    </tr>
  </table>
</Page>