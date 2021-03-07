import React from "react"
import sal from "sal.js"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import MyButton from "../components/Button"

const Project = ({ img, title, description, stack, features, url, props }) => {
  return (
    <div className="project" key={Math.random()}>
      <div className="contnet">
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

          {/* <OutboundLink href={url} className="url-link">
            {url === "#" ? "Coming Soon!" : "See Live"}
          </OutboundLink> */}

          <MyButton title="See live" />
        </div>
      </div>
    </div>
  )
}

export default Project
