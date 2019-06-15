import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/posts/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/posts/${String(currentPage - 1)}`
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          maxWidth: 500,
          margin: "0, auto",
        }}
      >
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
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }

          id
          frontmatter {
            title
            date(formatString: "D MMMM YYYY", locale: "ru")
          }
          excerpt(pruneLength: 200, truncate: true)
        }
      }
    }
  }
`