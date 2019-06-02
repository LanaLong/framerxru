import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const getMarckdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
        QM posts
      </h1>
    </div>

    <StaticQuery
      query={getMarckdownPosts}
      render={data => (
        <>
          <h4>{data.allMarkdownRemark.totalCount} статей</h4>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title}
                <span style={{ color: "#bbb" }}>
                  {" "}
                  — {node.frontmatter.date}
                </span>
              </h3>{" "}
              <p>{node.excerpt}</p>
            </div>
          ))}
        </>
      )}
    />
  </Layout>
)
