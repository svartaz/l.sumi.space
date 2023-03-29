import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { Page } from '../components/page'

export default () => <Page title='works'>
  <table>
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
  </table>
</Page>