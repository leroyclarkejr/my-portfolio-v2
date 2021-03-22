import { Link } from "gatsby"
import React, { useState, useRef } from "react"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
// import chroma from "chroma-js"

//COMPONENTS
import { useOnClickOutside } from "./hooks"
// import Progress from "./progress"

// import logowht from "../data/images/LDCJR-logo.png"
// import logoblk from "../data/images/LDCJR-logo-blk.png"
import github from "../data/icons/github.svg"
import linkedin from "../data/icons/linkedin.svg"
import logo from "../data/images/logo.svg"
// import paint from "../data/icons/paint6.svg"

import "../styles/header.scss"

const Header = () => {
  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <header id="header">
      {/* <Progress /> */}
      <div className="left-icon">
        <Link to="/">{"< Leroy />"}</Link>
      </div>

      <div id="nav" ref={node}>
        <button
          className="nav-button"
          open={open}
          onClick={() => setOpen(!open)}
          aria-label="open navigation menu"
        >
          <div
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
            }}
          />
          <div
            style={{
              opacity: open ? "0" : "1",
              transform: open ? "translateX(-20px)" : "translateX(0)",
            }}
          />
          <div
            style={{
              transform: open ? "rotate(-45deg)" : "rotate(0)",
            }}
          />
        </button>
        <nav
          className="fake-back nav-menu"
          style={{
            boxShadow: open ? "-5px 0px 10px #151515" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? "0s" : ".2s",
          }}
        ></nav>
        <nav
          className="fake-mid nav-menu"
          style={{
            boxShadow: open ? "-5px 0px 10px #151515" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? ".1s" : ".1s",
          }}
        ></nav>

        <nav
          className="nav-menu"
          open={open}
          // style={{ transform: open ? "translatey(0)" : "translatey(-100%)" }}
          style={{
            boxShadow: open ? "-5px 0px 10px #151515" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
            transitionDelay: open ? ".2s" : "0s",
          }}
        >
          <div className="internal-links">
            <Link to="/" activeClassName="active">
              Work
            </Link>

            <Link to="/about/" activeClassName="active">
              About
            </Link>
            <Link to="/blog/" activeClassName="active">
              Blog
            </Link>
          </div>

          <div className="external-links">
            <div className="email">
              <p>Stay in the know </p>
              <form>
                <input type="text"></input>
                <button>Arrow</button>
              </form>
            </div>
            <div>
              <p>
                Contact:{" "}
                <a href="google.com" className="mailto">
                  {" "}
                  hello@ldcjr.dev
                </a>
              </p>
            </div>
            <div className="content">
              <a href="google.com" to="https://github.com/ldcjrStudio">
                <img src={github} alt="Github Logo" />
                {/* Github */}
              </a>
              <a
                href="google.com"
                to="https://www.linkedin.com/in/leroy-clarke-jr/"
              >
                <img src={linkedin} alt="LinkedIn Logo" />
                {/* LinkedIn */}
              </a>
              <a
                href="google.com"
                to="https://www.linkedin.com/in/leroy-clarke-jr/"
              >
                <img src={linkedin} alt="LinkedIn Logo" />
                {/* Instagram */}
              </a>
              <a
                href="google.com"
                to="https://www.linkedin.com/in/leroy-clarke-jr/"
              >
                <img src={linkedin} alt="LinkedIn Logo" />
                {/* Facebook */}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
