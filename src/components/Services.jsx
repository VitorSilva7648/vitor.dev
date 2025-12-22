import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaDatabase, FaLaptopCode, FaCloud, FaMobileAlt } from 'react-icons/fa';
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
            <Carousel data-bs-theme="dark" className="service-carousel shadow-sm rounded-3 overflow-hidden" style={{ backgroundColor: 'var(--surface-color)' }}>
              {[
                {
                  title: "Database Management",
                  desc: "Organizing, optimizing and securing data efficienttly.",
                  icon: <FaDatabase size={80} className="text-primary" />
                },
                {
                  title: "Web Application Development",
                  desc: "Creating interactive and efficient solutions for the web using modern stacks.",
                  icon: <FaLaptopCode size={80} className="text-primary" />
                },
                {
                  title: "Cloud Computing",
                  desc: "Scalable, on-demand access to computing resources over the internet.",
                  icon: <FaCloud size={80} className="text-primary" />
                },
                {
                  title: "Mobile App Development",
                  desc: "Creating responsive and efficient mobile apps for iOS and Android.",
                  icon: <FaMobileAlt size={80} className="text-primary" />
                }
              ].map((service, idx) => (
                <Carousel.Item key={idx} className="p-5 text-center">
                  <div className="d-flex justify-content-center mb-4">
                    <div className="p-4 rounded-circle bg-light shadow-sm d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
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
