import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import self from './imagens/SELF.jpeg';
import './styles/my_styles.css';

function About1() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--surface-color)' }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <div className="d-flex flex-column flex-md-row align-items-center gap-4 p-4 rounded-3 shadow-sm" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img
                src={self}
                alt="Vitor Hugo Profile"
                className="rounded-circle shadow"
                width="150"
                height="150"
                style={{ objectFit: 'cover' }}
              />
              <div className="text-center text-md-start">
                <h4 className="fw-bold mb-1">Vitor Hugo Silva Gonçalves</h4>
                <p className="text-primary mb-2 fw-medium">Full Stack Developer</p>
                <div className="small text-secondary">
                  <p className="mb-1">vitor.goncalves@ufu.br</p>
                  <p className="mb-0">(34) 99789-7624</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <h3 className="mb-4 fw-bold">Core Values</h3>
            <ul className="list-unstyled d-grid gap-3">
              {[
                "Organization and management of tasks, ensuring efficient and on-time completion.",
                "Ability to make critical and informed decisions, evaluating alternatives and risks.",
                "Adaptability to new situations and environments, finding flexible solutions.",
                "Curiosity and thirst for learning, continually seeking to update knowledge."
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-start">
                  <span className="me-3 text-primary h5">✓</span>
                  <span className="text-secondary lead" style={{ fontSize: '1rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About1;
