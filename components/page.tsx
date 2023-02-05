import { NextSeo } from "next-seo"

export const Page = props => <>
  <NextSeo title={props.title} />
  <h2>{props.title}</h2>
  {props.children}
</>

export const Section = props => {
  const id = encodeURIComponent(props.title)

  return <section id={id}>
    <h3><a href={'#' + id}>#</a> {props.title}</h3>
    {props.children}
  </section>
}
