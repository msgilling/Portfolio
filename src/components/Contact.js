import React from 'react' 
import NavBar from './NavBar'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin,FaGithub } from 'react-icons/fa'
import PIC from '../assets/profilepic.jpg'
import Fade from 'react-reveal'

const Contact = () => {

  return (
    <>
    <NavBar/>
    <div className="contact-section">
      <Fade top>
      <h1 className="contact-title">&bull; Contact &bull;</h1>
      </Fade>
      <div className="contact-container">
      <Fade left>
        <img src={PIC} alt="logo" className="profilepic"/>
      </Fade>
      
      <Fade right>
        <div className="contact-options">
          <FiMail size={35} color="white" className="icon-contact" />
          <a href="mailto:mxrlling@gmail.com" className="contact-links">Email</a>
        </div>
      </Fade>
      <Fade left>
        <div className="contact-options">
          <FaLinkedin size={35} color="white" className="icon-contact" />
          <a href="https://www.linkedin.com/in/mariah-gilling/" className="contact-links">LinkedIn</a>
        </div>
      </Fade>
      <Fade right>
        <div className="contact-options">
          <FaGithub size={35} color="white" className="icon-contact" />
          <a href="https://github.com/msgilling" className="contact-links">GitHub</a>
        </div>
      </Fade>
      
      </div>

    </div>
  
    </>
  )
}

export default Contact