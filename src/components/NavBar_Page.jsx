import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './styles/my_styles.css';

function CustomNavbar() {
  return (  
    <Container>
    <Navbar bg="orange" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Vitor Silva</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto' }}>
        <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#services">SERVICES</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>

);
}

export default CustomNavbar;



