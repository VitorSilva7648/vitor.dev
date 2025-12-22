import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from './imagens/developer_workspace.png';
import './styles/my_styles.css';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h2 className="mb-4 display-5 fw-bold text-start">About me</h2>
            <div className="lead text-secondary text-justify mb-4" style={{ textAlign: 'justify' }}>
              <p>
                Hello! My name is Vitor Silva, and I am a Computer Engineering student at the renowned Federal University
                of Uberlândia (UFU). From an early age, my fascination with technology and computing drove me to seek
                knowledge in this constantly evolving area. I have had the privilege of immersing myself in a dynamic and
                challenging academic environment, where I have explored several fundamental disciplines, from algorithms
                and data structures to embedded systems and artificial intelligence.
              </p>
              <p>
                I'm driven by the desire to contribute meaningfully to projects that push the boundaries of what's
                possible in the realm of Computer Engineering. Eager to embrace new opportunities that promise to enrich
                my skill set, I invite you to connect with me as we embark on an exhilarating journey through the
                ever-evolving landscape of technology.
              </p>
            </div>

            <h4 className="mb-3 fw-bold">Skills & Tools</h4>
            <div className="mb-4">
              <p className="mb-2"><strong>Languages & Frameworks:</strong> C# | Python | Java | React | React Native | Javascript | Typescript</p>
              <p className="mb-2"><strong>Database:</strong> PostgreSQL | MongoDB </p>
              <p><strong>Tools:</strong> PowerBI | Git</p>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <img
              src={about}
              alt="Programming Illustration"
              className="img-fluid rounded-3 shadow-lg"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
