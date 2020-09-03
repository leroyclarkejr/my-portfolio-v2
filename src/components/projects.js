import React from "react"
// import VanillaTilt from "vanilla-tilt"
import Project from "./project.js"

//PHOTOS
import fifty from "../data/images/fifty.png"

const Projects = () => {
  const data = [
    {
      title: "Fifty Festival",
      description: "Personal project created to ",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://ldcjrstudio.github.io/fifty/",
      stack: "HTML5, CSS3, Javascript ES6",
      img: fifty,
    },
  ]
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
    </section>
  )
}

export default Projects
