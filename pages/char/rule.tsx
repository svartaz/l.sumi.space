import Link from 'next/link'
import { Page, Section } from '../../components/page'
import { Rubies, Ruby } from '../../components/ruby'
import { NextSeo } from 'next-seo'

export default () => <Page title='rule'>
  以下は正式な物でなく、法的文書でもありません。
  作者が讀み手の良心に働きかける事を目的とします。

  <ul>
    <li>閲覽可能な者を差別的に制限しない事。</li>
    <ul>
      <li>惡い例：「18歳以上のみ」「男（女）性向け」「japanese only」</li>
    </ul>
    <li>閲覽の手順を簡潔にし、不要なpasswordやclickを要求しない事。</li>
    <ul>
      <li>惡い例：「閲覽したい場合はyesと入力して下さい」</li>
    </ul>
    <li>檢索し易い文字列やhashtagを使ひ、伏せ字や略稱を使はない事。</li>
    <ul>
      <li>惡い例：「szr」「mtr」「某character」</li>
    </ul>
  </ul>
</Page>