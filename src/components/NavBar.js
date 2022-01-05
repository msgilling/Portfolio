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
        <Container className="nav">
          <Navbar.Brand href="/" className="nav-name">
            <img
              src={LOGO}
              width="50"
              height="50"
              className="navlogo"
              alt="Mariah Gilling logo"
            />
          </Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="/about">About</Nav.Link>&bull;
            <Nav.Link href="/projects">Projects</Nav.Link>&bull;
            <Nav.Link href="/experience">Experience</Nav.Link>&bull;
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>


  )
}

export default NavBar