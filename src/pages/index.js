import React from "react"

//components
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import data from "../data/projectdata"
import Project from "../components/project"
import Projects from "../components/Projects.js"
import IndexBlog from "../components/index-blog.js"

//styles
import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/pattern.min.css"
import "../styles/global.scss"
import Progress from "../components/progress"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects />
      <IndexBlog />
      <Progress />
    </Layout>
  )
}

export default IndexPage
