import { Link } from "gatsby"

import chroma from "chroma-js"

import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"
import paint from "../data/icons/paint6.svg"

// import logowht from "../data/images/LDCJR-logo.png"
import logoblk from "../data/images/LDCJR-logo-blk.png"
import github from "../data/icons/github.svg"
import linkedin from "../data/icons/linkedin.svg"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  const handleColorChange = () => {
    const changer = document.querySelector("div.color-changer input")
    const bodyTag = document.querySelector("body")

    const colorchg = document.querySelector(".color-changer")
    const color = chroma(changer.value)

    if (color.luminance() < 0.3) {
      bodyTag.classList.add("dark")
      colorchg.classList.add("dark")
    } else {
      bodyTag.classList.remove("dark")
      colorchg.classList.remove("dark")
    }

    bodyTag.style.backgroundColor = changer.value
  }

  const handleClick = () => {
    console.log("ok")
    window.scrollTo({ top: 0, behavior: `smooth` })
  }

  return (
    <header id="header">
      <div className="image">
        <Link to="/">
          <img src={logoblk} alt="LDCJR Logo" />
        </Link>
      </div>

      <div id="nav" ref={node}>
        <div className="color-changer">
          {/* <p>Color</p> */}
          <img src={paint} alt="Change Background Color" />
          <input type="color" onChange={handleColorChange}></input>
        </div>
        <button
          className="nav-button"
          open={open}
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: open ? "#151515" : "#fcfefc",
          }}
        >
          <div
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
              background: open ? "#fcfefc" : "#151515",
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
              background: open ? "#fcfefc" : "#151515",
            }}
          />
        </button>
        <nav
          className="nav-menu"
          open={open}
          // style={{ transform: open ? "translatey(0)" : "translatey(-100%)" }}
          style={{
            boxShadow: open ? "-8px 0px 15px #151515" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
          }}
        >
          <Link to="/" activeClassName="active">
            Work
          </Link>

          <Link to="/about/" activeClassName="active">
            About
          </Link>
          <Link
            to="https://personal-things.s3.amazonaws.com/LDCJR-resume.pdf"
            // activeClassName="active"
          >
            Resume
          </Link>

          <div className="socials">
            <p>Connect with me</p>
            <div className="social-icons">
              <Link to="https://github.com/ldcjrStudio">
                <img src={github} />
              </Link>
              <Link to="https://www.linkedin.com/in/leroy-clarke-jr/">
                <img src={linkedin} />
              </Link>
            </div>
          </div>
          <div className="email">
            <p>Or drop me an email </p>
            <a href="mailto:hello@ldcjr.dev" className="mailto">
              hello@ldcjr.dev
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
