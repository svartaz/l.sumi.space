import { NextSeo } from 'next-seo'

const title = '漢字を用ゐたJa語助動詞の略記'
export default () => <>
  <NextSeo title={title} />
  <h2>{title}</h2>

  <p>日本語の助動詞を漢字を用ゐて可逆に省略する事を考へる。Twitterなどで有用だらう。</p>

  <table>
    <tr>
      <th>否定</th>
      <td>未然-ない</td>
      <td>不</td>
    </tr>
    <tr>
      <th>受動</th>
      <td>未然-れる</td>
      <td>被</td>
    </tr>
    <tr>
      <th>可能</th>
      <td>未然-れる</td>
      <td>可</td>
    </tr>
    <tr>
      <th>尊敬</th>
      <td>未然-れる</td>
      <td>給</td>
    </tr>
    <tr>
      <th>使役</th>
      <td>未然-させる</td>
      <td>令</td>
    </tr>
    <tr>
      <th>推量</th>
      <td>未然-よう</td>
      <td>應</td>
    </tr>
    <tr>
      <th>希望</th>
      <td>連用-たい</td>
      <td>欲</td>
    </tr>
    <tr>
      <th>丁寧</th>
      <td>連用-ます</td>
      <td>候</td>
    </tr>
    <tr>
      <th>完了</th>
      <td>連用-た</td>
      <td>了</td>
    </tr>
    <tr>
      <th>義務</th>
      <td>終止-べき</td>
      <td>須</td>
    </tr>
    <tr>
      <th>變化</th>
      <td>連體-樣に成る</td>
      <td>成</td>
    </tr>
    <tr>
      <th>形容</th>
      <td>連體-</td>
      <td>之</td>
    </tr>
  </table>

  <table style={{ marginTop: '2ex' }}>
    <tr>
      <td>子に食はせられなくなった</td>
      <td>子に 食-令可不成了</td>
    </tr>
    <tr>
      <td>これを買はれたいですか</td>
      <td>此を 買-給欲候か</td>
    </tr>
    <tr>
      <td>愛した人に選ばれる樣に成らうよ</td>
      <td>愛了之 人に 選-被成應よ</td>
    </tr>
  </table>
</>