import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const Logos = () => (
  <div className="section">
    <div className="section bg_grey border_top_1_solid_grey">
      <div className="container clearfix">
        <div className="section height_30"></div>

        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo1.png"
          />
        </div>
        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo4.png"
          />
        </div>
        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo3.png"
          />
        </div>
        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo2.png"
          />
        </div>
        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo5.png"
          />
        </div>
        <div className="grid grid_2">
          <img
            alt=""
            className="width_100_percentage"
            src="/img/partner/logo6.png"
          />
        </div>

        <div className="section height_30"></div>
      </div>
    </div>
  </div>
);

export default flowRight(
  //withGoogleSheets('executive_committee'),
  withSection('about-us-logos')
)(Logos);
