import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import pluspunkteLogo from "../images/pluspunkte2.png"
import shakehandsLogo from "../images/shakehands.webp"
import menstedoLogo from "../images/menstedo_logo.png"
import designBoardLogo from "../images/design_board_logo.png"

const ProjectsPage = ({ data, location }) => {
  const siteTitle = ''

  const projects = [
    {
      id: 1,
      slug: "pluspunkte",
      title: "pluspunkte",
      description: "An app to track your decisions like stocks.",
      functionality: "This app helps you track how your perspective on decisions or opinions changes over time. You can follow a single decision or compare how you feel about multiple options within the same decision. \n \n When you update your ratings, the changes are displayed visually similar to stock charts, so you can easily see how your views evolve. The app also prompts you to review and update open decisions each day through a simple, one-by-one process to keep everything current.",
      logo: pluspunkteLogo,
      screens: []
    },
    {
      id: 2,
      slug: "Shakehands",
      title: "Shakehands",
      description: "Meet the friends of your friends without an intro.",
      functionality: "Connect with friends of friends seamlessly. Discover new connections in your extended network without needing formal introductions.",
      logo: shakehandsLogo,
      screens: []
    },
    {
      id: 3,
      slug: "menstedo",
      title: "menstedo",
      description: "A cycle tracking app for teenagers that helps to navigate what is normal and what is not.",
      functionality: "menstedo is a menstrual cycle tracker built with a focus on education foe young girls. The main aim is to help them understand the different processes and be able to distinguish normal patterns from pathologies. Beyond tracking period dates and symptoms, it walks you through the phases of your cycle and what to expect during each one — covering topics like what's normal, what can go different, and when to see a doctor. \n \n The main unique feature is the dedicated learn section with interactive content on cycle basics, phases, and symptoms — making it a tool for understanding your body, not just recording data.",
      logo: menstedoLogo,
      screens: []
    },
    {
      id: 4,
      slug: "design-board",
      title: "design board",
      description: "A library for communicating design to AI agents.",
      functionality: "I noticed a repetitive difficulty to precisely communicate design intent to AI agents. Design_board is a library built to bridge that gap, allowing humans to recognize the desired pattern and give AI agents the structured design context they need to produce accurate, intentional output. \n \n v2 plans to evolve this into an MCP server to make it even more accessible to agents.",
      logo: designBoardLogo,
      screens: []
    }
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link to='/'> home </Link>
          <Link to="/research">research</Link>
          <Link className="selected" to="/projects">projects</Link>
          <Link to="/whatif">parallel universe</Link>
        </div>
        <h3> projects </h3>
        <div className="projects-container">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="project-box-link">
              <div className="project-box">
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                </div>
                {project.logo && (
                  <div className="project-logo">
                    <img src={project.logo} alt={`${project.title} logo`} />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

