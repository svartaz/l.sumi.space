import React from "react"

export default () => <>
  <div style={{ textAlign: 'center' }}>
    <img src={'/avatar.gif'} alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <span style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '150%' }}>SUMI</span><br />
      (初夏の夜風の涼しさ)
    </span>

    <ul>
      <li>工程師</li>
      <li>語學趣味者</li>
      <ul>
        <li>EN: B2</li>
        <ul>
          <li>英檢 準1級 2555 (CE2021)</li>
          <li>TOEIC L&R 900 (CE2022)</li>
        </ul>
        <li>CMN: A2</li>
        <ul>
          <li>HSK 4級 235 (CE2021)</li>
        </ul>
        <li>FR, ID, FA, YUE, JBO: pre-A1</li>
      </ul>
      <li>近代自由主義者</li>
      <li>男性愛者</li>
    </ul>
  </div>

  <section><h4>accounts</h4>
    <ul>
      <li><a href='https://ci-en.net/creator/15102'>ci-en</a></li>
      <li><a href='https://snort.social/p/npub1fz65nf68h0kyg895u9vvwzwc0paynvdv64nu7cg7700g845k6juqzg59wk'>nostr</a></li>
      <li><a href='https://booklog.jp/users/xek'>booklog</a></li>
      <li><a href='https://eiga.com/user/1115495/review/'>eiga.com</a></li>
      <li><a href='https://nuita.net/users/tuFEwqlaelfFak7x'>nuita.net</a></li>
      <li><a href='https://m.sumi.space/@s'>mastodon</a></li>
    </ul>
  </section>
</>