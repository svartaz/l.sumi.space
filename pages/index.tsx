import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Link from 'next/link'

const Me = () => <>
  <div style={{ textAlign: 'center' }}>
    <img src={'/avatar.gif'} alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <p style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '150%' }}>SUMI</span><br />
      (初夏の夜風の涼しさ)
    </p>

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

  <div className='evenly' style={{ marginTop: '1em' }}>
    <a href='https://twitter.com/i/user/759648849786920960'>
      <img src='downloaded/twitter-logo-01282021/Twitter logo/SVG/Logo white.svg' alt='twitter icon' width={48} />
    </a>

    <a href='https://m.sumi.space/@s'>
      <img src='https://raw.githubusercontent.com/mastodon/mastodon/cf4992c918459187962a9e2f389f9ccb4f1b825d/app/javascript/images/logo-symbol-icon.svg' alt='mastodon icon' width={48} />
    </a>

    <a href='https://discordapp.com/users/335857821629546496'>
      <img src='downloaded/Discord-Logo-White.svg' alt='discord icon' width={48} />
    </a>

    <a href='https://github.com/xekri'>
      <img src='downloaded/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png' alt='github icon' width={48} />
    </a>

    <a href='https://www.amazon.jp/hz/wishlist/ls/1FB3JS14NI6EQ'>
      <img src='https://amazon-press.jp/.imaging/AMZ_tile_fullwidthcol_png/dam/b4686ee6-74c3-4075-bf72-6516e692a82d.png' alt='amazon icon' width='48px' style={{ filter: 'invert(1)' }} />
    </a>

    <a href='https://ci-en.net/creator/15102'>
      <img src='https://ci-en.net/assets/img/common/logo_cien_web.png' alt='ci-en icon' width={48} style={{ filter: 'grayscale(1) brightness(7)' }} />
    </a>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <ul>
      <li><a href='https://snort.social/p/npub1fz65nf68h0kyg895u9vvwzwc0paynvdv64nu7cg7700g845k6juqzg59wk'>nostr</a></li>
      <li><a href='https://booklog.jp/users/xek'>booklog</a></li>
      <li><a href='https://eiga.com/user/1115495/review/'>eiga.com</a></li>
      <li><a href='https://nuita.net/users/tuFEwqlaelfFak7x'>nuita.net</a></li>
    </ul>
  </div>
</>

const Fav = () => <>
  <section>
    <h3>文獻</h3>
    <ul>
      <li>2007 <a href='https://cruel.org/economist/courier200712.html'>自由のためなら人が死んでもいい</a></li>
      <li>2007 <a href='https://www.amazon.co.jp/dp/4815805997'>動物からの倫理学入門</a></li>
      <li>2015 <a href='https://yuhr.tumblr.com/post/115722603486'>「無断コピー以外を禁止する」ライセンス</a></li>
      <li>2017 <a href='https://www.amazon.co.jp/dp/4795403600'>生まれてこない方が良かった 存在してしまうことの害悪</a></li>
    </ul>
  </section>

  <section>
    <h3>小説</h3>
    <a href='https://booklog.jp/users/xek?category_id=3448170&rank=5'>booklog.jp</a>
  </section>

  <section>
    <h3>漫畫</h3>
    <a href='https://booklog.jp/users/xek?category_id=2789561'>booklog.jp</a>
  </section>

  <section>
    <h3>映像</h3>
    <ul>
      <li>2000 <a href='https://www.amazon.co.jp/dp/B07H8MZWG1'>フリクリ</a></li>
      <li>2012 <a href='https://www.amazon.co.jp/dp/B019HY0DXS'>つり球</a></li>
      <li>2019 <a href='https://www.amazon.co.jp/dp/B07YVP6Z44'>星合の空</a></li>
      <li>2012 <a href='https://www.amazon.co.jp/dp/B019HXYPSS'>さらざんまい</a></li>
      <li>2018 <a href='https://www.amazon.co.jp/dp/B08CZVMTYF'>リズと青い鳥</a></li>
      <li>2021 <a href='https://www.amazon.co.jp/dp/B091BLJB5K'>SSSS.DYNAZENON</a></li>
      <li>2021 <a href='https://www.amazon.co.jp/dp/B08SHQD4FC'>SK∞</a></li>
      <li>2021 <a href='https://www.amazon.co.jp/dp/B09NTBC569'>劇場版 少女☆歌劇 レヴュースタァライト</a></li>
      <li>2022 <a href='https://www.netflix.com/title/81054853'>Cyberpunk: Edgerunners</a></li>
    </ul>
  </section>

  <section>
    <h3>遊戲</h3>
    <ul>
      <li>2009 <a href='https://www.atlus.co.jp/title-archive/ds/'>女神異聞録デビルサバイバー</a></li>
      <li>2010 <a href='https://jp.finalfantasyxiv.com/product'>FINAL FANTASY XIV</a></li>
      <li>2017 <a href='https://megido72.com/'>メギド72</a></li>
      <li>2018 <a href='https://store.steampowered.com/app/814540'>Changed</a></li>
      <li>2020 <a href='https://store.steampowered.com/app/1150690'>OMORI</a></li>
      <li>2022 <a href='https://nucarnival.com'>NU:カーニバル</a></li>
      <li>2022 <a href='https://www.pokemon.co.jp/ex/sv/ja/'>ポケットモンスター スカーレット&バイオレット</a></li>
    </ul>
  </section>
</>

const Works = () => <ul>
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
</ul>

const Articles = () =>
  <ul>
    <li>日本語</li>
    <ul>
      <li><Link href='misc/ja/new'>獨自變種の表記</Link></li>
      <li><Link href='misc/ja/verb-kanzi'>助動詞を漢字のみで表す試み</Link></li>
    </ul>
  </ul>


const tabs = ['am', 'made', 'like', 'wrote']

export default () => <Tabs>
  <TabList>{
    tabs.map((tab, i) =>
      <Tab key={i}><h2>{tab.toUpperCase()}</h2></Tab>
    )
  }</TabList>

  <TabPanel><Me /></TabPanel>
  <TabPanel><Works /></TabPanel>
  <TabPanel><Fav /></TabPanel>
  <TabPanel><Articles /></TabPanel>
</Tabs >