//REACT
import React, { useState, useEffect } from "react"

//STYLES

const Progress = () => {
  const [progress, setProgress] = useState(null)

  const calculateScrollDistance = () => {
    const bodyTag = document.querySelector("body")
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight
    const percentage = pixels / totalScrollableDistance
    const rounded = Math.round(percentage * 1000) / 10
    setProgress(`${rounded}`)
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollDistance)

    return () => window.removeEventListener("scroll", calculateScrollDistance)
  }, [calculateScrollDistance])

  return (
    <>
      <div
        id="progress"
        // style={{ width: `${progress}%` }}
      >
        <h4>{progress}%</h4>
      </div>
    </>
  )
}

export default Progress
