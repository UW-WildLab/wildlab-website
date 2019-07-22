import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FontAwesome from 'react-fontawesome';
import DataLink from '../Navigation/DataLink';

import './GridTable.css';

const GridTable = ({ data, title }) => (
  <div className="custon-grid">
    <h1>{title}</h1>
    <Row>
      {data.map(({ name, title, image, facebook, website }, index) => (
        <Col xs={12} sm={6} md={4} key={index}>
          <div className="picture">
            <img src={image} alt={name} />
          </div>
          <h2>{name}</h2>
          <h3>{title}</h3>
          <Row className="social-icons">
            {facebook && (
              <DataLink to={facebook}>
                <FontAwesome name="facebook" />
              </DataLink>
            )}
            {website && (
              <DataLink to={website}>
                <FontAwesome name="globe" />
              </DataLink>
            )}
          </Row>
        </Col>
      ))}
    </Row>
  </div>
);

GridTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default GridTable;
