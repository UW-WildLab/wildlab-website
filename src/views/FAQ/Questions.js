import React from 'react';
//import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import flowRight from 'lodash/flowRight';
import { withSection } from '../../components';

// withGoogleSheets

import './Questions.css';

const Questions = () => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Question 1
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Answer to Question 1</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        Question 2
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>Answer to Question 2</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

Questions.propTypes = {
  // db: PropTypes.shape({
  //   voter_resources: PropTypes.arrayOf(PropTypes.object)
  // })
};

export default flowRight(
  //withGoogleSheets('voter_resources'),
  withSection('faq-questions')
)(Questions);
