import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chat_image from './imagens/chat.png';
import automacao_image from './imagens/automacao.jfif';
import banco_image from './imagens/banco.jfif';
import Card from 'react-bootstrap/Card';
import mobile_image from './imagens/developed_mobile_portifolio.png';

function Portfolio() {
  return (
       
      <div id="portfolio" className="text-center bg-grey">
      <br/>
      <h2>Portfolio</h2>
      <p>What I created</p>
      <Container>
      <Row>
        <Col>
          <div className="thumbnail">

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={chat_image} alt="database" width="286" height="180" />
          <Card.Body>
            <Card.Title><strong>Chat platform</strong></Card.Title>
            <Card.Text>Web Platform / 15 Jan. 2024</Card.Text>
        
          </Card.Body>
          </Card>
          </div>

          < br />< br />
        </Col>
        <Col>

        
          <div className="thumbnail">
            
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={automacao_image} alt="database" width="286" height="180" />
          <Card.Body>
            <Card.Title><strong>Service automation bot</strong></Card.Title>
            <Card.Text>Web Platform / 20 Jan. 2024</Card.Text>
        
          </Card.Body>
          </Card>           
          </div>
          < br />< br />
        </Col>
        <Col>
          <div className="thumbnail">

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={banco_image} alt="database" width="286" height="180" />
          <Card.Body>
            <Card.Title><strong>Database management</strong></Card.Title>
            <Card.Text>Database / 8 Oct. 2022</Card.Text>
        
          </Card.Body>
          </Card> 
          
          </div>
          < br />< br />
        </Col>
        <Col>
          <div className="thumbnail">

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mobile_image} alt="mobile" width="400" height="200" />
          <Card.Body>
            <Card.Title><strong>Mobile app development</strong></Card.Title>
            <Card.Text>Mobile app development / May. 2025</Card.Text>
        
          </Card.Body>
          </Card> 
          
          </div>
          < br />< br />
        </Col>
      </Row>
      </Container>
      </div>
    
  );
}

export default Portfolio;
