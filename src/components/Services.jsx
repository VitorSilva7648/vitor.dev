import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaDatabase, FaLaptopCode, FaCloud, FaMobileAlt, FaServer, FaBrain } from 'react-icons/fa';
import './styles/my_styles.css';

function Services() {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: 'var(--bg-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Services</h2>
          <p className="lead text-secondary">What I offer</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Carousel className="service-carousel shadow-sm rounded-3 overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
              {[
                {
                  title: "Web Application Development",
                  desc: "Building interactive, high-performance web apps and SaaS products with modern stacks (React, NestJS, .NET, Django).",
                  icon: <FaLaptopCode size={80} className="text-primary" />
                },
                {
                  title: "Mobile App Development",
                  desc: "Building responsive, production-grade iOS and Android apps with React Native.",
                  icon: <FaMobileAlt size={80} className="text-primary" />
                },
                {
                  title: "Backend & SaaS Architecture",
                  desc: "Designing multi-tenant systems, REST APIs, authentication and third-party integrations (payments, WhatsApp, digital signatures).",
                  icon: <FaServer size={80} className="text-primary" />
                },
                {
                  title: "AI & Machine Learning",
                  desc: "Building AI-powered features and deep learning pipelines, from LLM integrations to medical image segmentation research.",
                  icon: <FaBrain size={80} className="text-primary" />
                },
                {
                  title: "Cloud & DevOps",
                  desc: "Containerizing and deploying applications with Docker, Kubernetes and CI/CD pipelines on AWS and Vercel.",
                  icon: <FaCloud size={80} className="text-primary" />
                },
                {
                  title: "Database Management",
                  desc: "Organizing, optimizing and securing relational and NoSQL data efficiently.",
                  icon: <FaDatabase size={80} className="text-primary" />
                }
              ].map((service, idx) => (
                <Carousel.Item key={idx} className="p-5 text-center">
                  <div className="d-flex justify-content-center mb-4">
                    <div className="p-4 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px', backgroundColor: 'var(--surface-color)' }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="fw-bold mb-3">{service.title}</h3>
                  <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                    {service.desc}
                  </p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
