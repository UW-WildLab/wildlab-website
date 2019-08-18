import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const Publications = () => {
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
                <DataLink
                  className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
                  to="#"
                >
                  BEST PAPER
                </DataLink>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h3 style={{ marginBottom: '10px' }}>
                  <DataLink className="color_greydark first_font" to="#">
                    Publication 0
                  </DataLink>
                </h3>
                <p>
                  Abstract: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean egestas magna at porttitor vehicula. Nullam augue
                  augue, dignissim id bibendum id, consequat et leo.
                </p>
              </div>
              <div className="section padding_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                Author 1, Author 2, Author 3, Author 4
              </div>
            </div>
          </div>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          <div className="width_50_percentage width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 1
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>
          <div className="width_50_percentage width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 2
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>
          <div className="width_50_percentage width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>

                <div className="section padding_20 box_sizing_border_box">
                  <h3>
                    <DataLink className="color_greydark first_font" to="#">
                      Publication Title 3
                    </DataLink>
                  </h3>
                </div>
                <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                  Author 1, Author 2
                </div>
              </div>
            </div>
          </div>
          <div className="width_50_percentage width_100_percentage_all_iphone float_left">
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

export default flowRight(
  //withGoogleSheets('executive_committee'),
  withSection('publications')
)(Publications);
