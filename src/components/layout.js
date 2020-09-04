/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import chroma from "chroma-js"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleColorChange = () => {
    const changer = document.querySelector("div.color-changer input")
    const bodyTag = document.querySelector("body")
    const projects = document.querySelector("#projects")
    const project = document.querySelectorAll("div.project-copy")

    const colorchg = document.querySelector(".color-changer p")
    const color = chroma(changer.value)

    if (color.luminance() < 0.3) {
      bodyTag.classList.add("dark")
      colorchg.classList.add("dark")

      // projects.classList.add("dark")

      // for (let i = 0; i < project.length; ++i) project[i].classList.add("dark")
    } else {
      bodyTag.classList.remove("dark")
      colorchg.classList.remove("dark")
      // projects.classList.remove("dark")

      // for (let i = 0; i < project.length; ++i)
      //   project[i].classList.remove("dark")
    }

    bodyTag.style.backgroundColor = changer.value

    console.log(window.location.herf)
  }

  return (
    <>
      <Header />

      <main id="content">{children}</main>
      <div className="color-changer">
        <p>Color</p>
        <input type="color" onChange={handleColorChange}></input>
      </div>
      <footer>
        <div className="footer-copy">
          <h2>Ready to chat?</h2>

          <div className="contact-me">
            <h5>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.{" "}
            </h5>
            <p>
              Email me at <a>hello@ldcjr.dev</a> !
            </p>
          </div>
        </div>
        <div className="footer-bar">
          <a href="https://www.gatsbyjs.org">
            Designed & Developed by <span>ME</span>
          </a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
