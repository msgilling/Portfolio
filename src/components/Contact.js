import React from 'react' 
import NavBar from './NavBar'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin,FaGithub } from 'react-icons/fa'
import PIC from '../assets/profilepic.jpg'

const Contact = () => {

  return (
    <>
    <NavBar/>
    <div className="contact-section">
      <h1 className="contact-title">&bull; Contact &bull;</h1>
      <div className="contact-container">
      <img src={PIC} alt="logo" className="profilepic"/>
        <div className="email">
          <FiMail size={35} color="white" className="icon-contact" />
        </div>
        <div className="linkedin">
          <FaLinkedin size={35} color="white" className="icon-contact" />
        </div>
        <div className="github">
          <FaGithub size={35} color="white" className="icon-contact" />
        </div>
        
      
      </div>

    </div>
  
    </>
  )
}

export default Contact