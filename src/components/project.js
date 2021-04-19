import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Tween, Reveal } from "react-gsap"

import "../styles/project.scss"

const Project = ({ img, title, description, stack, features, url, props }) => {
  return (
    <Reveal>
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.25}>
        <div className="project" key={Math.floor(Math.random() * 100)}>
          <div className="container">
            <div className="image">
              <img src={img} alt={title} />
            </div>

            <div className="project-copy">
              <h4>{title}</h4>
              <p>{description}</p>
              <h5>Stack</h5>
              <ul>
                <li>{stack}</li>
              </ul>

              <OutboundLink href={url} className="url-link my-button">
                {url === "#" ? "Coming Soon!" : "See Live"}
              </OutboundLink>

              {/* <MyButton to="google.com" title="See live" /> */}
            </div>
          </div>
        </div>
      </Tween>
    </Reveal>
  )
}

export default Project
