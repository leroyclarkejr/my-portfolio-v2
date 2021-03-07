import React from "react"
// import VanillaTilt from "vanilla-tilt"
import Project from "./project.js"

//PHOTOS
import fifty from "../data/images/fifty.jpg"
import valencia from "../data/images/valencia.jpg"
import pv1 from "../data/images/pv1.jpg"
import tb from "../data/images/tb.jpg"
import nt from "../data/images/nt.jpg"
import jiffy from "../data/images/jiffy.jpg"

import data from {"../"}

const Projects = props => {
  
  return (
    <section id="projects">
      <div className="section-heading">
        <h3>What I've been working on</h3>
      </div>

      <div className="projects-container">
        {data.map(data => (
          <Project {...data} />
        ))}
      </div>

      <div
        className="github"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease-out-back"
        dat-sal-duration="2000"
      >
        <a href="https://github.com/ldcjrStudio">
          View my code and more projects on Github!
        </a>
      </div>
    </section>
  )
}

export default Projects
