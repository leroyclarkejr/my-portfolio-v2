import React from "react"

import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="">
      {/* <div className="hero-copy">
        <h2>Hello, my name is Leroy Clarke Jr.</h2>
        <h3>
          I’m a Front-end Developer focused on creating modern, aesthetically
          pleasing websites for ambitious people & brands.
        </h3>
      </div> */}
      <AnimatePresence>
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>Hello, my name is Leroy Clarke Jr.</h1>
          <h3>
            I’m a Front-end Developer focused on creating modern, aesthetically
            pleasing websites for ambitious people & brands.
          </h3>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Hero
