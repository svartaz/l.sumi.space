import React from "react"
import { Rubies, Ruby } from "../components/ruby"
import { Section } from "../components/page"

export default () => <>
  <div style={{ textAlign: 'center' }}>
    <img src={'/avatar.gif'} alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1em' }}>
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '150%' }}>SUMI</span><br />
      (<Rubies>初夏</Rubies>の<Ruby rt='jo-kaze'>夜風</Ruby>の<Ruby rt='suzu'>涼</Ruby>しさ)
    </div>

    <ul>
      <li><Rubies>程序</Rubies></li>
      <li><Rubies>語學</Rubies></li>
      <li><Rubies>近代自由主義</Rubies></li>
      <li><Rubies>同性愛</Rubies></li>
    </ul>
  </div>

  <Section title='languages'>
    <table>
      <tr className='v-parent'>
        <th><Rubies>言語</Rubies></th>
        <th>CEFR</th>
        <th><Rubies>資格</Rubies></th>
      </tr>
      <tr>
        <th>Ja</th>
        <td><Rubies>母語</Rubies></td>
        <td></td>
      </tr>
      <tr>
        <th>En</th>
        <td>B2</td>
        <td>
          <ul>
            <li>英檢 準1級 2555 (CE2021)</li>
            <li>TOEIC L&R 900 (CE2022)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Cmn</th>
        <td>A2</td>
        <td>
          <ul>
            <li>HSK 4級 235 (CE2021)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Fr</th>
        <td>A1</td>
        <td></td>
      </tr>
      <tr>
        <th>Id, Fa, Yue, Jbo</th>
        <td>pre-A1</td>
        <td></td>
      </tr>
    </table>
  </Section>

  <Section title='accounts'>
    <ul>
      <li><a href='https://snort.social/p/npub1fz65nf68h0kyg895u9vvwzwc0paynvdv64nu7cg7700g845k6juqzg59wk'>nostr</a></li>
      <li><a href='https://ci-en.net/creator/15102'>ci-en</a></li>
      <li><a href='https://booklog.jp/users/xek'>booklog</a></li>
      <li><a href='https://eiga.com/user/1115495/review/'>eiga.com</a></li>
      <li><a href='https://nuita.net/users/tuFEwqlaelfFak7x'>nuita.net</a></li>
      <li><a href='https://m.sumi.space/@s'>mastodon</a></li>
    </ul>
  </Section>
</>