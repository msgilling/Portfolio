import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/greylogo.png'



const Home = () => {
  

  return (
    <div className="splash">
      <div className="splash-container">
        <img src={LOGO} alt="logo" className="splash-logo"/>
        <div className="splash-page"> MARIAH GILLING </div>
        <h4 className="splash-subtitle">&bull; Junior Full Stack Engineer &bull;</h4>
        <button className="enter-btn"><Link to="/about">Enter</Link></button>
      </div>

    </div>

  )
}

export default Home