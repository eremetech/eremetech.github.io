import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const LandingPage = ({ data, location }) => {
  const siteTitle = ''

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link className="selected" to='/'> home </Link>
          <Link to="/research">research</Link>
          <Link to="/projects">projects</Link>
          <Link to="/whatif">parallel universe</Link>
        </div>
        <div className="hero">
          <div className="profile-pic">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/profile-pic.jpg"
              width={240}
              height={240}
              quality={95}
              alt="Profile picture"
            />
          </div>
          <div>
            <h2> Hi, &thinsp;I'm Mariia. </h2>
            <div>
              I am a Computer Science MSc student at ETH Zurich, researching how to enhance personalization, social adaptability, fairness, and pedagogical effectiveness of LLMs in Education.
              I currently collaborate with the <a href="https://lre.inf.ethz.ch/" target="_blank">Language, Reasoning and Education</a> group at ETH, advised by <a href="https://scholar.google.com/citations?user=Tpp9ZjoAAAAJ&hl=en" target="_blank">Professor Mrinmaya Sachan</a>, <a href="https://donya-rooein.github.io/" target="_blank">Donya Rooein</a>, and <a href="https://scholar.google.com/citations?user=pGNS3t8AAAAJ&hl&hl=en&oi=ao" target="_blank">Sankalan Pal Chowdhury</a>.
              Previously, I worked on a pedagogical chatbot to provide support to students in a graduate-level course at <a href="https://sustec.ethz.ch/" target="_blank">Group for Sustainability and Technology</a>, supervised by <a href="https://sustec.ethz.ch/people/alumni/phd-students-and-scientific-assistants/dr--malte-toetzke.html" target="_blank">Malte Toetzke</a>. I also collaborated with <a href="https://www.cs.yale.edu/homes/vishnoi/Home.html" target="_blank">Professor Nisheeth K. Vishnoi</a> at Yale University. 
              <br/>
              <br/>
              Driven by the belief that the expanding role of LLMs in everyday life demands a deeper understanding of their social awareness and moral reasoning, my research interests are focused on <strong>social intelligence, fairness, and moral judgment of LLMs in high-stakes social contexts</strong>. 
              I am interested both in analyzing and improving these capabilities of existing models, as well as in developing LLM-based frameworks that support humans in such domains.
              <br/><br/>
              The other half of my personality is passionate about <strong>building AI-powered products</strong> that change the way people engage with the world and help them accomplish more and with greater efficiency and impact. My dream is to find a significant problem that I deeply care about and build a startup with like-minded people to solve it.
              <br/><br/>
            </div>
            <br/>
            <div>
              <a href="mailto:emariia@ethz.ch">[email]</a>
              &emsp; <a href="https://github.com/mashaprostotak" target="_blank">[github]</a>
              &emsp; <a href="https://www.linkedin.com/in/mariia-eremeeva/" target="_blank">[linkedin]</a>
            </div>
          </div>
        </div>
      </div>
      {}

    </Layout>
  )
}

export default LandingPage
