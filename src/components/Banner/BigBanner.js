import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import withSection from '../HOC/withSection';
// import {
//   Button,
//   DataLink,
//   withGoogleSheets,
//   withSection
// } from '../../components';
// import { filterDatabaseByType } from '../../utils';

import './BigBanner.css';

// { db: { home_banner: banner } }

const BigBanner = () => {
  // const title = filterDatabaseByType(banner, 'title', 0);
  // const punchLine = filterDatabaseByType(banner, 'punch-line', 0);
  // const buttons = filterDatabaseByType(banner, 'button');

  return (
    <div className="section background_size_cover background_position_center banner-container">
      <div className="section bg_greydark_alpha_gradient_2">
        <div className="section height_570"></div>
        <div className="container clearfix">
          <div className="grid grid_12 custom-banner-title">
            <strong className="color_white font_size_60 first_font">
              In our Lab you can
            </strong>
            <div className="section ">
              <strong className="color_white font_size_40 first_font">
                learn something blah blah
              </strong>
            </div>
          </div>
          <div className="grid grid_12 custom-news-section">
            <p>
              <span className="news-title">12th August 2019.</span> Something
              happened
            </p>
            <p>
              <span className="news-title">12th August 2019.</span> Something
              happened
            </p>
            <p>
              <span className="news-title">12th August 2019.</span> Something
              happened
            </p>
            <p>
              <span className="news-title">12th August 2019.</span> Something
              happened
            </p>
            <p>
              <span className="news-title">12th August 2019.</span> Something
              happened
            </p>
          </div>
        </div>
        <div className="section height_50"></div>
      </div>
    </div>
  );
};

BigBanner.propTypes = {
  db: PropTypes.shape({
    home_banner: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  //withGoogleSheets('home_banner'),
  withSection('home-banner')
)(BigBanner);
