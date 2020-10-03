// import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

// const BlogPostTemplate = ({ data, pageContext, location }) => {
//   const post = data.markdownRemark
//   const siteTitle = data.site.siteMetadata.title
//   const { previous, next } = pageContext

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <article itemScope itemType="http://schema.org/Article">
//         <header>
//           <h1
//             itemProp="headline"
//             style={{
//               marginTop: rhythm(1),
//               marginBottom: 0,
//             }}
//           >
//             {post.frontmatter.title}
//           </h1>
//           <p
//             style={{
//               ...scale(-1 / 5),
//               display: `block`,
//               marginBottom: rhythm(1),
//             }}
//           >
//             {post.frontmatter.date}
//           </p>
//         </header>
//         <section
//           dangerouslySetInnerHTML={{ __html: post.html }}
//           itemProp="articleBody"
//         />
//         <hr
//           style={{
//             marginBottom: rhythm(1),
//           }}
//         />
//         <footer>
//           <Bio />
//         </footer>
//       </article>

//       <nav>
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </Layout>
//   )
// }

import React from "react"
import { graphql } from "gatsby"

//CONTENTFUL
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//COMPONENTS
import Layout from "../components/layout"

const BlogTemplate = ({ data }) => {
  const firstRichContent = data.allContentfulBlogPost.nodes[0]
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    },
    renderMark: {},
  }
  return (
    <Layout>
      <section id="blog-post">
        <h1>{firstRichContent.title}</h1>
        <h6>{firstRichContent.dateCreated}</h6>
        {documentToReactComponents(firstRichContent.content.json, options)}
      </section>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        dateCreated(formatString: "MM/DD/YYYY")
        category
        content {
          json
        }
      }
    }
  }
`
