import React from "react"
// import VanillaTilt from "vanilla-tilt"

import BlogPost from "./blogpost"

import "../styles/index-blog.scss"

const IndexBlog = props => {
  return (
    <section id="index-blog">
      <div className="index-container">
        <div className="section-heading">
          <h3>Recent Blog Posts</h3>
        </div>

        <div className="#blog-list">
          <BlogPost />
        </div>
      </div>
    </section>
  )
}

export default IndexBlog
