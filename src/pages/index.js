import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getMarckdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>First Page</h1> */}
    <h2>
      Наблюдение за <span>временем</span>
    </h2>
    {/* <p>{data}</p> */}
    <h3>Новое</h3>
    <h3>
      <Link to="/posts/">Все статьи</Link>
    </h3>

    <StaticQuery
      query={getMarckdownPosts}
      render={data => (
        <>
          <h4>{data.allMarkdownRemark.totalCount} статей</h4>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                <Link
                  to={`/posts${node.fields.slug}`}
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  {node.frontmatter.title}
                </Link>
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

    <Link to="/page-2/">Second page</Link>
  </Layout>
)

export default IndexPage
