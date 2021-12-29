import React from 'react'
import LOGO from '../assets/greylogo.png'

const About = () => {

  return (
    <div className="about-section">
      <div className="about-me">
        <h2 className="about-title">About me </h2>
        <div className="about-container">
          <img src={LOGO} alt="logo" className="logo"/>
        <div className="about-para">
          <p>Hi, my name is Mariah!</p>
          <p>I recently pursued a career change into Software Engineering after working as a Visual Merchandiser.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About