import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Button, withSection } from '../../components';

import './ContactForm.css';

class ContactForm extends Component {
  url = '';

  onSubmit = e => {
    const form = document.forms['submit-to-google-sheet'];
    e.preventDefault();
    fetch(this.url, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.status === 200) {
          form.reset();
          alert('Your message was successfully sent! Thank you!');
        } else {
          alert(
            'An error occurred. Please try again later or contact the admin'
          );
        }
      })
      .catch(error => console.error('Error!', error.message));
  };

  render() {
    return (
      <div>
        <Col md={{ span: 10, offset: 1 }}>
          <Form onSubmit={this.onSubmit} name="submit-to-google-sheet">
            <Form.Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Control
                    placeholder="First name"
                    name="first_name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Control
                    placeholder="Last name"
                    name="last_name"
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formComments">
                  <Form.Control
                    name="comments"
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col className="align-center">
                <Button bg type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </div>
    );
  }
}

export default withSection('contact-form')(ContactForm);
