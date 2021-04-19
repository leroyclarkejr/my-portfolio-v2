import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { Link } from "gatsby"

import "../styles/button.scss"

const MyButtonScroll = ({ title, variant, to }) => {
  return (
    <div
      className="my-button"
      // to={to}
      onClick={() => {
        // e.preventDefault()
        scrollTo("#down-btn")
      }}
      variant={variant}
    >
      {title}
    </div>
  )
}
export default MyButtonScroll
