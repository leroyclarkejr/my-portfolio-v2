import React from "react"
import MyButton from "./Button"
import scrollTo from "gatsby-plugin-smoothscroll"

import noise from "../data/images/noise.png"
import videoMP4 from "../data/images/gradient-final.mp4"
import videoWEBM from "../data/images/gradient-final.webm"
import down from "../data/images/down-arrow.svg"

// import HeroGradient from "../components/glsl/heroGradient"
import "../styles/hero.scss"
import poster from "../data/images/gradient-poster.png"

const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Hero = () => {
  // useEffect(() => {
  //   document.addEventListener("keydown", function (event) {
  //     console.log(`${event.key} with keycode ${event.keycode}`)
  //   })
  // }, [])

  function handleKeyPress(event) {
    if (event.key === "d") {
      scrollTo("#projects")
    }
  }
  return (
    <>
      <div id="gradient"></div>
      <section id="hero">
        <video
          playsInline
          muted
          data-object-fit="cover"
          className="my-video"
          width="100%"
          height="auto"
          pre-load="none"
          autoPlay={true}
          loop
          data-wf-ignore="true"
          poster={poster}
        >
          <source src={videoMP4} type="video/mp4" />
          <source src={videoWEBM} type="video/webm" />
        </video>
        <div className="home-hero-wrapper">
          <img src={noise} alt="noise" className="noise" />
        </div>
        <div className="hero-overlay"></div>
        <div
          className="down-arrow"
          onKeyPress={handleKeyPress}
          onClick={() => scrollTo("#projects")}
          role="button"
          tabIndex="0"
        >
          <img src={down} alt="down arrow" />
        </div>
        <div
          className="hero-copy"
          data-sal="slide-up"
          data-sal-easing="ease-out-bounce"
          dat-sal-duration="1000"
        >
          <h1>
            Hi, my name is <Highlight color="blue">Leroy</Highlight> & I'm a
            Front-end Web Developer.
          </h1>
          <h1
            className="sub"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-out-bounce"
            dat-sal-duration="2000"
          >
            I build modern, aesthetically pleasing website for ambitious people
            and brands.
          </h1>

          <div className="cta">
            <MyButton
              to="#projects"
              title="View work"
              onClick={() => scrollTo("#projects")}
            />
            <MyButton to="/about" title="More about me" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
