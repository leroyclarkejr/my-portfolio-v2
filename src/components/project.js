import React from "react"

const Project = ({ img, title, description, stack, features, url }) => {
  return (
    <div className="project" key={title}>
      <div>
        <div className="image">
          <a href={url}>
            <img src={img} />
          </a>
        </div>

        <div className="project-copy">
          <h4>{title}</h4>
          <p>{description}</p>
          <h5>Stack</h5>
          <ul>
            <li>{stack}</li>
          </ul>

          <a href={url} className="url-link">
            See Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
