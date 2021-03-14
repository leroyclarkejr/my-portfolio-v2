import React from "react"
import { Link } from "gatsby"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

import logowht from "../data/images/LDCJR-logo.png"
import github from "../data/icons/github.svg"
import linkedin from "../data/icons/linkedin.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-copy">
        <div className="footer-left">
          <img src={logowht} alt="LDCJR Logo" />

          <div>
            <h3>Leroy D. Clarke Jr.</h3>
            <h4>Front-end Developer</h4>
          </div>
        </div>

        <div className="contact-me">
          <h5>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.{" "}
          </h5>
          <p>
            Email me at{" "}
            <a href="google.com" mailto="hello@ldcjr.dev">
              hello@ldcjr.dev
            </a>{" "}
            !
          </p>
          <div>
            <a href="https://github.com/ldcjrStudio">
              <img src={github} alt="Linked to Github" />
            </a>

            <a href="https://www.linkedin.com/in/leroy-clarke-jr/">
              <img src={linkedin} alt="Link to LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <Link to="/about">
          Designed & Developed by <span>ME</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
