import { Link } from "gatsby"
import React, { useState, useRef } from "react"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
// import chroma from "chroma-js"
// import { motion } from "framer-motion"
// import { Tween, Timeline, Reveal } from "react-gsap"
import { gsap } from "gsap/all"

//COMPONENTS
import { useOnClickOutside } from "./hooks"
import { OutboundLink } from "gatsby-plugin-google-analytics"

// import logowht from "../data/images/LDCJR-logo.png"
// import logoblk from "../data/images/LDCJR-logo-blk.png"
// import paint from "../data/icons/paint6.svg"

import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import "../styles/header.scss"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  const handleNavOpen = () => {
    const navMenuItems = document.querySelectorAll("nav a")
    setOpen(!open)
    if (open === false) {
      const menuAppear = gsap.timeline()
      menuAppear.set(navMenuItems, { opacity: 0 }).to(navMenuItems, {
        opacity: 1,
        duration: 0.25,
        delay: 0.7,
        stagger: 0.1,
      })
    }
  }

  return (
    <header id="header">
      <div className="left-icon">
        <Link to="/">Leroy Clarke Jr.</Link>
      </div>

      <div id="nav" ref={node}>
        <button
          className="nav-button"
          open={open}
          onClick={handleNavOpen}
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
          className="nav-menu main-nav-menu "
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
            <OutboundLink
              href="https://personal-things.s3.amazonaws.com/LeroyClarkejr-Aug.pdf"
              target="_blank"
            >
              Resume
            </OutboundLink>
            {/* <Link to="/blog/" activeClassName="active">
              Blog
            </Link> */}
          </div>

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
        </nav>
      </div>
    </header>
  )
}

export default Header
