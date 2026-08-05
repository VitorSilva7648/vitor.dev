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
                Hello! My name is Vitor Gonçalves, a Full Stack Developer with hands-on experience building and
                maintaining production web, mobile and SaaS platforms across multiple stacks (Node.js/NestJS, .NET/C#,
                Django, Java/Spring Boot, React/React Native). I've worked on multi-tenant architectures, payment and
                third-party integrations (Stripe, MercadoPago, WhatsApp/Meta, digital signature providers), real-time
                features, and cloud deployment with Docker and Kubernetes.
              </p>
              <p>
                Beyond product engineering, I developed a complete machine learning pipeline for automatic medical image
                segmentation, as part of a research project approved by an institutional Research Ethics Committee
                (CEP/UFU) and conducted alongside radiation oncologists and medical physicists. I hold a degree in
                Computer Engineering from the Federal University of Uberlândia (UFU), and I'm driven by software
                architecture, scalability, and shipping technology that has real-world impact.
              </p>
            </div>

            <h4 className="mb-3 fw-bold">Skills & Tools</h4>
            <div className="mb-4">
              <p className="mb-2"><strong>Frontend:</strong> React | React Native | TypeScript | JavaScript | Tailwind CSS</p>
              <p className="mb-2"><strong>Backend:</strong> NestJS | Node.js | .NET/C# | Django | Java/Spring Boot | REST APIs</p>
              <p className="mb-2"><strong>Database:</strong> PostgreSQL | MongoDB</p>
              <p className="mb-2"><strong>Cloud & DevOps:</strong> Docker | Kubernetes | AWS (S3) | Vercel | Cloudflare</p>
              <p><strong>Other:</strong> Git | Stripe | PyTorch | Power BI</p>
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
