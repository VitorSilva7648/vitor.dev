import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import chat_image from './imagens/chat.png';
import automacao_image from './imagens/automacao.jfif';
import banco_image from './imagens/banco.jfif';
import mobile_image from './imagens/developed_mobile_portifolio.png';

const projects = [
  {
    id: 1,
    title: "Chat Platform",
    description: "Real-time communication platform built with modern web technologies.",
    tech: ["React", "Node.js", "Socket.io"],
    img: chat_image,
    role: "Web Platform",
    demo: "#", // Add your demo link
    repo: "#"  // Add your repo link
  },
  {
    id: 2,
    title: "Service Automation Bot",
    description: "Automated service bot to streamline customer interactions.",
    tech: ["Python", "NLP", "Web Automation"],
    img: automacao_image,
    role: "Automation",
    demo: "#",
    repo: "#"
  },
  {
    id: 3,
    title: "Database Management",
    description: "Robust database architecture and management system optimized for performance.",
    tech: ["SQL", "PostgreSQL", "Data Design"],
    img: banco_image,
    role: "Database",
    demo: "#",
    repo: "#"
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Cross-platform mobile application designed for high user engagement.",
    tech: ["React Native", "Mobile", "UX/UI"],
    img: mobile_image,
    role: "Mobile App",
    demo: "#",
    repo: "#"
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-5" style={{ backgroundColor: 'var(--surface-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Selected Projects</h2>
          <p className="lead text-secondary">A collection of my recent work and experiments</p>
        </div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} sm={12}>
              <Card className="h-100 shadow-sm border-0 hover-scale" style={{ backgroundColor: 'var(--bg-color)', transition: 'transform 0.3s ease' }}>
                <div style={{ overflow: 'hidden', height: '220px', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={`Screenshot of ${project.title}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <div className="mb-2">
                    <Badge bg="primary" className="me-2">{project.role}</Badge>
                  </div>
                  <Card.Title className="fw-bold fs-5 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-secondary flex-grow-1 mb-4">
                    {project.description}
                  </Card.Text>

                  <div className="mb-4">
                    {project.tech.map((t, index) => (
                      <Badge key={index} bg="secondary" className="me-1 mb-1 opacity-75 fw-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <Button variant="outline-primary" className="flex-grow-1" href={project.repo}>
                      View Code
                    </Button>
                    <Button variant="primary" className="flex-grow-1" href={project.demo}>
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
