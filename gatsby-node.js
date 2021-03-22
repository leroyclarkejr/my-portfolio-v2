/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-template.js`)
//   const result = await graphql(
//     `
//       {
//         allContentfulBlogPost {
//           edges {
//             node {
//               title
//               category
//               slug
//               dateCreated(formatString: "mm/dd/yyyy")
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog posts pages.
//   const posts = result.data.allContentfulBlogPost.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: `blog/${post.node.slug}`,
//       component: blogPost,
//       context: {
//         slug: post.node.slug,
//         category: post.node.category,
//         previous,
//         next,
//       },
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
