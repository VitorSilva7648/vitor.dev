import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import database_image from './imagens/database.jpg';
import web_image from './imagens/web.jfif';
import cloud_image from './imagens/cloud.jfif';
import Carousel from 'react-bootstrap/Carousel';
import './styles/my_styles.css'; 


//import ExampleCarouselImage from 'components/ExampleCarouselImage';

/**<Col>
          <img src={database_image} alt="database" width="80" height="80" />
          <br/>
          <h4>DATABASE MANAGEMENT</h4>
          <p>Managing Databases is the art of organizing, optimizing and securing data.</p>
        </Col>
        <Col>
          <img src={web_image} alt="web" width="80" height="80" />
          <br/>
          <h4>WEB APPLICATION DEVELOPMENT</h4>
          <p>Web Application Development is the process of creating interactive and efficient solutions for the web.</p>
        </Col>
        <Col>
          <img src={cloud_image} alt="cloud" width="80" heigth="80" />
          <br/>
          <h4>CLOUD COMPUTING</h4>
          <p>Cloud computing offers scalable, on-demand access to computing resources over the internet.</p>
        </Col>
      </Row> */

function Services() {
  return (
    <Container  id="services">
      <h2>SERVICES</h2>
      <h6>What we offer</h6><br/><br/>
      <Row>
        <Carousel data-bs-theme="dark" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <Carousel.Item>
            <div style={{ textAlign: 'center' }}>
              <img src={database_image} alt="database" width="200" height="200" />
              <div>
                <br/>
                <h4>DATABASE MANAGEMENT</h4>
                <p>Managing Databases is the art of organizing, optimizing and securing data.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ textAlign: 'center' }}>
              <img src={web_image} alt="web" width="200" height="200" />
              <div>
                <h4>WEB APPLICATION DEVELOPMENT</h4>
                <p>Web Application Development is the process of creating interactive and efficient solutions for the web.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ textAlign: 'center' }}>
              <img src={cloud_image} alt="cloud" width="200" height="200" />
              <div>
                <h4>CLOUD COMPUTING</h4>
                <p>Cloud computing offers scalable, on-demand access to computing resources over the internet.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
      <br/><br/>
    </Container>
  );
}

export default Services;

