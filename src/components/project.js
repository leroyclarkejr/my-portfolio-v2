import React from "react"
import sal from "sal.js"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Project = ({ img, title, description, stack, features, url, props }) => {
  return (
    <div className="project" key={title}>
      <div>
        <div
          className="image"
          data-sal="slide-up"
          data-sal-easing="ease-out-back"
          dat-sal-duration="2000"
        >
          <a href={url}>
            <img src={img} alt={title} />
          </a>
        </div>

        <div
          className="project-copy"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease-out-back"
          dat-sal-duration="2000"
        >
          <h4>{title}</h4>
          <p>{description}</p>
          <h5>Stack</h5>
          <ul>
            <li>{stack}</li>
          </ul>

          <OutboundLink href={url} className="url-link">
            {url === "#" ? "Coming Soon!" : "See Live"}
          </OutboundLink>
        </div>
      </div>
    </div>
  )
}

export default Project
