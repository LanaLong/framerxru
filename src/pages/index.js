import React from "react"
import { Link } from "gatsby"
// import { Frame } from "framer"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>First Page</h1>

    <Link to="/page-2/">Second page</Link>
  </Layout>
)

export default IndexPage
// {
//     allContentfulPost {
//         edges {
//             node {
//                 title
//                 author
//                 date
//                 private
//                 text {
//                     id
//                     text

//                 }
//             }
//         }
//     }
// }
