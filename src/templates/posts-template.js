import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/posts/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/blog/${String(currentPage - 1)}`
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
          QM posts
        </h1>
      </div>
      <h4>{data.allMarkdownRemark.totalCount} статей</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={`/posts${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
            <span style={{ color: "#bbb" }}> — {node.frontmatter.date}</span>
          </h3>{" "}
          <p>{node.excerpt}</p>
        </div>
      ))}

      {/* Pagination Links */}
      <div>
        {!isFirstPage && (
          <Link to={prevPage} rel="prev">
            Prev Page
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index} to={`/posts/${index === 0 ? "" : index + 1}`}>
            {index + 1}
          </Link>
        ))}

        {!isLastPage && (
          <Link to={nextPage} rel="next">
            Next Page
          </Link>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(skip: $skip, limit: $limit) {
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
