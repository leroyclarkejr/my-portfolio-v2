import React from "react"

// import { useScrollRestoration } from "gatsby-react-router-scroll"

//components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Hero from "../components/hero"
// import Projects from  "../components/Projects.js"

//styles

import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/pattern.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Projects />
    </Layout>
  )
}

export default IndexPage
