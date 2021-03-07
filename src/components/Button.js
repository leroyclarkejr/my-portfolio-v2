import React from "react"
import { Link } from "gatsby"

import "../styles/button.scss"

const MyButton = ({ title, to, className }) => {
  return (
    <Link className="my-button" to={to}>
      {title}
    </Link>
  )
}
export default MyButton
