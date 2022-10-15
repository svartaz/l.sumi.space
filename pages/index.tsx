import matter from "gray-matter"
import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Link from 'next/link'

const Me = () => <>
  <div style={{ textAlign: 'center' }}>
    <img src={'/avatar\'.gif'} alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <p style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '150%' }}>SUMI</span><br />
      (墨侖, 初夏の夜風の涼しさ)
    </p>

    <ul>
      <li>修士 (情報科學)</li>
      <li>軟件工程師</li>
      <li>語學趣味者
        <ul>
          <li>EN: B2
            <ul>
              <li>英檢 準1級 2555 (CE2021)</li>
              <li>TOEIC L&R 900 (CE2022)</li>
            </ul>
          </li>
          <li>CMN: A2
            <ul>
              <li>HSK 4級 235 (CE2021)</li>
            </ul>
          </li>
          <li>FA, FR, YUE: A1未滿</li>
        </ul>
      </li>
      <li>近代自由主義者</li>
      <li>男性愛者</li>
    </ul>
  </div>

  <div className='evenly' style={{ marginTop: '1em' }}>
    <a href='https://twitter.com/i/user/759648849786920960'>
      <img src='downloaded/twitter-logo-01282021/Twitter logo/SVG/Logo white.svg' alt='twitter icon' width={48} />
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
      <img src='https://ci-en.net/assets/img/common/logo_cien_web.png' alt='ci-en icon' width={48} style={{ filter: 'grayscale(1)' }} />
    </a>

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
    <ul>
      <li>2010 <a href='https://www.amazon.co.jp/dp/B009DEMA1Q'>ハーモニー</a></li>
      <li>2010 <a href='https://www.amazon.co.jp/dp/B075VFL6WS'>Coda Series</a></li>
      <li>2011 <a href='https://www.amazon.co.jp/dp/4344417534'>天帝のはしたなき果実</a></li>
      <li>2012 <a href='https://www.amazon.co.jp/dp/B00O2O7JEA'>あなたの人生の物語</a></li>
      <li>2014 <a href='https://www.amazon.co.jp/dp/B00RSPXLT2'>ディアスポラ</a></li>
      <li>2017 <a href='https://www.amazon.co.jp/dp/4150121265'>もののあはれ (ケン・リュウ短篇傑作集2)</a></li>
      <li>2019 <a href='https://www.amazon.co.jp/dp/B08KWLBML3'>三体</a></li>
      <li>2021 <a href='https://www.amazon.co.jp/dp/B09JNXC5DL'>鴨川ランナー</a></li>
    </ul>
  </section>

  <section>
    <h3>漫畫</h3>
    <ul>
      <li>2012 <a href='https://www.amazon.co.jp/dp/B074CFZ28K'>スピリットサークル</a></li>
      <li>2014 <a href='https://www.amazon.co.jp/dp/B074C559L8'>ダンジョン飯</a></li>
      <li>2016 <a href='https://www.amazon.co.jp/dp/B07875FXZ4'>Artiste</a></li>
      <li>2018 <a href='https://www.amazon.co.jp/dp/B07D58KR39'>呪術廻戦</a></li>
      <li>2019 <a href='https://www.amazon.co.jp/dp/B08C6GFYV6'>潮が舞い子が舞い</a></li>
    </ul>
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
      <li>2017 <a href='https://play.google.com/store/apps/details?id=com.dena.a12021245'>メギド72</a></li>
      <li>2018 <a href='https://store.steampowered.com/app/814540'>Changed</a></li>
      <li>2020 <a href='https://store.steampowered.com/app/1150690'>OMORI</a></li>
      <li>2022 <a href='https://nucarnival.com'>NU:カーニバル</a></li>
    </ul>
  </section>
</>

const Misc = () => <ul>
  <li>舊網站
    <ul>
      <li><Link href='https://0.sumi.space'>CE2018 (Gulp, Pug)</Link></li>
      <li><Link href='https://www.sumi.space'>CE2021 (Next.js)</Link></li>
    </ul>
  </li>
  <li><Link href='https://sjagci.pages.dev'>將棋 (Elm)</Link></li>
  <li><Link href='https://tung.sumi.space'>ラテン化</Link></li>
  <li>original characters
    <ul>
      <li><Link href='char/1'>suzuli, mitulu</Link></li>
      <li><Link href='char/2'>lon</Link></li>
    </ul>
  </li>
</ul>

export async function getStaticProps() {
  const posts = (context => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      // FIXME
      const value: any = keys.map(context)[index]
      const document = matter(value.default)
      return {
        meta: document.data,
        slug,
      }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  const postsSorted = posts.sort((a, b) =>
    b.meta.id - a.meta.id
  ).reverse()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postsSorted))
    }
  }
}

const tabs = ['me', 'misc', 'fav', 'posts']

export default ({ posts }) => <Tabs>
  <TabList>{
    tabs.map((tab, i) =>
      <Tab key={i}><h2>{tab.toUpperCase()}</h2></Tab>
    )
  }</TabList>

  <TabPanel><Me /></TabPanel>
  <TabPanel><Misc /></TabPanel>
  <TabPanel><Fav /></TabPanel>
  <TabPanel>
    {posts.map((post, i) =>
      <section key={i}>
        <h3>
          <Link href={`../posts/${post.slug}`} >{post.meta.date}</Link> {post.meta.title}
        </h3>
      </section>
    )}
  </TabPanel>
</Tabs >