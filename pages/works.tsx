import Link from 'next/link'

export default () => <table>
  <tr>
    <th>以前のpage</th>
    <td>
      <ul>
        <li><Link href='https://0.sumi.space'>CE2018 (Gulp, Pug)</Link></li>
        <li><Link href='https://1.sumi.space'>CE2021 (Next.js)</Link></li>
      </ul>
    </td>
  </tr>

  <tr>
    <th>
      將棋 (Elm學習時に實裝)
    </th>
    <td>
      <Link href='https://sjagci.pages.dev'>SjagCi</Link>
    </td>
  </tr>

  <tr>
    <th>
      同型鍵盤isomorf (Swift學習時に實裝)
    </th>
    <td>
      <Link href='https://github.com/xekri/isomorf'>GitHub</Link>
    </td>
  </tr>

  <tr>
    <th>各言語のromanisation</th>
    <td>
      <Link href='https://tung.sumi.space'>tung.sumi.space</Link>
    </td>
  </tr>

  <tr>
    <th>original character</th>
    <td>
      <ul>
        <li><Link href='char/1'>suzuli, mitulu</Link></li>
        <li><Link href='char/2'>lon</Link></li>
      </ul>
    </td>
  </tr>
</table>