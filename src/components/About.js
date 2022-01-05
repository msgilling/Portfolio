import React from 'react'
import LOGO from '../assets/greylogo.png'
import { Fade } from 'react-reveal'


const About = () => {

  return (
    <div className="about-section">
      <div className="about-me">
        <Fade down>
        <h2 className="about-title">&bull; About &bull;</h2>
        <h3 className="about-subtitle"> Junior Full Stack Developer || Animal Lover || Plant Enthusiast </h3>
        </Fade>
        <div className="about-container">
          <Fade left>
          <img src={LOGO} alt="logo" className="logo"/>
          </Fade>
          <Fade right>
        <div className="about-para">
          <p>Hi, my name is <strong>Mariah!</strong></p>
          <p>My previous role as a Visual Merchandiser allowed me to be creative and problem solve, two aspects of the job I really became really passionate about. </p>
          <p>This drove me to go and study coding and software engineering at General Assembly, enjoying the ability to learn as much as I can with like minded people.</p>
          <p>I am now open for opportunities as a a Front-End or Full-Stack Developer in a collaborative team where I can continue to grow my skills daily and collaborate with like minded individuals.</p>
          <p>In my spare time (when I'm not coding), you can find me illustrating on my iPad. You can check out my work at <a href="https://www.instagram.com/mxrling/">@mxrling</a>.</p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About