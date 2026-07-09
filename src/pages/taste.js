import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"

import cthdrlShot from "../images/taste/cthdrl.jpg"
import digilabShot from "../images/taste/digilab.jpg"
import heyparkerShot from "../images/taste/heyparker.jpg"
import cashappShot from "../images/taste/cashapp.jpg"
import gsapShot from "../images/taste/gsap.jpg"
import visualjournalShot from "../images/taste/visualjournal.jpg"
import driftimeShot from "../images/taste/driftime.jpg"
import redisagencyShot from "../images/taste/redisagency.jpg"

const SiteCard = ({ url, title, image }) => (
  <a className="taste-card-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={title}>
    <img src={image} alt={title} className="taste-card-image" />
  </a>
)

const InstagramEmbed = ({ url }) => {
  React.useEffect(() => {
    const process = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    if (window.instgrm) {
      process()
      return
    }

    const existingScript = document.getElementById("instagram-embed-script")
    if (existingScript) {
      existingScript.addEventListener("load", process)
      return () => existingScript.removeEventListener("load", process)
    }

    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = process
    document.body.appendChild(script)
  }, [url])

  return (
    <div className="taste-instagram-card">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: 0,
          maxWidth: "100%",
          minWidth: 0,
          width: "100%",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View on Instagram
        </a>
      </blockquote>
    </div>
  )
}

const TastePage = ({ data, location }) => {
  const siteTitle = ''

  const sites = {
    cthdrl: { url: "https://cthdrl.co/", title: "cthdrl", image: cthdrlShot },
    digilab: { url: "https://digilab.co/", title: "digilab", image: digilabShot },
    heyparker: { url: "https://heyparker.ai/?ref=landing.love", title: "Parker", image: heyparkerShot },
    cashapp: { url: "https://cash.app/", title: "Cash App", image: cashappShot },
    gsap: { url: "https://gsap.com/", title: "GSAP", image: gsapShot },
    visualjournal: { url: "https://visualjournal.it/?ref=httpster.net", title: "Visual Journal", image: visualjournalShot },
    driftime: { url: "https://2022.driftime.com/?ref=httpster.net", title: "Driftime — 2022 Impact Report", image: driftimeShot },
    redisagency: { url: "https://redis.agency/en", title: "Redis Agency", image: redisagencyShot },
  }

  // Fixed two-column layout: items never move between columns while the
  // Instagram embeds hydrate. Row 1 (the two top sites) is swapped with row 2,
  // and row 3 (the next two sites) is swapped with row 4 — real reordering,
  // not a visual shift, so nothing leaves a gap or gets pushed off the column.
  const columns = [
    [
      { type: "instagram", url: "https://www.instagram.com/p/DYmBJUujerL/" },                       // thierrylechanteur — pastel beach kiosk
      { type: "site", key: "cthdrl" },                                                              // dark, editorial type
      { type: "instagram", url: "https://www.instagram.com/reel/DZe4-i4NAnT/" },                    // brontemarkwick — apples reel
      { type: "site", key: "cashapp" },                                                             // vivid green
      { type: "instagram", url: "https://www.instagram.com/p/DZABAN8DL_W/?img_index=3" },           // giz.akdag — blue house, tulips
      { type: "site", key: "driftime" },                                                            // pink-mauve satellite texture
      { type: "instagram", url: "https://www.instagram.com/reel/DYfN9tXtM_d/" },                    // mackkeane — dark reel
      { type: "instagram", url: "https://www.instagram.com/p/DadBJNCjATs/?img_index=2&igsh=ZDZ6YnM0ZWtmZWZ6" }, // giz.akdag — feeling green
      { type: "site", key: "visualjournal" },                                                       // light photo grid
      { type: "instagram", url: "https://www.instagram.com/p/DZxjPiAijnt/?igsh=Y3JxazR4ejl2bHB2" }, // notre.arte — maroon dome
    ],
    [
      { type: "instagram", url: "https://www.instagram.com/p/DYIdmnqGug-/" },                       // designmilk — pink lamp
      { type: "site", key: "digilab" },                                                             // cream, soft
      { type: "instagram", url: "https://www.instagram.com/reel/DX6ZxtSMrJj/" },                    // chaudsoleil — hotel reel
      { type: "site", key: "redisagency" },                                                         // black, red radish
      { type: "instagram", url: "https://www.instagram.com/p/DY7S4haxOEu/" },                       // thetinybigsister — knitted houses
      { type: "site", key: "gsap" },                                                                // dark, cream type
      { type: "instagram", url: "https://www.instagram.com/p/DYpvPuuDP8f/?img_index=2" },           // giz.akdag — wait for it
      { type: "site", key: "heyparker" },                                                           // cream, retro Mac
      { type: "instagram", url: "https://www.instagram.com/reel/DX2U83Syd6Y/" },                    // scott.schaible — dark reel
      { type: "instagram", url: "https://www.instagram.com/p/DZxZBdXjMhn/?img_index=2" },           // notre.arte — evening terrace
    ],
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link to='/'> home </Link>
          <Link to="/research">research</Link>
          <Link to="/projects">projects</Link>
          <Link className="selected" to="/taste">taste</Link>
          <Link to="/whatif">parallel universe</Link>
        </div>
        <h3> taste </h3>
        <p className="taste-intro">
          Aesthetic matters a lot to me.  I constantly draw inspiration visually and conceptually from what's around me.
          Here's a small, evolving collection of things I find appealing.
        </p>
        <div className="taste-grid">
          {columns.map((column, columnIndex) => (
            <div className="taste-col" key={columnIndex}>
              {column.map((item, index) =>
                item.type === "site" ? (
                  <SiteCard key={index} {...sites[item.key]} />
                ) : (
                  <InstagramEmbed key={index} url={item.url} />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <>
    <link rel="preconnect" href="https://www.instagram.com" />
    <link rel="preconnect" href="https://static.cdninstagram.com" />
    <link rel="preconnect" href="https://scontent.cdninstagram.com" />
  </>
)

export default TastePage
