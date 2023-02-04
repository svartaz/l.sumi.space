import Link from 'next/link'
import { Rubies, Ruby } from '../../components/ruby'

export default () => <>
  <section><h3>日本語</h3>
    <ul>
      <li><Link href='misc/ja/new'><a><Rubies>獨自變種の表記</Rubies></a></Link></li>
      <li><Link href='misc/ja/verb-kanzi'><a><Rubies>助動詞を漢字</Rubies>のみで<Ruby rt='arapa'>表</Ruby>す<Ruby rt='kokolo'>試</Ruby>み</a></Link></li>
    </ul>
  </section>

  <section><h3>original character</h3>
    <ul>
      <li><Link href='char/1'><a>suzuli, mitulu</a></Link></li>
      <li><Link href='char/2'><a>lon</a></Link></li>
    </ul>
  </section>
</>