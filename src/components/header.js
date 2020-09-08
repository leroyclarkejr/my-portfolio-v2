import { Link } from "gatsby"
import PropTypes from "prop-types"

import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"

import logowht from "../data/images/LDCJR-logo.png"
import logoblk from "../data/images/LDCJR-logo-blk.png"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <header id="header">
      <div className="image">
        <Link to="/">
          <img src={logoblk} />
        </Link>
      </div>

      {/* <nav>
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
      </nav> */}

      <div id="nav" ref={node}>
        <button
          className="nav-button"
          open={open}
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: open ? "#19323c" : "#fcfefc",
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
            boxShadow: open ? "-8px 0px 15px" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
          }}
        >
          <Link
            to="/"
            // activeClassName="active"
          >
            Work
          </Link>

          <Link
            to="/about/"
            // activeClassName="active"
          >
            About
          </Link>
          <Link
            to="https://personal-things.s3.amazonaws.com/LDCJR-resume.pdf"
            // activeClassName="active"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
