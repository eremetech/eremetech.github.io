import * as React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"

const WhatIfPage = ({ data, location }) => {
  const siteTitle = ''

  const handleGalleryClick = () => {
    navigate('/gallery')
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link to='/'> home </Link>
          <Link to="/research">research</Link>
          <Link to="/projects">projects</Link>
          <Link className="selected" to="/whatif">what if</Link>
        </div>
        <h3> what if </h3>
        <div className="blog-entry">
          <div className="blog-content">
            <p className="blog-text">
              if I had my own art collection, 
              <br/>
              that's what I'd hunt for
            </p>
            <div className="door-container" onClick={handleGalleryClick}>
              <div className="door-frame">
                <div className="door">
                  <div className="door-panel"></div>
                  <div className="door-handle"></div>
                </div>
              </div>
              <span className="gallery-label">open virtual gallery</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIfPage

