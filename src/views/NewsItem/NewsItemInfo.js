import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { withSection, withTitle } from '../../components';

const NewsItemInfo = ({ news }) => (
  <div className="section">
    <div className="container clearfix">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section">
          <p>Published: {news.date}</p>
          <div className="section height_10"></div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${news.details || 'No content'}</p>`
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

NewsItemInfo.propTypes = {
  news: PropTypes.object.isRequired
};

export default flowRight(
  withTitle({ path: 'news.title' }),
  withSection('news-item-info')
)(NewsItemInfo);
