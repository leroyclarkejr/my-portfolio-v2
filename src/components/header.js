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
          // style={{
          //   backgroundColor: open ? "#fff" : "#000",
          // }}
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
          className="nav-menu"
          open={open}
          // style={{ transform: open ? "translatey(0)" : "translatey(-100%)" }}
          style={{
            opacity: open ? "1" : "0",
            transform: open ? "translatey(0)" : "translatey(-100%)",
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
        </nav>
      </div>
    </header>
  )
}

export default Header
