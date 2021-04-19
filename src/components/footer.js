import React from "react"
import { Link } from "gatsby"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <h6>
          Feel free to contact me if you're looking for a developer, have any
          questions, or just want to connect. Email me at{" "}
          <a className="link" href="mailto:lclarkejr94@gmail.com">
            lclarkejr94@gmail.com
          </a>
        </h6>
      </div>
      <div className="footer-copy">
        <div className="external-links">
          <div className="content">
            <OutboundLink
              target="_blank"
              href="https://www.instagram.com/leroyclarkejr"
              to="https://www.instagram.com/leroyclarkejr"
            >
              <InstagramIcon fontSize="large" />
            </OutboundLink>
            <OutboundLink
              target="_blank"
              href="https://github.com/ldcjrStudio"
              to="https://github.com/ldcjrStudio"
            >
              <GitHubIcon fontSize="large" />
            </OutboundLink>
            <OutboundLink
              target="_blank"
              href="https://www.linkedin.com/in/leroy-clarke-jr/"
              to="https://www.linkedin.com/in/leroy-clarke-jr/"
            >
              <LinkedInIcon fontSize="large" />
            </OutboundLink>

            <OutboundLink
              target="_blank"
              href="https://www.facebook.com/leroyclarkejr"
              to="https://www.facebook.com/leroyclarkejr"
            >
              <FacebookIcon fontSize="large" />
            </OutboundLink>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <p>
          Designed & Developed by{" "}
          <Link className="link" to="/about">
            Leroy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
