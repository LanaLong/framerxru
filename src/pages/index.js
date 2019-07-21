import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const getMarckdownPosts = graphql`
//   {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//           frontmatter {
//             title
//             date
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

const IndexPage = () => (
  //   <Layout>
  <>
    <SEO title="QM::Experience" />
    <h1>
      Наблюдение за <span>временем</span>
    </h1>

    <h3>
      <Link to="/posts/">Все статьи</Link>
    </h3>
  </>
  //   </Layout>
)

export default IndexPage
