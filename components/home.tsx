import Link from 'next/link'

export const Owner = () => {
  return <>
    <div style={{ textAlign: 'center' }}>
      <img src='/avatar.gif' alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <ul>
        <li>軟件工程師</li>
        <li>語學趣味者
          <ul>
            <li>TOEIC L&R 810/990 (2017): B2相當</li>
            <li>英檢 準1級 2555/3000 (2021): B2相當</li>
            <li>HSK 4級 235/300 (2021): A2相當</li>
            <li>FA, FR, YUE: A1未滿</li>
          </ul>
        </li>
        <li>男性愛者</li>
        <li>(特に表現の) 近代自由主義者</li>
      </ul>
    </div>

    <div className='evenly' style={{ marginTop: '1em' }}>
      <a href='https://twitter.com/i/user/759648849786920960'>
        <img src='downloaded/twitter-logo-01282021/Twitter logo/SVG/Logo white.svg' alt='twitter icon' width='48px' />
      </a>

      <a href='https://discordapp.com/users/335857821629546496'>
        <img src='downloaded/Discord-Logo-White.svg' alt='discord icon' width='48px' />
      </a>

      <a href='https://github.com/xekri'>
        <img src='downloaded/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png' alt='github icon' width='48px' />
      </a>

      <a href='https://www.amazon.jp/hz/wishlist/ls/1FB3JS14NI6EQ'>
        <img src='https://amazon-press.jp/.imaging/AMZ_tile_fullwidthcol_png/dam/b4686ee6-74c3-4075-bf72-6516e692a82d.png' alt='amazon icon' width='48px' style={{ filter: 'invert(1)' }} />
      </a>
    </div>
  </>
}

export const Works = () => <ul>
  <li>舊網站
    <ul>
      <li><Link href='https://0.sumi.space'>12018 (Gulp, Pug)</Link></li>
      <li><Link href='https://www.sumi.space'>12021 (Next.js)</Link></li>
    </ul>
  </li>
  <li><Link href='https://sjagci.pages.dev'>將棋 (Elm)</Link></li>
  <li><Link href='https://lingua.sumi.space'>ラテン化</Link></li>
</ul>

export const Misc = () => <ul>
  <li>original characters
    <ul>
      <li><Link href='char/1'>suzuli, mitulu</Link></li>
      <li><Link href='char/2'>lon</Link></li>
    </ul>
  </li>
  <li><Link href='fav'>favourites</Link></li>
</ul>