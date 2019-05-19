import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Second page</h1>
    {/* <p>second</p> */}
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage
