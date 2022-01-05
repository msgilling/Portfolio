import React from 'react'
import { Fade } from 'react-reveal'
import NavBar from './NavBar'
import GA from '../assets/ga.png'

const Experience = () => {

  return (
    <>
      <NavBar />
      <div className="experience-section">
        <div className="experience">
          <Fade down>
            <h2 className="experience-title">&bull; Experience &bull;</h2>
          </Fade>
          <div className="experience-container">
            <Fade left>
              <img src={GA} alt="logo" className="galogo" />
            </Fade>
            <Fade right>
            <div className="exp-desc">
              <h2 className="experience-name">Software Engineer Immersive</h2>
              <h3 className="experience-subtitle">General Assembly (September 2021 - December 2021)</h3>
              <p>This 12-week immersive course was an amazing and unforgettable experience. We trained in building full-stack web applications using programming tech such as <strong>JavaScript, React, node.js, HTML/CSS, Bulma, Python, SQL</strong>. This involved utilising Github on a daily basis, labs, pair-coding, daily stand-up and group and individual projects.</p>
            </div>
            </Fade>
          </div>

        </div>
      </div>
    </>
  )
}

export default Experience