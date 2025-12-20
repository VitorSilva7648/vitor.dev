import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import database_image from './imagens/database.jpg';
import web_image from './imagens/web.jfif';
import cloud_image from './imagens/cloud.jfif';
import mobile_image from './imagens/developed_mobile.png';
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
                  img: database_image
                },
                {
                  title: "Web Application Development",
                  desc: "Creating interactive and efficient solutions for the web using modern stacks.",
                  img: web_image
                },
                {
                  title: "Cloud Computing",
                  desc: "Scalable, on-demand access to computing resources over the internet.",
                  img: cloud_image
                },
                {
                  title: "Mobile App Development",
                  desc: "Creating responsive and efficient mobile apps for iOS and Android.",
                  img: mobile_image
                }
              ].map((service, idx) => (
                <Carousel.Item key={idx} className="p-5 text-center">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="rounded-circle shadow"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
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
