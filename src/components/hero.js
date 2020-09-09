import React from "react"
import sal from "sal.js"

const Hero = () => {
  return (
    <section id="hero" className="pattern-vertical-lines-xl">
      <div className="hero-overlay"></div>
      <div
        className="hero-copy"
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        dat-sal-duration="1000"
      >
        <h2>Hello, my name is Leroy Clarke Jr.</h2>
        <h3
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-out-back"
          dat-sal-duration="2000"
        >
          I’m a Front-end Developer focused on creating modern, aesthetically
          pleasing websites for ambitious people & brands.
        </h3>
      </div>
    </section>
  )
}

export default Hero
