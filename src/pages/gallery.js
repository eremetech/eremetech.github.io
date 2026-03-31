import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"

// Import images - add your images here
import blueImage from "../images/blue.jpg"
import whatsgoingonImage from "../images/whatsgoingon.avif"
import childImage from "../images/child.jpg"
import portImage from "../images/port.webp"
import monocleImage from "../images/monocle.jpg"
import clipImage from "../images/clip.jpg"
import swimImage from "../images/swim2025.jpg"
import sunfImage from "../images/sunf.jpeg"
import broccoliImage from "../images/broccoli.jpg"
import flamesImage from "../images/falmes.webp"
import flowersImage from "../images/flowers.webp"
import gasImage from "../images/gasactu.jpg"
import handImage from "../images/hand.jpg"
import moonImage from "../images/moon.jpg"
import parkImage from "../images/park.jpg"
import rothkoImage from "../images/rothko.jpg"
import sinfunImage from "../images/sinfun.jpg"

const GalleryPage = ({ data, location }) => {
  const siteTitle = ''

  // Image mapping - add your imported images here
  const imageMap = {
    "blue.jpg": blueImage,
    "whatsgoingon.avif": whatsgoingonImage,
    "child.jpg": childImage,
    "port.webp": portImage,
    "monocle.jpg": monocleImage,
    "clip.jpg": clipImage,
    "swim2025.jpg": swimImage,
    "sunf.jpeg": sunfImage,
    "broccoli.jpg": broccoliImage,
    "falmes.webp": flamesImage,
    "flowers.WEBP": flowersImage,
    "gasactu.jpg": gasImage,
    "hand.jpg": handImage,
    "moon.jpg": moonImage,
    "park.jpg": parkImage,
    "rothko.jpg": rothkoImage,
    "sinfun.jpg": sinfunImage,
  }

  // Art collection data - use just the filename for the image property
  const artCollection = [
    {
        id: 13,
        artist: "Tarsila do Amaral",
        year: "1928",
        title: "The Moon",
        image: "moon.jpg"},
    
    {
      id: 2,
      artist: "Barkley Hendricks",
      year: "1974",
      title: "What's going on",
      image: "whatsgoingon.avif"
    },
    {
        id: 1,
        artist: "Yves Klein",
        year: "1961",
        title: "Blue Monochrome",
        image: "blue.jpg" 
      },
    {
      id: 3,
      artist: "Pablo Picasso",
      year: "1953",
      title: "Child Playing in Camomilles",
      image: "child.jpg"
    },
    {
      id: 4,
      artist: "Chuck Close",
      year: "1999",
      title: "Self-Portrait",
      image: "port.webp"
    },
    {
      id: 5,
      artist: "Oleg Tselkov",
      year: "1934",
      title: "Head in paper clip",
      image: "clip.jpg"
    },
    {
      id: 6,
      artist: "Karl Schmidt-Rottluff",
      year: "1910",
      title: "Self-Portrait with Monocle",
      image: "monocle.jpg"
    },
    {
        id: 14,
        artist: "Gustav Klimt",
        year: "1910",
        title: "The Park",
        image: "park.jpg"
      },
    {
        id: 7,
        artist: "Madeleine Gross",
        year: "2025",
        title: "Swim",
        image: "swim2025.jpg"
      },
      {
        id: 8,
        artist: "Claude Monet",
        year: "1881",
        title: "Bouquet of Sunflowers",
        image: "sunf.jpeg"
      },
      {
        id: 9,
        artist: "David Shrigley",
        year: "2021",
        title: "Untitled",
        image: "broccoli.jpg"
      },
      {
        id: 10,
        artist: "Yayoi Kusama",
        year: "1995",
        title: "Yellow Flame",
        image: "falmes.webp"
      },
      {
        id: 11,
        artist: "Edward Hopper",
        year: "1940",
        title: "Gas",
        image: "gasactu.jpg"
      },
      {
        id: 12,
        artist: "Chieska Fortune Smith",
        year: "",
        title: "The Hand'",
        image: "hand.jpg"
      },
      {
        id: 15,
        artist: "Mark Rothko",
        year: "1949",
        title: "No. 5 / No.22",
        image: "rothko.jpg"
      },
      {
        id: 16,
        artist: "Oliviero Toscani",
        year: "",
        title: "Sinfun Love",
        image: "sinfun.jpg"
      },
      /* {
        id: 17,
        artist: "Uchronia Studio",
        year: "2025",
        title: "Flowers at Coachella [For the gallery's yard]",
        image: "flowers.WEBP"
      },
       */
        
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <Link to='/'> home </Link>
          <Link to="/research">research</Link>
          <Link to="/projects">projects</Link>
          <Link to="/whatif">what if</Link>
        </div>
        <h3> virtual gallery </h3>
        <div className="gallery-container">
          {artCollection.map((art) => {
            const imageSrc = imageMap[art.image]
            
            return (
              <div key={art.id} className="art-item">
                <div className="art-image-wrapper">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={art.title}
                      className="art-image"
                      onLoad={(e) => {
                        const img = e.target
                        const isHorizontal = img.naturalWidth > img.naturalHeight
                        if (isHorizontal) {
                          img.classList.add('art-image-horizontal')
                        }
                      }}
                    />
                  ) : (
                    <div className="art-image-placeholder">
                      <div className="placeholder-text">{art.title}</div>
                    </div>
                  )}
                </div>
                <div className="art-info">
                  <div className="art-artist">{art.artist} &mdash; {art.title} </div>
                  <div className="art-year">{art.year}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage

