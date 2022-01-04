import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import LOGO from '../assets/marling.png'

const NavBar = () => {


  return (
    <div className="nav-div">
      <Navbar
        className="navbar"
        id="nav-bg"
        sticky="fixed"
        fixed="top"
        expand="sm"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/" className="nav-name">
          <img
        src={LOGO}
        width="50"
        height="50"
        className="navlogo"
        alt="Mariah Gilling logo"
      /></Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>


  )
}

export default NavBar