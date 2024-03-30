import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './styles/my_styles.css';

/**
 <Navbar bg="orange" expand="lg" variant="dark" fixed="top">
<Navbar.Brand href="#home">Vitor Silva</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{ marginLeft: 'auto' }}>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#services">SERVICES</Nav.Link>
      <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myPage">Vitor Silva</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">WORK</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>


 */


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



