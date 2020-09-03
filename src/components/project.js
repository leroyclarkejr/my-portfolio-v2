import React from "react"

const Project = ({ img, title, description, stack, features, url }) => {
  return (
    <div className="project">
      <div>
        <div className="image">
          <img src={img} />
        </div>

        <div className="project-copy">
          <h4>{title}</h4>
          <p>{description}</p>
          <h5>Stack</h5>
          <ul>
            <li>{stack}</li>
            <li>{features}</li>
          </ul>

          <a href={url}>See Live</a>
        </div>
      </div>
    </div>
  )
}

export default Project
