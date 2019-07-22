import React from 'react';
import PropTypes from 'prop-types';
import withSection from '../HOC/withSection';
// import {
//   Button,
//   DataLink,
//   withSection
// } from '../../components';

import './MiniBanner.css';

const MiniBanner = ({ title }) => (
  <div
    className="section background_size_cover background_position_center_bottom"
    style={{ backgroundImage: 'url(img/parallax/img40.png)' }}
  >
    <div className="section bg_greydark_alpha_gradient_2">
      <div className="container clearfix">
        <div className="section height_200"></div>
        <div className="grid grid_12">
          <strong className="mini-banner-title">{title}</strong>
        </div>
      </div>
    </div>
  </div>
);

MiniBanner.propTypes = {
  title: PropTypes.string
};

MiniBanner.defaultProps = {
  title: ''
};

export default withSection('page-banner')(MiniBanner);
