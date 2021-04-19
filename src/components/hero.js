import React from "react"
import MyButton from "./Button"
import MyButtonScroll from "./ButtonScroll"
import scrollTo from "gatsby-plugin-smoothscroll"

import noise from "../data/images/noise.png"
import videoMP4 from "../data/images/gradient-final.mp4"
import videoWEBM from "../data/images/gradient-final.webm"
import down from "../data/images/down-arrow.svg"

// import HeroGradient from "../components/glsl/heroGradient"
import "../styles/hero.scss"
import poster from "../data/images/gradient-poster.jpeg"

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

  function handleProjectScroll() {
    scrollTo("#projects")
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
          id="down-btn"
        >
          <img src={down} alt="down arrow" />
        </div>

        <div className="container">
          <div className="hero-copy">
            <h1>
              Hi, my name is <Highlight color="blue">Leroy</Highlight> & I'm a
              Front-end Web Developer.
            </h1>
            <h1 className="sub">
              I build modern, aesthetically pleasing websites for ambitious
              people and brands.
            </h1>

            <div className="cta">
              <MyButtonScroll
                onClick={() => scrollTo("#projects")}
                to="#"
                title="View work"
              />
              <MyButton to="/about" title="More about me" variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
