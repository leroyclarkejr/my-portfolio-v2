import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "../styles/button.scss"

const MyButtonScroll = ({ title, variant }) => {
  function handleKeyPress(event) {
    if (event.key === "d") {
      scrollTo("#my-work")
    }
  }
  return (
    <div
      className="my-button"
      onClick={() => {
        scrollTo("#my-work")
      }}
      variant={variant}
      role="button"
      tabIndex="0"
      onKeyPress={handleKeyPress}
    >
      {title}
    </div>
  )
}
export default MyButtonScroll
