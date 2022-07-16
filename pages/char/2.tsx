import { TwitterTweetEmbed } from 'react-twitter-embed'
import style from './style.module.sass';

export default () => <>
  <h2>LON</h2>

  <section>
    <h3>SPECIFICATION</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <TwitterTweetEmbed tweetId='1488170066613272577' options={{ theme: "dark" }} />
    </div>
    <ul>
      <li>侖 [lɵn˧˩]</li>
      <li>淡い金に脱色した黑髮</li>
      <li>右耳朶に耳環</li>
      <li>夏の海に居さうな裝ひ (墨鏡, aloha襯衣)</li>
      <li>距離感の近さ</li>
      <li>Ja En Yue</li>
    </ul>
  </section>

  <section>
    <h3>ARTS</h3>
    <div className={style.tweets}>
      <TwitterTweetEmbed tweetId='1425831886060802056' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1429464857263239174' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1469924091708993536' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1470417761612734465' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1476165285476708353' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1477480446657437700' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1479083414209048578' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1483129180187672577' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1488170066613272577' options={{ theme: "dark" }} />
    </div>
  </section>
</>