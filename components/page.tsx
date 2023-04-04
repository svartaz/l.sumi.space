import { NextSeo } from "next-seo"
import { useEffect } from "react"
import tocbot from "tocbot"

export const Page = props => {
  useEffect(() => {
    tocbot.init({
      contentSelector: 'main',
      headingSelector: 'h3',
      hasInnerContainers: true,
      scrollContainer: 'main'
    })

    return () => tocbot.destroy()
  }, [])

  return <>
    <NextSeo title={props.title} />

    {props.title == '' ? <></> : <h2>{props.title}</h2>}
    {props.children}
  </>
}