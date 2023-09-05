import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/app.sass'
import Script from 'next/script'
import Link from 'next/link'
import { useState } from 'react'
import { dict } from '../lib/dict'
import Head from 'next/head'

const title = dict.get('_language')?.signifier
export default ({ Component, props }) => {
  const router = useRouter()
  const [navVisible, setNavVisible] = useState(true)

  return <div id='app' className={navVisible ? '' : 'no-nav'}>
    <DefaultSeo
      titleTemplate={`${title} - %s`}
      defaultTitle={title}
      description=''
      openGraph={{
        type: 'website',
        locale: 'ja_JP',
        /*url: 'https://2.sumi.space',
        images: [
          {
            url: 'https://2.sumi.space/avatar.gif',
            width: 720,
            height: 720,
            alt: 'avatar lyn logo',
            type: 'image/gif',
          },
        ],*/
      }}
      twitter={{
        cardType: 'summary',
        handle: 'sxvarz',
      }}
    />

    <nav>
      <h1 style={{ paddingLeft: '0.5em', borderLeft: router.pathname == '/' ? '4px solid black' : '4px solid transparent' }}><Link href='/'>{title}</Link></h1>
      <ul className='pages'>
        {
          Object.entries({
            grammar: '文法',
            lexicon: '詞彙',
            convert: '變換',
            translate: '飜譯',
            info: '情報',
          })
            .map(([k, v]) =>
              <li className={router.pathname == ('/' + k) ? 'active-page' : ''}><Link href={'/' + k}>{v}</Link></li>
            )
        }
      </ul>
      <div className='js-toc'></div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="true">Tweet</a><Script async src="https://platform.twitter.com/widgets.js"></Script>
    </nav>

    <main>
      <Component {...props} />
    </main>

    <div
      className='toggle'
      onClick={() => setNavVisible(it => !it)}
    >
      <span>{navVisible ? '⇤' : '⇥'}</span>
    </div>
  </div>
}