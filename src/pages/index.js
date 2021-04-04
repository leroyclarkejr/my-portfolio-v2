import React, { useState } from "react"

//components
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Projects from "../components/Projects.js"
import IndexBlog from "../components/index-blog.js"

//styles
import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/pattern.min.css"
import "../styles/global.scss"
import Progress from "../components/progress"

const IndexPage = () => {
  const [theme, setTheme] = useState("dark")

  return (
    <Layout className={`${theme}`}>
      <SEO title="Home" />
      <Hero />
      <Projects />
      <IndexBlog />
      <Progress />
    </Layout>
  )
}

export default IndexPage
