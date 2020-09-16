import React from "react"

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
            Email me at <a mailto="hello@ldcjr.dev">hello@ldcjr.dev</a> !
          </p>
          <div>
            <a href="https://github.com/ldcjrStudio">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/leroy-clarke-jr/">
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <a href="https://ldcjr.dev/about">
          Designed & Developed by <span>ME</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
