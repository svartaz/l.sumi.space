import Link from 'next/link'
import { Page, Section } from '../components/page'
import { Rubies, Ruby } from '../components/ruby'

export default () => <Page title='fav'>

  <Section title='日本語'>
    <ul>
      <li><Link href='l/ja/new'><a><Rubies>獨自變種の表記</Rubies></a></Link></li>
      <li><Link href='l/ja/verb-kanzi'><a><Rubies>助動詞を漢字</Rubies>のみで<Ruby rt='arapa'>表</Ruby>す<Ruby rt='kokolo'>試</Ruby>み</a></Link></li>
      <li><Link href='l/ja/kana'><a>かな<Rubies>一覧</Rubies></a></Link></li>
    </ul>
  </Section>

  <Section title='original character'>
    <ul>
      <li><Link href='char/1'><a>suzuli, mitulu</a></Link></li>
      <li><Link href='char/2'><a>lon</a></Link></li>
    </ul>
  </Section>
</Page>