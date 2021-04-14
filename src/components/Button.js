import React from "react"
import { Link } from "gatsby"

import "../styles/button.scss"

const MyButton = ({ title, to, variant }) => {
  return (
    <Link className="my-button" to={to} variant={variant}>
      {title}
    </Link>
  )
}
export default MyButton
