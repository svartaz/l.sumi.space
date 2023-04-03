import { NextSeo } from "next-seo"

export const Page = props => <>
  <NextSeo title={props.title} />
  <h2>{props.title}</h2>
  {props.children}

  {props.sections}
</>


