import { Page } from "../../components/page"

export default () => <Page title='字母' >
  <p>sumiが正書法を作る時のlatin字 割り當ての傾向（重複 有り）</p>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th>glottal</th>
        <th>velar</th>
        <th>palatal</th>
        <th>alveolar</th>
        <th>dental</th>
        <th>labial</th>
      </tr>
      <tr>
        <th>nasal</th>
        <td></td>
        <td>g</td>
        <td>ň</td>
        <td colSpan={2}>n</td>
        <td>m</td>
      </tr>
      <tr>
        <th>plossive</th>
        <td>q</td>
        <td>k c</td>
        <td>ť ď</td>
        <td colSpan={2}>t d</td>
        <td>p b</td>
      </tr>
      <tr>
        <th>aspirate plossive</th>
        <td></td>
        <td>ꝁ ꞓ</td>
        <td></td>
        <td colSpan={2}>ŧ đ</td>
        <td>ꝑ ƀ</td>
      </tr>
      <tr>
        <th>fricative</th>
        <td></td>
        <td>x h</td>
        <td>š ž</td>
        <td>s z</td>
        <td>ŧ đ</td>
        <td>f w</td>
      </tr>
      <tr>
        <th>affricate</th>
        <td></td>
        <td></td>
        <td></td>
        <td colSpan={2}>ț d̦</td>
        <td></td>
      </tr>
      <tr>
        <th>approcsimant</th>
        <td></td>
        <td></td>
        <td>j</td>
        <td colSpan={2}>l</td>
        <td>v</td>
      </tr>
    </table>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th>back</th>
        <th></th>
        <th>front</th>
      </tr>
      <tr>
        <th>high</th>
        <td>ǐ ǔ</td>
        <td>i</td>
        <td>i u</td>
      </tr>
      <tr>
        <th></th>
        <td>ě ǒ</td>
        <td>e</td>
        <td>e o</td>
      </tr>
      <tr>
        <th>low</th>
        <td>ǎ</td>
        <td></td>
        <td>a</td>
      </tr>
    </table>
  </div>
</Page >