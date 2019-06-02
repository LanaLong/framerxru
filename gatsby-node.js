/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")

// **018 Programmatically Creating Slugs for Blog Posts with gatsby-node**
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // тогда создадим для этого нода кастомный slug
    const slug = createFilePath({ node, getNode, basePath: "posts" })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// **019 Programmatically Creating Pages with gatsby-node**
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
      },
    })
  })
}
