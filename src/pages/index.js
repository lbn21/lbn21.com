import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { mb2 } from "../components/layout.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello there!</h1>
    <p>Coming soon!!</p>
  </Layout>
)

export default IndexPage
