import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/my_styles.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Vitor Silva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: '1rem' }}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;



