import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import orderBy from 'lodash/orderBy';
import { withGoogleSheets } from 'react-db-google-sheets';
import { DataLink, withSection } from '../../components';

import './Publications.css';

const Publications = ({ db: { publications } }) => {
  publications = orderBy(
    publications,
    ['year', 'conference'],
    ['desc', 'asc']
  ).slice(0, 5);

  return (
    <div className="section">
      <div className="container clearfix">
        <div className="grid grid_12">
          <h1 className="font_size_50 padding_bottom_20">
            <strong>Our Publications</strong>
          </h1>
          <div className="home-publications">
            {publications.map(p => (
              <div className="width_100_percentage_responsive" key={p.id}>
                <div className="section padding_15 box_sizing_border_box">
                  <div className="section">
                    <div className="section box_sizing_border_box">
                      <h3 style={{ marginBottom: '10px' }}>
                        <DataLink
                          className="color_greydark first_font"
                          to={p.url}
                        >
                          {`(${p.conference} ${p.year}) ${p.title}`}
                          {p.best_paper === 'Y' && (
                            <DataLink
                              className="margin_left_10 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
                              to="#"
                            >
                              BEST PAPER
                            </DataLink>
                          )}
                        </DataLink>
                      </h3>
                      <div className="home-publication-authors">
                        {p.authors}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section text_align_center custom-full-width-element">
          <DataLink
            className="display_inline_block font_size_13 color_white bg_blue first_font padding_8 border_radius_3"
            to="/publications"
          >
            View All Publications
          </DataLink>
        </div>
      </div>
    </div>
  );
};

Publications.propTypes = {
  db: PropTypes.shape({
    publications: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('publications'),
  withSection('publications')
)(Publications);
