import React from 'react'
import LOGO from '../assets/greylogo.png'
import NavBar from './NavBar'
import { Fade } from 'react-reveal'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaPython, FaYarn, FaGithub } from 'react-icons/fa'
import { DiDjango, DiMongodb, DiPostgresql, DiGit, DiHeroku, DiVisualstudio } from 'react-icons/di'
import { SiNetlify, SiJavascript } from 'react-icons/si'



const About = () => {

  return (
    <>
    <NavBar/>
      <div className="about-section">
        <div className="about-me">
          <Fade down>
            <h2 className="about-title">&bull; About &bull;</h2>
            <h3 className="about-subtitle"> Junior Full Stack Developer || Animal Lover || Green Tea Enthusiast </h3>
          </Fade>
          <div className="about-container">
            <Fade left>
              <img src={LOGO} alt="logo" className="logo" />
            </Fade>
            <Fade right>
              <div className="about-para">
                <p>Hi, my name is <strong>Mariah!</strong></p>
                <p>My previous role as a Visual Merchandiser allowed me to be creative and problem solve, two aspects of the job I really became really passionate about. </p>
                <p>This drove me to go and study coding and software engineering at General Assembly, enjoying the ability to learn as much as I can with like minded people.</p>
                <p>I am now open for opportunities as a Front-End or Full-Stack Developer in a collaborative team where I can continue to grow my skills daily and collaborate with like minded individuals.</p>
                <p>In my spare time (when I'm not coding), you can find me illustrating on my iPad. You can check out my work at <a href="https://www.instagram.com/mxrling/">@mxrling</a>.</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="skills-section">
          <div className="icon-line-wrapper">
            <Fade bottom>
            <div className="single-icon-wrapper">
              <FaHtml5 size={65} color="white" className="icon" />
              <p className="icon-desc">HTML5</p>
            </div>
            <div className="single-icon-wrapper">
              <FaCss3Alt size={65} color="white" className="icon" />
              <p>CSS3</p>
            </div>
            <div className="single-icon-wrapper">
              <SiJavascript size={65} color="white" className="icon" />
              <p>JavaScript</p>
            </div>
            <div className="single-icon-wrapper">
              <FaSass size={65} color="white" className="icon" />
              <p>SASS</p>
            </div>
            <div className="single-icon-wrapper">
              <FaReact size={65} color="white" className="icon" />
              <p>React </p>
            </div>
          
            <div className="single-icon-wrapper">
              <FaNodeJs size={65} color="white" className="icon" />
              <p>NodeJS</p>
            </div>
            <div className="single-icon-wrapper">
              <DiMongodb size={65} color="white" className="icon" />
              <p>MongoDB</p>
            </div>
            <div className="single-icon-wrapper">
              <DiDjango size={65} color="white" className="icon" />
              <p>Django</p>
            </div>
            <div className="single-icon-wrapper">
              <FaPython size={65} color="white" className="icon" />
              <p>Python</p>
            </div>
            <div className="single-icon-wrapper">
              <DiPostgresql size={65} color="white" className="icon" />
              <p>PostgreSQL</p>
            </div>
            <div className="single-icon-wrapper">
              <FaYarn size={65} color="white" className="icon" />
              <p>Yarn</p>
            </div>

            <div className="single-icon-wrapper">
              <FaGithub size={65} color="white" className="icon" />
              <p>GitHub</p>
            </div>
            <div className="single-icon-wrapper">
              <DiGit size={65} color="white" className="icon" />
              <p>Git</p>
            </div>
            <div className="single-icon-wrapper">
              <DiHeroku size={65} color="white" className="icon" />
              <p>Heroku</p>
            </div>
            <div className="single-icon-wrapper">
              <SiNetlify size={65} color="white" className="icon" />
              <p>Netlify</p>
            </div>
            <div className="single-icon-wrapper">
              <DiVisualstudio size={65} color="white" className="icon" />
              <p>VSCode</p>
            </div> 
            </Fade>
            </div>
        </div>
      </div>

    </>
  )
}

export default About