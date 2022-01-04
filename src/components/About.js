import React from 'react'
import LOGO from '../assets/greylogo.png'

const About = () => {

  return (
    <div className="about-section">
      <div className="about-me">
        <h2 className="about-title">&bull; About &bull;</h2>
        <h3 className="about-subtitle"> Junior Full Stack Developer || Animal Lover || Plant Enthusiast </h3>
        <div className="about-container">
          <img src={LOGO} alt="logo" className="logo"/>
        <div className="about-para">
          <p>Hi, my name is <strong>Mariah!</strong></p>
          <p>My previous role as a Visual Merchandiser allowed me to be creative and problem solve, two aspects of the job I really became really passionate about. </p>
          <p>This drove me to go and study coding and software engineering at General Assembly, enjoying the ability to learn as much as I can with like minded people.</p>
          <p>I am now looking to start my career as a Developer in a collaborative team where I can continue to grow my skills daily as a coder and collaborate with like minded individuals and share my creativity.</p>
          <p>In my spare time (when I'm not coding), you can find me illustrating on my iPad. You can check out my work at <a href="https://www.instagram.com/mxrling/">@mxrling</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About