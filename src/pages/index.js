import React from "react"
import { graphql } from "gatsby"
import { Tween, Reveal } from "react-gsap"
import projectData from "../data/projectdata"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

//components
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
// import Projects from "../components/projects.js"
// import IndexBlog from "../components/index-blog.js"

//styles
import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/pattern.min.css"
import "../styles/global.scss"
import "../styles/typography.scss"
import "../styles/projects.scss"
import "../styles/project.scss"

// import Progress from "../components/progress"

export const query = graphql`
  query MyProjectImagesQuery {
    tb: file(name: { eq: "tb" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    jiffy: file(name: { eq: "jiffy" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fifty: file(name: { eq: "fifty" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pv1: file(name: { eq: "pv1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    valencia: file(name: { eq: "valencia" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    nt: file(name: { eq: "nt" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // const [theme, setTheme] = useState("dark")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <section id="projects">
        <div className="container">
          <div className="section-heading">
            <Reveal>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.5}>
                <h3>My Work.</h3>
              </Tween>
            </Reveal>
          </div>
          <div className="projects-container">
            {projectData.map(project => (
              <Reveal>
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  duration={0.25}
                >
                  <div
                    className="project"
                    key={Math.floor(Math.random() * 100)}
                  >
                    <div className="container">
                      <div className="image">
                        {/* <img src={project.img} alt={project.title} /> */}

                        <Img
                          // style={{ width: "100%", height: "100%" }}
                          fluid={
                            project.img === "tb"
                              ? data.tb.childImageSharp.fluid
                              : project.img === "jiffy"
                              ? data.jiffy.childImageSharp.fluid
                              : project.img === "valencia"
                              ? data.valencia.childImageSharp.fluid
                              : project.img === "pv1"
                              ? data.pv1.childImageSharp.fluid
                              : data.nt.childImageSharp.fluid
                          }
                          // fluid={`${data.tb.childImageSharp.fluid}`}
                        />
                      </div>

                      <div className="project-copy">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <h5>Stack</h5>
                        <ul>
                          <li>{project.stack}</li>
                        </ul>

                        <OutboundLink
                          href={project.url}
                          className="url-link my-button"
                        >
                          {project.url === "#" ? "Coming Soon!" : "See Live"}
                        </OutboundLink>

                        {/* <MyButton to="google.com" title="See live" /> */}
                      </div>
                    </div>
                  </div>
                </Tween>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* <Projects /> */}
      {/* <IndexBlog /> */}
      {/* <Progress /> */}
    </Layout>
  )
}

export default IndexPage
