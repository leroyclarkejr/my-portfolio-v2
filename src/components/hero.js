import React from "react"
import sal from "sal.js"

const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const Hero = () => {
  return (
    <section id="hero" className="pattern-vertical-lines-xl">
      <div className="hero-overlay"></div>
      <div
        className="hero-copy"
        data-sal="slide-up"
        data-sal-easing="ease-out-bounce"
        dat-sal-duration="1000"
      >
        <h2>
          Hello, my name is <Highlight color="blue">Leroy Clarke Jr.</Highlight>
        </h2>
        <h3
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-out-bounce"
          dat-sal-duration="2000"
        >
          I’m a <Highlight color="blue">Front-end Developer</Highlight> focused
          on creating modern, aesthetically pleasing websites for ambitious
          people & brands.
        </h3>
      </div>
    </section>
  )
}

export default Hero
