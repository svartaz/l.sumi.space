import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/app.sass'
import Link from 'next/link'
import { useState } from 'react'
import { dict } from '../lib/dict'

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
      <h1 style={{ paddingLeft: '0.5em', borderLeft: router.pathname == '/' ? '4px solid black' : '4px solid transparent' }}><Link href='/'>{"sumi's toungue"}</Link></h1>
      <ul className='pages'>
        {
          Object.entries({
            grammar: '文法',
            lexicon: '詞彙',
            phrase: '文言集',
            convert: '變換',
            info: '情報',
          })
            .map(([k, v]) =>
              <li className={router.pathname == ('/' + k) ? 'active-page' : ''}><Link href={'/' + k}>{v}</Link></li>
            )
        }
      </ul>
      <div className='js-toc'></div>
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