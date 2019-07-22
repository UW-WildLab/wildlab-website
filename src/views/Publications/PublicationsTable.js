import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const PublicationsTable = () => (
  <div className="section ">
    <div className="container clearfix">
      <div className="width_100_percentage">
        <div className="section padding_15 box_sizing_border_box">
          <div className="section box_sizing_border_box ">
            <div className="width_70_percentage float_left width_100_percentage_all_iphone">
              <div className="section height_20"></div>

              <div className="width_50_percentage float_left">
                <div className="section box_sizing_border_box float_left position_relative padding_right_20">
                  <img
                    alt=""
                    className="position_absolute top_5 left_0 margin_top_5"
                    width="15"
                    src="/img/icons/icon-pen.svg"
                  />
                  <input
                    className="padding_left_25 border_width_2 background_none border_top_width_0 border_right_width_0 border_left_width_0"
                    type="text"
                    placeholder="Keyword"
                  />
                </div>
              </div>
              <div className="width_50_percentage float_left">
                <div className="float_left width_100_percentage_all_iphone">
                  <DataLink
                    className="bg_white_hover color_green_hover border_2_solid_green transition_all_08_ease display_inline_block text_align_center box_sizing_border_box width_100_percentage color_white bg_green first_font padding_10_20 border_radius_3 "
                    to="courses.html"
                  >
                    SEARCH
                  </DataLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="width_100_percentage">
          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>

          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>

          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>

          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>

          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>

          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 4
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default flowRight(
  //withGoogleSheets('candidate_recommendation_committee'),
  withSection('Publications-table')
)(PublicationsTable);
