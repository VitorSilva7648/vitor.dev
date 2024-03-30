import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import maps_image from './imagens/maps.jfif';
import phone_image from './imagens/phone.jfif';
import mail_image from './imagens/mail.jfif';

const serviceId = 'service_xtcjer6';
const templateId = 'template_jfq6bu5';
const publicKey ='56ZSdEbeE-Y1k3iZK';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setValidationError('Please fill in all fields.');
      return;
    }

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
        setError('');
        setValidationError('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Error sending email. Please try again later.');
        setEmailSent(false);
        setValidationError('');
      });
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div id="contact" className="bg-grey">
        <Container>
          <h2 className="text-center">Send me a message</h2><br />
          <Row>
            <Col>
              <p>Get in touch and I will get back to you within 24 hours.</p>
              <p><img src={maps_image} alt="Google Maps Icon" width="25" height="25"/> Uberlândia, MG</p>
              <p> <img src={phone_image} alt="Telefone Icon" width="25" height="25"/> +55 (34) 9 9789-7624</p>
              <p><img src={mail_image} alt="Mail Icon" width="25" height="25"/> vitor.goncalves@ufu.br</p>
            </Col>
            <Col>
              {emailSent && <Alert variant="success">Email sent successfully!</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              {validationError && <Alert variant="danger">{validationError}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                </Form.Group>
                <Form.Group controlId="comments">
                  <Form.Control as="textarea" rows={5} placeholder="Comment" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button><br/><br/>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
