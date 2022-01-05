import React from 'react'
import { Fade } from 'react-reveal'
import NavBar from './NavBar'
import NIGHTDAZE from '../assets/nightdaze_app.png'
import PLATESTER from '../assets/recipeindex.png'
import FILMOJO from '../assets/filmojo_home_page.png'
import KIKI from '../assets/kiki_start_screen.png'
import { HiLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Portfolio = () => {

  return (
    <>
      <NavBar />
      <div className="project-section">
        <div className="project-me">
          <Fade down>
            <h2 className="project-title">&bull; Projects &bull;</h2>
          </Fade>
          <div className="project-container">
            <div className="image-container">
              <Fade left>
                <img src={NIGHTDAZE} alt="nightdaze" className="img" width="700" />
              </Fade>
            </div>
            <Fade right>
              <div className="project-para">
                <h2 className="project-name">night daze app</h2>
                <h3 className="tech-subtitle">React (Hooks) &bull; JavaScript &bull; CSS &bull; Django REST Framework &bull; Python &bull; React-Bootstrap &bull; Heroku &bull; Insomnia &bull; TablePlus</h3>
                <p>My final project as a Software Engineer Immersive Student at General Assembly was to create a full-stack application with a React front-end and Django back-end. It was a solo project where I made sure to focus on it being mobile responsive first. The  app was built over 8 days using <strong>Python, Django</strong> and a <strong>PostGreSQL</strong> back-end and a <strong>React</strong> front-end. Users can register, login, upload photos and add comments.</p>
                <div className="project-links">
                  <h4 className="readme"><button  className="readme-btn"><a className="readme-link" href="https://github.com/msgilling/SEI_Project-4/blob/main/README.md"><FaGithub size={25} color="#dd8aa0" className="icon-portfolio" />ReadMe</a></button></h4>
                  <h4 className="project"><button className="project-btn"><a className="project-link" href="https://night-daze.herokuapp.com/"><HiLink size={25} color="#dd8aa0" className="icon-portfolio" />Open Project</a></button></h4>
                </div>
              </div>

            </Fade>
          </div>
          <div className="project-container">
            <div className="image-container">
              <Fade left>
                <img src={PLATESTER} alt="nightdaze" className="img" width="700" />
              </Fade>
            </div>
            <Fade right>
              <div className="project-para">
                <h2 className="project-name">PLATESTER</h2>
                <h3 className="tech-subtitle">React (Hooks) &bull; JavaScript &bull; CSS &bull; Bulma &bull; MongoDB &bull; Mongoose &bull; Axios &bull; JWT &bull; BCrpyt &bull; Heroku &bull; Git &bull; Insomnia </h3>
                <p>As a group, we built an Airbnb clone but with a foody twist. This recipe MERN stack app allows users to register, login, search, upload and edit their own recipes. I was largely responsible for the recipe card and show pages - displaying all the relevant information and styling. I also contributed to building out the backend, seeding the data, logo and icon designs and CSS. This project was a great learning experience working as a team remotely. </p>
                <div className="project-links">
                  <h4 className="readme"><button className="project-btn"><a className="readme-link"href="https://github.com/msgilling/sei-project-3-platester/blob/master/README.md"><FaGithub size={25} color="#dd8aa0" className="icon-portfolio" />ReadMe</a></button></h4>
                  <h4 className="project"><button className="readme-btn"><a className="project-link" href="https://platester.herokuapp.com/"><HiLink size={25} color="#dd8aa0" className="icon-portfolio" />Open Project</a></button></h4>
                </div>
              </div>
            </Fade>
          </div>
          <div className="project-container">
            <div className="image-container">
              <Fade left>
                <img src={FILMOJO} alt="nightdaze" className="img" width="700" />
              </Fade>
            </div>
            <Fade right>
              <div className="project-para">
                <h2 className="project-name">FILMOJO</h2>
                <h3 className="tech-subtitle">React (Hooks) &bull; JavaScript &bull; CSS &bull; Bulma &bull; Third-party APIs &bull; Netlify &bull; Axios &bull; Git &bull; Insomnia </h3>
                <p>During a 48 hour Hackathon, myself and my partner pair-coded this movie app. <strong>FILMOJO</strong> uses the IMDB API to show the top 250 movies on the IMDB site. The user is able to browse the top movies, favourite them, and shuffle a random movie for inspiration.</p>
                <div className="project-links">
                  <h4 className="readme"><button className="project-btn"><a className="readme-link"href="https://github.com/msgilling/SEI-Project-Mini/blob/master/README.md"><FaGithub size={25} color="#dd8aa0" className="icon-portfolio" />ReadMe</a></button></h4>
                  <h4 className="project"><button className="readme-btn"><a className="project-link" href="https://filmojo.netlify.app/"><HiLink size={25} color="#dd8aa0" className="icon-portfolio" />Open Project</a></button></h4>
                </div>
              </div>
            </Fade>
          </div>
          <div className="project-container">
            <div className="image-container">
              <Fade left>
                <img src={KIKI} alt="nightdaze" className="img" width="700" />
              </Fade>
            </div>
            <Fade right>
              <div className="project-para">
                <h2 className="project-name">Kiki's Delivery Service</h2>
                <h3 className="tech-subtitle">HTML5 &bull; Vanilla JavaScript &bull; CSS  </h3>
                <p>My first project at General Assembly’s Software Engineering Immersive Course was to create a grid-based game that used <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> learnt in the first two weeks of the course. This was a solo project to be completed in one week.</p>
                <div className="project-links">
                  <h4 className="readme"><button className="project-btn"><a className="readme-link"href="https://github.com/msgilling/SEI-Project-1/blob/main/README.md"><FaGithub size={25} color="#dd8aa0" className="icon-portfolio" />ReadMe</a></button></h4>
                  <h4 className="project"><button className="readme-btn"><a className="project-link" href="https://msgilling.github.io/SEI-Project-1/"><HiLink size={25} color="#dd8aa0" className="icon-portfolio" />Open Project</a></button></h4>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio