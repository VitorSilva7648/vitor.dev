import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import reactLogo from '../assets/react.svg';
import './styles/my_styles.css';

function CustomJumbotron() {
  return (
    <div id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start" style={{ zIndex: 1 }}>
            <h1 className="display-3 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Turning Ideas into <br />
              <span style={{ color: 'var(--primary-color)' }}>Digital Reality</span>.
            </h1>
            <p className="lead mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem 0' }}>
              I'm Vitor Silva, a Full Stack Developer specialized in building exceptional digital experiences. Currently focused on modern web technologies.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Button href="#portfolio" variant="primary" size="lg" className="px-5 py-3 rounded-pill fw-bold shadow">
                View Work
              </Button>
              <Button href="#contact" variant="outline-primary" size="lg" className="px-5 py-3 rounded-pill fw-bold" style={{ backgroundColor: 'white', color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
                Contact Me
              </Button>
            </div>
          </Col>

          <Col lg={5} className="text-center mt-5 mt-lg-0 d-none d-lg-block">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--primary-color) 0%, rgba(0,0,0,0) 70%)',
                opacity: '0.2',
                filter: 'blur(60px)',
                zIndex: 0
              }}></div>
              <img
                src={reactLogo}
                alt="React Logo"
                style={{
                  width: '300px',
                  height: '300px',
                  position: 'relative',
                  zIndex: 1,
                  animation: 'logo-spin 20s linear infinite'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomJumbotron;
