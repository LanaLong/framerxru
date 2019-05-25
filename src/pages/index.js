import React from "react"
import { Link } from "gatsby"
import { Frame } from "framer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Frame
      name={"SliderApp"}
      min-width={"320px"}
      min-height={"320px"}
      background={"#242424"}
    >
      <Frame
        name={"Image"}
        scale={0.25}
        center
        size={480}
        image={"https://static.framer.com/api/bg.jpg"}
      />
      <Slider />
    </Frame>
    <Link to="/page-2/">Second page uuuuuuuuuuuuuuuuuuuuuuuuuu</Link>
  </Layout>
)

export default IndexPage
