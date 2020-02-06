import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import flowRight from 'lodash/flowRight';
import { withGoogleSheets } from 'react-db-google-sheets';
import { withSection } from '../../components';

import './Questions.css';

const Questions = ({ db: { faqs } }) => (
  <Accordion defaultActiveKey={0}>
    {faqs.map((faq, i) => (
      <Card key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {faq.question}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

Questions.propTypes = {
  db: PropTypes.shape({
    faqs: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('faqs'),
  withSection('faq-questions')
)(Questions);
