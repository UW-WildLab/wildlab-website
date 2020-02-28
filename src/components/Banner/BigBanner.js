import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import random from 'lodash/random';
import { withGoogleSheets } from 'react-db-google-sheets';
import DataLink from '../Navigation/DataLink';
import withSection from '../HOC/withSection';
import { getBannerImages, orderByDate } from '../../utils';

import './BigBanner.css';

const bigBannerImages = getBannerImages('big');
const bigBannerImage = bigBannerImages[random(0, bigBannerImages.length - 1)];

const BigBanner = ({ db: { home, news } }) => (
  <div
    className="section background_size_cover background_position_center banner-container"
    style={{ backgroundImage: `url('${bigBannerImage}')` }}
  >
    <div className="section bg_greydark_alpha_gradient_2">
      <div className="section height_570 reduced-height"></div>
      <div className="container clearfix">
        <div className="grid grid_12 custom-banner-title">
          <strong className="color_white font_size_60 first_font">
            {home[0].banner_big_text}
          </strong>
          <div className="section ">
            <strong className="color_white font_size_30 first_font small-text">
              {home[0].banner_small_text}
            </strong>
          </div>
        </div>
        <div className="grid grid_12 custom-news-section">
          {orderByDate(news)
            .slice(0, 4)
            .map(n => (
              <p key={n.id}>
                <span className="news-title">{n.date}. </span>
                <DataLink to={`/news/${kebabCase(n.title)}-${n.id}`}>
                  {n.title}
                </DataLink>
              </p>
            ))}
        </div>
      </div>
      <div className="section height_50"></div>
    </div>
  </div>
);

BigBanner.propTypes = {
  db: PropTypes.shape({
    news: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('home'),
  withGoogleSheets('news'),
  withSection('home-banner')
)(BigBanner);
