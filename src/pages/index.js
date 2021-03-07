import React from "react"

//components
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import data from "../data/projectdata"
import Project from "../components/project"
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
      <section id="projects">
        <div className="projects-container">
          {data.map(data => (
            <Project {...data} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
