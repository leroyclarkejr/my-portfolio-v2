import React from "react"
import Project from "./project.js"
import data from "../data/projectdata"
import { Tween, Reveal } from "react-gsap"
import "../styles/projects.scss"

const Projects = props => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <Reveal>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.5}>
              <h3>My Work.</h3>
            </Tween>
          </Reveal>
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
