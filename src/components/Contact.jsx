import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const serviceId = 'service_xtcjer6';
const templateId = 'template_jfq6bu5';
const publicKey = '56ZSdEbeE-Y1k3iZK';

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
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--bg-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Let's Connect</h2>
          <p className="lead text-secondary">Send me a message and I'll get back to you.</p>
        </div>

        <Row className="g-5">
          <Col lg={5} className="d-flex flex-column justify-content-center">
            <div className="p-4 rounded-3 shadow-sm h-100" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 className="fw-bold mb-4 text-center text-lg-start">Contact Info</h4>
              <div className="d-flex align-items-center mb-4 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div className="p-2 rounded-circle me-3 bg-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaMapMarkerAlt size={20} className="text-primary" />
                </div>
                <span className="text-secondary fw-medium">Uberlândia, MG</span>
              </div>
              <div className="d-flex align-items-center mb-4 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div className="p-2 rounded-circle me-3 bg-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaPhone size={20} className="text-primary" />
                </div>
                <span className="text-secondary fw-medium">+55 (34) 9 9789-7624</span>
              </div>
              <div className="d-flex align-items-center mb-4 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div className="p-2 rounded-circle me-3 bg-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaEnvelope size={20} className="text-primary" />
                </div>
                <span className="text-secondary fw-medium">vitor.goncalves@ufu.br</span>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="p-4 p-md-5 rounded-3 shadow-sm" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {emailSent && <Alert variant="success" className="mb-4">Message sent successfully!</Alert>}
              {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
              {validationError && <Alert variant="warning" className="mb-4">{validationError}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Label className="text-secondary small text-uppercase fw-bold">Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-secondary py-2"
                        style={{ backgroundColor: 'white', color: '#121212' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label className="text-secondary small text-uppercase fw-bold">Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-secondary py-2"
                        style={{ backgroundColor: 'white', color: '#121212' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="comments" className="mb-4">
                  <Form.Label className="text-secondary small text-uppercase fw-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Hello, I'd like to talk about..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-secondary py-2"
                    style={{ backgroundColor: 'white', color: '#121212' }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" className="w-100 fw-bold py-3 mt-2">Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
