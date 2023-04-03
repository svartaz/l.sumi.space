import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/app.sass'
import tocbot from 'tocbot'
import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import Script from 'next/script'
import Link from 'next/link'

const title = 'sumi language (TBD)'
export default ({ Component, props }) => {
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    tocbot.init({
      contentSelector: 'main',
      headingSelector: 'h2',
      hasInnerContainers: true,
      scrollContainer: 'main'
    })

    return () => tocbot.destroy()
  }, [])

  return <>
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
      <h1><Link href='/'>{title}</Link></h1>
      <div className='js-toc'></div>

      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="true">Tweet</a><Script async src="https://platform.twitter.com/widgets.js"></Script>
    </nav>

    <main>
      <Component {...props} />
    </main>
  </>
}