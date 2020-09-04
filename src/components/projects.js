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

const Projects = () => {
  const data = [
    {
      title: "Fifty Festival",
      description:
        "Landing page designed for an Music Festival. The purpose of this project was to learn about DOM manipulation and CSS animations. ",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://ldcjrstudio.github.io/fifty/",
      stack: "HTML5, CSS3, Javascript ES6",
      img: fifty,
    },
    {
      title: "Valencia Tennis",
      description:
        "Landing page design for an upcoming Tennis ball company. Here, I'm implementing use of mouse events and pure javascript DOM Manipulation. ",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://ldcjrstudio.github.io/Valencia-tennis/",
      stack: "HTML5, CSS3, Javascript ES6",
      img: valencia,
    },
    {
      title: "Jiffy",
      description:
        "Web application that allows the user to search for GIFs using the Giphy API. The core function of this project was to learn about REST APIs, React state, and event handling.",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://jiffy-api.netlify.app/",
      stack: "HTML5, CSS3, Javascript ES6, React, REST APIs",
      img: jiffy,
    },
    {
      title: "My First Web Dev portfolio",
      description:
        "I developed my first web dev portfolio used React router to create a PWA feels to it and a Javscript library to create a 3D effects.",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://leroyclarkejr.com",
      stack: "HTML5, SASS, Javascript ES6, React,",
      img: pv1,
    },
    {
      title: "Take Blaction",
      description:
        "A user centric platform which shares a collection of resources for people to take action for the benefit of Black lives. The site is currently live from using Webflow, however the soon to be released PWA is being developed using Gatsby.js, React hooks, and Netlify.",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "https://takeblaction.com",
      stack: "HTML5, SASS, Javascript ES6, React, Gatsby.js, GraphQL",
      img: tb,
    },

    {
      title: "Noir Technical",
      description:
        "Noir Technical Recruiting is a premier staffing agency seeking to solve the lack of minorities in tech spaces, especially senior level or higher. My role in this project is to define the brand's identity and website strategy, design, and development.",
      features: "Pure Javascript DOM manipulation, CSS animations on scroll.",
      url: "null",
      stack: "HTML5, SASS, Javascript ES6, React, Gatsby.js.",
      img: nt,
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

      <div className="github">
        <a href="https://github.com/ldcjrStudio">
          View more projects & my code on Github!
        </a>
      </div>
    </section>
  )
}

export default Projects
