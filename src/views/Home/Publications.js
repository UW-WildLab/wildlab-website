import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
import { withGoogleSheets } from '../../components';
import { displayAuthors, getAuthors } from '../../utils';

const Publications = ({ db: { people, publications } }) => {
  publications = publications
    .map(p => ({
      ...p,
      authors: getAuthors(people, p.authors)
    }))
    .reverse();

  const highlightedPublication =
    publications.find(p => p.highlighted === 'Y') || publications[0];

  publications = publications
    .filter(p => p.id !== highlightedPublication.id)
    .slice(0, 4);

  return (
    <div className="section">
      <div className="container clearfix">
        <div className="grid grid_12">
          <h1 className="font_size_50">
            <strong>Our Publications</strong>
          </h1>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          <div className="section padding_15 box_sizing_border_box">
            <div className="section border_1_solid_grey">
              <div className="section position_relative">
                <img alt="" className="section" src="/img/courses/img20.png" />
                <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
                {highlightedPublication.best_paper === 'Y' && (
                  <DataLink
                    className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
                    to="#"
                  >
                    BEST PAPER
                  </DataLink>
                )}
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h3 style={{ marginBottom: '10px' }}>
                  <DataLink className="color_greydark first_font" to="#">
                    {highlightedPublication.title}
                  </DataLink>
                </h3>
                <p>{highlightedPublication.abstract}</p>
              </div>
              <div className="section padding_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                {displayAuthors(highlightedPublication.authors)}
              </div>
            </div>
          </div>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          {publications.map((p, i) => (
            <div
              key={p.id}
              style={{ clear: i % 2 === 0 ? 'both' : 'none' }}
              className="width_50_percentage width_100_percentage_all_iphone float_left"
            >
              <div className="section padding_15 box_sizing_border_box">
                <div className="section border_1_solid_grey">
                  <div className="section position_relative">
                    <img
                      alt=""
                      className="section"
                      src="/img/courses/img2.png"
                    />
                    <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
                    {p.best_paper === 'Y' && (
                      <DataLink
                        className="position_absolute right_20 top_10 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_11 z_index_9"
                        to="#"
                      >
                        BEST PAPER
                      </DataLink>
                    )}
                  </div>

                  <div className="section padding_20 box_sizing_border_box">
                    <h3>
                      <DataLink
                        className="color_greydark first_font"
                        to={p.url}
                      >
                        {p.title}
                      </DataLink>
                    </h3>
                  </div>
                  <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                    {displayAuthors(p.authors)}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    people: PropTypes.arrayOf(PropTypes.object),
    publications: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('publications'),
  withGoogleSheets('people'),
  withSection('publications')
)(Publications);
