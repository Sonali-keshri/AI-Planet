import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/AI Planet Logo.png'

const NavBar = () => {
  return (
      <Navbar bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default NavBar;
