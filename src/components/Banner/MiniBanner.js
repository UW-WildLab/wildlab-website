import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import withSection from '../HOC/withSection';
import { getBannerImages } from '../../utils';

import './MiniBanner.css';

const miniBannerImages = getBannerImages('mini');
const miniBannerImage =
  miniBannerImages[random(0, miniBannerImages.length - 1)];

const MiniBanner = ({ title }) => (
  <div
    className="section background_size_cover background_position_center_bottom"
    style={{ backgroundImage: `url('${miniBannerImage}')` }}
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
