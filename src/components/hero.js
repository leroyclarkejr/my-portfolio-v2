import React from "react"
import MyButton from "./Button"
import MyButtonScroll from "./ButtonScroll"
import scrollTo from "gatsby-plugin-smoothscroll"

import down from "../data/images/down-arrow.svg"
import { Tween, Reveal } from "react-gsap"

// import HeroGradient from "../components/glsl/heroGradient"
import "../styles/hero.scss"

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
      scrollTo("#my-work")
    }
  }

  return (
    <>
      <div id="gradient"></div>
      <section id="hero">
        <div className="hero-overlay"></div>
        <div
          className="down-arrow"
          onKeyPress={handleKeyPress}
          onClick={() => scrollTo("#my-work")}
          role="button"
          tabIndex="0"
          id="my-work"
        >
          <img src={down} alt="down arrow" />
        </div>

        <div className="container">
          <div className="hero-copy">
            <Reveal repeat>
              <Tween
                from={{ opacity: 0, y: "50px" }}
                to={{ opacity: 1, y: 0 }}
                stagger={0.2}
                duration={0.5}
                delay={0.75}
              >
                <h1>
                  Hi, my name is <Highlight color="blue">Leroy</Highlight> & I'm
                  a Front-end Web Developer.
                </h1>
                <h1 className="sub">
                  I build modern, aesthetically pleasing websites for ambitious
                  people and brands.
                </h1>

                <div className="cta">
                  <MyButtonScroll
                    onClick={() => scrollTo("#my-work")}
                    to="#"
                    title="View work"
                  />
                  <MyButton
                    to="/about"
                    title="More about me"
                    variant="secondary"
                  />
                </div>
              </Tween>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
