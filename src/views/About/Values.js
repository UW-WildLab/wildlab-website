import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withGoogleSheets } from 'react-db-google-sheets';
import { withSection } from '../../components';

const Values = ({ db: { aboutus } }) => (
  <div className="section">
    <div className="container clearfix">
      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">01.</span> {aboutus[0].value_1}
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>{aboutus[0].value_1_text}</p>
        </div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">02.</span> {aboutus[0].value_2}
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>{aboutus[0].value_2_text}</p>
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
              <span className="color_f1f1f1">03.</span> {aboutus[0].value_3}
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>{aboutus[0].value_3_text}</p>
        </div>
      </div>

      <div className="grid grid_5 ">
        <div className="padding_20">
          <h1 className="font_size_40">
            <strong>
              <span className="color_f1f1f1">04.</span> {aboutus[0].value_4}
            </strong>
          </h1>
          <div className="section height_20"></div>
          <p>{aboutus[0].value_4_text}</p>
        </div>
      </div>

      <div className="grid grid_1 ">
        <div className="section height_1"></div>
      </div>
    </div>
  </div>
);

Values.propTypes = {
  db: PropTypes.shape({
    aboutus: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('aboutus'),
  withSection('about-us-values')
)(Values);
