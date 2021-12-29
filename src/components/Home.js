import React from 'react'
import LOGO from '../assets/greylogo.png'



const Home = () => {
  // const [splashPage, setSplashPage] = useState(true)

  return (
    <div className="splash">
      <div className="splash-container">
        <img src={LOGO} alt="logo" className="splash-logo"/>
        <div className="splash-page">MARIAH GILLING</div>
        <h4 className="splash-subtitle">Junior Software Engineer</h4>
        <button className="enter-btn">Enter</button>
      </div>

    </div>

  )
}

export default Home