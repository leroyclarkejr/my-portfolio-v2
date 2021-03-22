import React, { useEffect } from "react"
import MyButton from "./Button"
import scrollTo from "gatsby-plugin-smoothscroll"

import noise from "../data/images/noise.png"
import video from "../data/images/gradient-final.mp4"
import down from "../data/images/down-arrow.svg"

// import HeroGradient from "../components/glsl/heroGradient"
import "../styles/hero.scss"

const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Hero = () => {
  return (
    <>
      <div id="gradient"></div>
      <section id="hero">
        <video
          playsInline
          muted
          data-object-fit="cover"
          class="my-video"
          width="100%"
          height="auto"
          autoPlay={true}
          loop
          data-wf-ignore="true"
        >
          <source src={video} type="video/mp4" data-wf-ignore="true" />
        </video>
        <div className="home-hero-wrapper">
          <img src={noise} alt="noise" className="noise" />
        </div>
        <div className="hero-overlay"></div>
        <div className="down-arrow" onClick={() => scrollTo("#projects")}>
          <img src={down} />
        </div>
        <div
          className="hero-copy"
          data-sal="slide-up"
          data-sal-easing="ease-out-bounce"
          dat-sal-duration="1000"
        >
          <h1>
            Hi, my name is <Highlight color="blue">Leroy Clarke Jr.</Highlight>{" "}
            & I'm a Front-end Developer
          </h1>
          <h1
            className="sub"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-out-bounce"
            dat-sal-duration="2000"
          >
            I build modern, aesthetically pleasing website for ambitious people
            an brands.
          </h1>

          <div className="cta">
            <MyButton to="google.com" title="View work" />
            <MyButton
              to="google.com"
              title="More about me"
              className="secondary"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
