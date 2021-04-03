import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/blog.scss"

//CONTENTFUL
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//COMPONENTS
import Layout from "../components/layout"

const BlogTemplate = ({ data }) => {
  const blogPost = data.allContentfulBlogPost.nodes[0]
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
    renderMark: {
      [MARKS.CODE]: text => <code className="pre">{text}</code>,
    },
  }

  return (
    <Layout>
      <section id="blog-post">
        <div className="hero">
          <Img
            fluid={blogPost.image.fluid}
            alt="hero-image"
            key={blogPost.image.fluid.src}
          />
          <h2>{blogPost.title}</h2>
          <h4>{blogPost.dateCreated}</h4>
        </div>

        {documentToReactComponents(blogPost.content.json, options)}
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
        id
        content {
          json
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
