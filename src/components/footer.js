import React from "react"
import { Link } from "gatsby"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const Footer = () => {
  return (
    <footer>
      <div className="footer-copy">
        <div className="external-links">
          <div className="content">
            <a href="google.com" to="https://github.com/ldcjrStudio">
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="google.com"
              to="https://www.linkedin.com/in/leroy-clarke-jr/"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="google.com"
              to="https://www.linkedin.com/in/leroy-clarke-jr/"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="google.com"
              to="https://www.linkedin.com/in/leroy-clarke-jr/"
            >
              <FacebookIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <Link to="/about">
          Designed & Developed by <span>Leroy</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
