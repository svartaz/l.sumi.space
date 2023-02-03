import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/app.sass'
import Link from 'next/link'
import Script from 'next/script'

const getTime = () => {
  const date0 = new Date(1998, 11, 22)
  const date = new Date()

  let diff = date.getTime() - date0.getTime()

  let year = 1999
  for (; ; year++) {
    const isLeap = year % 4 == 0 && year % 128 != 0
    const dayPerYear = isLeap ? 366 : 365
    const msPerYear = dayPerYear * 24 * 60 * 60 * 1000
    if (diff < msPerYear) {
      break
    } else {
      diff -= msPerYear
    }
  }

  const day = diff / 1000 / 60 / 60 / 24
  return `${year + 10000}/${(day + '00000000').slice(0, 8)}`
}

const title = 'inkwell'
export default ({ Component, pageProps }) => {
  const router = useRouter()
  const path = router.pathname

  const [time, setTime] = useState(null)
  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>
    <DefaultSeo
      titleTemplate={`${title} - %s`}
      defaultTitle={title}
      description=''
      openGraph={{
        type: 'website',
        locale: 'ja_JP',
        url: 'https://2.sumi.space',
        images: [
          {
            url: 'https://2.sumi.space/avatar.gif',
            width: 720,
            height: 720,
            alt: 'avatar lyn logo',
            type: 'image/gif',
          },
        ],
      }}
      twitter={{
        cardType: 'summary',
        handle: '@215su',
      }}
    />
    <Head>
      <link rel='icon' type='image/svg' href='/sumi.svg' />
    </Head>

    <header>
      <Link href='/'><a className={path == '/' ? 'active' : ''}>home</a></Link>
      <Link href='/works'><a className={path == '/works' ? 'active' : ''}>works</a></Link>
      <Link href='/fav'><a className={path == '/fav' ? 'active' : ''}>fav</a></Link>
      <Link href='/misc'><a className={path == '/misc' ? 'active' : ''}>misc</a></Link>

      <div className='separate'></div>
      <a href='https://twitter.com/i/user/759648849786920960'>
        <img src='/downloaded/twitter-logo-01282021/Twitter logo/SVG/Logo white.svg' alt='twitter icon' height='16em' />
      </a>
      <a href='https://discordapp.com/users/335857821629546496'>
        <img src='/downloaded/Discord-Logo-White.svg' alt='discord icon' height='16em' />
      </a>
      <a href='https://github.com/xekri'>
        <img src='/downloaded/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png' alt='github icon' height='16em' />
      </a>
      <a href='https://www.amazon.jp/hz/wishlist/ls/1FB3JS14NI6EQ'>
        <img src='https://amazon-press.jp/.imaging/AMZ_tile_fullwidthcol_png/dam/b4686ee6-74c3-4075-bf72-6516e692a82d.png' alt='amazon icon' height='16em' style={{ filter: 'invert(1)' }} />
      </a>

      <div className='separate'></div>
      <span className='time'>{time}</span>
    </header>

    <main>
      <Component {...pageProps} />
    </main>

    <footer>
      <div className='sign' style={{ float: 'left' }}>
        © 2022 sumi
      </div>

      <div className='share' style={{ float: 'right' }}>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script>
        <a href="https://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style={{ border: 'none' }} /></a><Script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js"></Script>
      </div>
    </footer>
  </>
}