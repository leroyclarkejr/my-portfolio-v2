/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import $ from "jquery"

import Header from "./header"
import Footer from "./footer"
// import SEO from "../components/seo"
// import { gsap } from "gsap/all"

import "./layout.css"

const Layout = ({ children }) => {
  // useEffect(() => {
  //   headerFadeIn()
  // }, [])

  // const headerFadeIn = () => {
  //   const header = document.querySelector("#header")

  //   const headerTimeline = gsap.timeline()
  //   headerTimeline
  //     .set(header, { opacity: 0, y: "-66px", duration: 1 })
  //     .to(header, { opacity: 1, y: 0, duration: 1, delay: 1 })
  // }
  return (
    <>
      <Header />
      {/* <SEO /> */}

      <main id="content">{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
