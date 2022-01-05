import React from 'react'
import { Fade } from 'react-reveal'
import NavBar from './NavBar'

const Portfolio = () => {

  return (
    <>
      <NavBar />
      <div className="portfolio-section">
        <div className="portfolio-me">
          <Fade down>
            <h2 className="portfolio-title">&bull; Portfolio &bull;</h2>
          </Fade>
          <div className="portfolio-container">
            <Fade left>
              {/* <img src={LOGO} alt="logo" className="logo" /> */}
            </Fade>
            <Fade right>
              <div className="portfolio-para">

              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio