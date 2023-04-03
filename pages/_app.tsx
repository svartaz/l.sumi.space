import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/app.sass'
import Link from 'next/link'

const title = 'inkwell'
export default ({ Component, props }) => {
  const router = useRouter()
  const path = router.pathname

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

    <header>
      <Link href='/'>root</Link>
    </header>

    <main>
      <Component {...props} />
    </main>
  </>
}