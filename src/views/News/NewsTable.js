import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import { DataLink, withGoogleSheets, withSection } from '../../components';
import { orderByDate } from '../../utils';

const NewsTable = ({ db: { news } }) => (
  <div className="section ">
    {orderByDate(news).map((n, i) => (
      <div
        key={n.id}
        style={{ clear: i % 3 === 0 ? 'both' : 'none' }}
        className="width_33_percentage width_100_percentage_responsive float_left"
      >
        <div className="section padding_15 box_sizing_border_box">
          <div className="section border_1_solid_grey">
            <div className="section position_relative">
              <img alt="" className="section" src="/img/courses/img23.png" />
              <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
              <DataLink className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9">
                NEWS
              </DataLink>
            </div>
            <div className="section padding_30 box_sizing_border_box">
              <h5 className="second_font color_grey">{n.date}</h5>
              <div className="section height_10"></div>
              <h2>
                <DataLink
                  className="first_font color_greydark"
                  to={`/news/${kebabCase(n.title)}-${n.id}`}
                >
                  {n.title}
                </DataLink>
              </h2>
              <div className="section height_20"></div>
              <p>{n.short_description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

NewsTable.propTypes = {
  db: PropTypes.shape({
    news: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('news'),
  withSection('news-table')
)(NewsTable);
