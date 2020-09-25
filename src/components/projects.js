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

const Projects = props => {
  const data = [
    {
      title: "Take Blaction",
      description:
        "A user centric platform which shares a collection of resources for people to take action for the benefit of Black lives. This Progressive Web Application was developed using Gatsby.js, React hooks, and Netlify.",

      url: "https://takeblaction.com",
      stack: "HTML5, SASS, Javascript ES6, React, Gatsby.js, GraphQL",
      img: tb,
    },
    {
      title: "Jiffy",
      description:
        "Web application that allows the user to search for GIFs using the Giphy API. The core function of this project was to learn about REST APIs, React state, and event handling.",

      url: "https://jiffy-api.netlify.app/",
      stack: "HTML5, CSS3, Javascript ES6, React, REST APIs",
      img: jiffy,
    },
    {
      title: "Fifty Festival",
      description:
        "Landing page designed for a Music Festival. The purpose of this project was to learn about DOM manipulation and CSS animations. ",

      url: "https://ldcjrstudio.github.io/fifty/",
      stack: "HTML5, CSS3, Javascript ES6",
      img: fifty,
    },
    {
      title: "Valencia Tennis",
      description:
        "Landing page design for an upcoming Tennis ball company. Here, I'm implementing use of mouse events and pure Javascript DOM Manipulation. ",

      url: "https://ldcjrstudio.github.io/Valencia-tennis/",
      stack: "HTML5, CSS3, Javascript ES6",
      img: valencia,
    },

    {
      title: "My First Web Dev portfolio",
      description:
        "I developed my first web dev portfolio using React router to create a Progressive Web Application feel and a Javscript library to create 3D effects.",
      url: "https://leroyclarkejr.com",
      stack: "HTML5, SASS, Javascript ES6, React,",
      img: pv1,
    },

    {
      title: "Noir Technical",
      description:
        "Noir Technical Recruiting is a premier staffing agency seeking to solve the lack of minorities in tech spaces, especially senior level or higher. My role in this project is to define the brand's identity and website strategy, design, and development.",

      url: "#",
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
