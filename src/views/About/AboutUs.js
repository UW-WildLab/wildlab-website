import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const AboutUs = () => (
  <div className="section">
    <div className="container clearfix">
      <div className="grid grid_6 text_align_right text_align_center_responsive">
        <h1 className="font_size_40 line_height_50 padding_10">
          <strong>
            Hello. Our school has been present for over 20 years in the market.
            We make the most of all our students.
          </strong>
        </h1>
      </div>
      <div className="grid grid_6 ">
        <div className="width_50_percentage width_100_percentage_all_iphone float_left">
          <p className="padding_10">
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.
          </p>
          <div className="section height_20"></div>
          <p className="padding_10">
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.
          </p>
        </div>
        <div className="width_50_percentage width_100_percentage_all_iphone float_left">
          <p className="padding_10">
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.
          </p>
          <div className="section height_20"></div>
          <p className="padding_10">
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default flowRight(
  //withGoogleSheets('executive_committee'),
  withSection('about-us')
)(AboutUs);
