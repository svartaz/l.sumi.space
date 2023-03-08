import Link from 'next/link'
import { Section } from '../../components/page'
import { Rubies, Ruby } from '../../components/ruby'
import { NextSeo } from 'next-seo'

export default () => <>
  <NextSeo title='fav' />

  <Section title='日本語'>
    <ul>
      <li><Link href='misc/ja/new'><a><Rubies>獨自變種の表記</Rubies></a></Link></li>
      <li><Link href='misc/ja/verb-kanzi'><a><Rubies>助動詞を漢字</Rubies>のみで<Ruby rt='arapa'>表</Ruby>す<Ruby rt='kokolo'>試</Ruby>み</a></Link></li>
      <li><Link href='misc/ja/kana'><a>かな<Rubies>一覧</Rubies></a></Link></li>
    </ul>
  </Section>

  <Section title='original character'>
    <ul>
      <li><Link href='char/1'><a>suzuli, mitulu</a></Link></li>
      <li><Link href='char/2'><a>lon</a></Link></li>
    </ul>
  </Section>

  <Section title='雜多'>
    <ul>
      <li><Link href='misc/ja'><a>suzuli, mitulu</a></Link></li>
      <li><Link href='char/2'><a>lon</a></Link></li>
    </ul>
  </Section>
</>