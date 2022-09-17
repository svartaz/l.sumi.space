import matter from "gray-matter"
import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Link from 'next/link'
import { Me, Works, Fav, Misc } from '../components/home'

export async function getStaticProps() {
  const posts = (context => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      // FIXME
      const value: any = keys.map(context)[index]
      const document = matter(value.default)
      return {
        meta: document.data,
        slug,
      }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  const postsSorted = posts.sort((a, b) =>
    b.meta.id - a.meta.id
  ).reverse()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postsSorted))
    }
  }
}

const tabs = ['me', 'works', 'misc', 'posts', 'fav']

export default ({ posts }) => <Tabs>
  <TabList>{
    tabs.map((tab, i) =>
      <Tab key={i}><h2>{tab.toUpperCase()}</h2></Tab>
    )
  }</TabList>

  <TabPanel><Me /></TabPanel>
  <TabPanel><Works /></TabPanel>
  <TabPanel><Misc /></TabPanel>
  <TabPanel><Fav /></TabPanel>
  <TabPanel>
    {posts.map((post, i) =>
      <section key={i}>
        <h3>
          <Link href={`../posts/${post.slug}`} >{post.meta.date}</Link> {post.meta.title}
        </h3>
      </section>
    )}
  </TabPanel>
</Tabs >