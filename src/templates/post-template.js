import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data: post }) => (
  <Layout>
    <h1>{post.markdownRemark.frontmatter.title}</h1>
    <h4>
      Время чтения: {post.markdownRemark.timeToRead}{" "}
      {/* {post.markdownRemark.timeToRead > 1 ? "минута" : "минут"} */}
      {post.markdownRemark.timeToRead === 1
        ? "минута"
        : [2, 3, 4].includes(post.markdownRemark.timeToRead)
        ? "минуты"
        : "минут"}
    </h4>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
