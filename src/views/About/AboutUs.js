import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withGoogleSheets } from 'react-db-google-sheets';
import { withSection } from '../../components';

const AboutUs = ({ db: { aboutus } }) => (
  <div className="section">
    <div className="container clearfix">
      <div className="grid grid_6 text_align_right text_align_center_responsive">
        <h1 className="font_size_40 line_height_50 padding_10">
          <strong>{aboutus[0].highlighted_text}</strong>
        </h1>
      </div>
      <div className="grid grid_6 ">
        <p className="padding_top_10">{aboutus[0].main_text}</p>
      </div>
    </div>
  </div>
);

AboutUs.propTypes = {
  db: PropTypes.shape({
    aboutus: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('aboutus'),
  withSection('about-us')
)(AboutUs);
