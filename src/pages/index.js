import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {mb2} from "../components/layout.module.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello there!</h1>
    <p>Coming soon!!</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={85}
      formats={["auto", "webp"]}
      alt="A Gatsby astronaut"
      className={mb2}
    />
  </Layout>
)

export default IndexPage
