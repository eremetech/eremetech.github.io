import * as React from "react"
import { Link, withPrefix } from "gatsby"
import Layout from "../../components/layout"
import css from "../index.css"
import pluspunkteLogo from "../../images/pluspunkte2.png"
import pluspunkteScreen1 from "../../images/pluspunkte_screen1.png"
import pluspunkteScreen2 from "../../images/pluspunkte_screen2.png"
import pluspunkteScreen3 from "../../images/pluspunkte_screen3.png"
import pluspunkteScreen4 from "../../images/pluspunkte_screen4.png"
import pluspunkteScreen5 from "../../images/pluspunkte_screen5.png"
import shakehandsLogo from "../../images/handshakes.webp"
import menstedo_logo from "../../images/menstedo_logo.png"
import menstedo_screen1 from "../../images/menstedo_screen1.png"
import menstedo_screen2 from "../../images/menstedo_screen2.png"
import menstedo_screen3 from "../../images/menstedo_screen3.png"
import menstedo_screen4 from "../../images/menstedo_screen4.png"
import design_board_logo from "../../images/design_board_logo.png"
import design_board_screen1 from "../../images/design_board_screen1.png"
import design_board_screen2 from "../../images/design_board_screen2.png"

// Project data - in a real app, this could come from a CMS or markdown files
const projectsData = {
  pluspunkte: {
    title: "pluspunkte",
    description: "An app to track your decisions like stocks.",
    functionality: "This app helps you track how your perspective on decisions or opinions changes over time. You can follow a single decision or compare how you feel about multiple options within the same decision. \n \n When you update your ratings, the changes are displayed visually similar to stock charts, so you can easily see how your views evolve. The app also prompts you to review and update open decisions each day through a simple, one-by-one process to keep everything current.",
    logo: pluspunkteLogo,
    screens: [
      pluspunkteScreen1,
      pluspunkteScreen2,
      pluspunkteScreen3,
      pluspunkteScreen4,
      pluspunkteScreen5
    ]
  },
  shakehands: {
    title: "Shakehands",
    description: "Meet the friends of your friends without an intro.",
    functionality: "Connect with friends of friends seamlessly. Discover new connections in your extended network without needing introductions. You can type in a text prompt for who and where are you looking for and the app wil suggest you your 2nd degree connections to get in touch.",
    logo: shakehandsLogo,
    screens: [
      withPrefix("/videos/demo.mov")
    ]
  },
  menstedo: {
    title: "menstedo",
    description: "A cycle tracking app that actually explains what's happening.",
    functionality: "menstedo is a menstrual cycle tracker built with a focus on education alongside logging. Beyond tracking period dates and symptoms, it walks you through the phases of your cycle and what to expect during each one — covering topics like what's normal, what isn't, and when to see a doctor. \n \n The app features a visual cycle ring on the home dashboard, a calendar view, and a dedicated learn section with content on cycle basics, phases, and symptoms — making it a tool for understanding your body, not just recording data.",
    logo: menstedo_logo,
    screens: [
      menstedo_screen1,
      menstedo_screen2,
      menstedo_screen3,
      menstedo_screen4
    ]
  },
  "design-board": {
    title: "design board",
    description: "A library for communicating design to AI agents.",
    functionality: "Noticed a recurring gap in how design intent gets communicated to AI agents — context gets lost, visual decisions go unexplained, and the agent ends up guessing. design board is a library built to bridge that gap, giving AI agents the structured design context they need to produce accurate, intentional output. \n \n v2 plans to evolve this into an MCP (Model Context Protocol) server, making design knowledge a first-class, queryable resource for any agent in the workflow.",
    logo: design_board_logo,
    screens: [
      design_board_screen1,
      design_board_screen2
    ]
  }
}

const ProjectDetailPage = ({ params, pageContext, location }) => {
  const [lightbox, setLightbox] = React.useState(null)

  React.useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Escape") setLightbox(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    if (lightbox) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [lightbox])

  // Try multiple ways to get the slug (Gatsby File System Route API)
  let slug = params?.slug || pageContext?.params?.slug || pageContext?.slug
  
  // Fallback: extract from URL pathname
  if (!slug && location?.pathname) {
    const pathParts = location.pathname.split('/')
    slug = pathParts[pathParts.length - 1]
  }
  
  const project = projectsData[slug]

  if (!project) {
    return (
      <Layout location={location} title="">
        <div>
          <div className="navbar">
            <Link to='/'> home </Link>
            <Link to="/research">research</Link>
            <Link to="/projects">projects</Link>
            <Link to="/whatif">parallel universe</Link>
          </div>
          <h3>Project not found</h3>
          <Link to="/projects">← Back to projects</Link>
        </div>
      </Layout>
    )
  }

  const closeLightbox = () => setLightbox(null)

  return (
    <Layout location={location} title={project.title}>
      <div>
        {lightbox && (
          <div
            className="lightbox-backdrop"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged image"
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={e => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close enlarged image"
            >
              ×
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox-image"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
        <div className="navbar">
          <a href='/'> home </a>
          <a href="/research">research</a>
          <a href="/projects">projects</a>
          <a href="/whatif">parallel universe</a>
        </div>
        <Link to="/projects" className="back-link">← Back to projects</Link>
        <div className="project-detail">
          <div className="project-detail-header">
            {project.logo && (
              <div className="project-detail-logo">
                <button
                  type="button"
                  className="project-detail-logo-trigger"
                  onClick={() =>
                    setLightbox({
                      src: project.logo,
                      alt: `${project.title} logo`,
                    })
                  }
                  aria-label={`View ${project.title} logo larger`}
                >
                  <img src={project.logo} alt="" />
                </button>
              </div>
            )}
            <div className="project-detail-title-section">
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-description">{project.description}</p>
            </div>
          </div>
          
          <div className="project-detail-content">
            <div className="project-functionality">
              <h2>Functionality</h2>
              <p>{project.functionality}</p>
            </div>

            {project.screens && project.screens.length > 0 && (
              <div className="project-screens">
                <h2>Screens</h2>
                <div className="screens-grid">
                  {project.screens.map((screen, index) => {
                    const isVideo = typeof screen === 'string' 
                      ? screen.includes('.mov') || screen.includes('.mp4') || screen.includes('.webm')
                      : screen.toString().includes('.mov') || screen.toString().includes('.mp4') || screen.toString().includes('.webm');
                    
                    const alt = `${project.title} screen ${index + 1}`
                    return (
                      <div key={index} className="screen-item">
                        {isVideo ? (
                          <video 
                            src={screen} 
                            controls 
                            playsInline
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <button
                            type="button"
                            className="screen-item-image-trigger"
                            onClick={() =>
                              setLightbox({ src: screen, alt })
                            }
                            aria-label={`Open ${alt} full size`}
                          >
                            <img src={screen} alt={alt} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetailPage

