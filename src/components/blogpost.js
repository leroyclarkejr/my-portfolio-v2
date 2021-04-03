import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import MyButton from "../components/Button"

import "../styles/blogpost.scss"

const BlogPost = ({ img, title, description, stack, features, url, props }) => {
  return (
    <div className="blog-post" key={Math.floor(Math.random() * 100)}>
      <div className="container">
        <div className="image">
          <img src={img} alt={title} />
        </div>

        <div className="project-copy">
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, suscipit.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus quae ipsum nobis sequi maxime provident iusto impedit
            id totam aperiam.
          </p>
          <div className="bottom">
            <h6>Jan 26th</h6>
            <h5></h5>

            <OutboundLink href={url} className="url-link my-button">
              Read More
            </OutboundLink>
          </div>

          {/* <MyButton to="google.com" title="See live" /> */}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
