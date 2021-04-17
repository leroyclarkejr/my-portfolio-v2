import React from "react"
// import VanillaTilt from "vanilla-tilt"
import Project from "./project.js"

import data from "../data/projectdata"

import "../styles/projects.scss"

const Projects = props => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <h3>My Work.</h3>
        </div>
        <div className="projects-container">
          {data.map(data => (
            <Project {...data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
