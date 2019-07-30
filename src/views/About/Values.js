import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withSection } from '../../components';
//import { DataLink, GridTable, withGoogleSheets } from '../../components';

const Values = () => (
  <div className="section">
    <div className="container clearfix">
      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">01.</span> Experience
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel
            sapien vitae, condimentum ultricies magna et orci ut et lobortis.
          </p>
        </div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">02.</span> Professionality
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel
            sapien vitae, condimentum ultricies magna et orci ut et lobortis.
          </p>
        </div>
      </div>

      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>

      <div className="section height_1"></div>

      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">03.</span> Experience
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel
            sapien vitae, condimentum ultricies magna et orci ut et lobortis.
          </p>
        </div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">04.</span> Professionality
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis. Blandit vel
            sapien vitae, condimentum ultricies magna et orci ut et lobortis.
          </p>
        </div>
      </div>

      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>
    </div>
  </div>
);

export default flowRight(
  //withGoogleSheets('executive_committee'),
  withSection('about-us-values')
)(Values);
