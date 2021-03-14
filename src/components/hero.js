import React, { useEffect } from "react"
import $ from "jquery"
import MyButton from "./Button"

// import HeroGradient from "../components/glsl/heroGradient"
import "../styles/hero.scss"

const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Hero = () => {
  useEffect(() => {
    var colors = [
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0],
    ]

    var step = 0
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3]

    //transition speed
    var gradientSpeed = 0.003

    function updateGradient() {
      if ($ === undefined) return

      var c0_0 = colors[colorIndices[0]]
      var c0_1 = colors[colorIndices[1]]
      var c1_0 = colors[colorIndices[2]]
      var c1_1 = colors[colorIndices[3]]

      var istep = 1 - step
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0])
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1])
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2])
      var color1 = "rgba(" + r1 + "," + g1 + "," + b1 + ", 0.5)"

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0])
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1])
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2])
      var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + ", 0.5)"

      $("#hero")
        .css({
          background:
            "-webkit-gradient(linear, left top, right top, from(" +
            color1 +
            "), to(" +
            color2 +
            "))",
        })
        .css({
          background:
            "-moz-linear-gradient(left, " +
            color1 +
            " 0%, " +
            color2 +
            " 100%)",
        })

      step += gradientSpeed
      if (step >= 1) {
        step %= 1
        colorIndices[0] = colorIndices[1]
        colorIndices[2] = colorIndices[3]

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] =
          (colorIndices[1] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length
        colorIndices[3] =
          (colorIndices[3] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length
      }
    }

    setInterval(updateGradient, 10)
  }, [])
  return (
    <>
      <div id="gradient"></div>
      <section id="hero">
        <div className="hero-overlay"></div>
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
