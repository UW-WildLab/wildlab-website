import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const Projects = () => {
  return (
    <div className="section">
      <div className="container clearfix">
        <div className="grid grid_12">
          <h1 className="font_size_50">
            <strong>Our Projects</strong>
          </h1>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          <div className="width_50_percentage width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section border_1_solid_grey">
                <div className="section position_relative">
                  <img alt="" className="section" src="/img/courses/img2.png" />
                </div>
                <div className="section padding_20 box_sizing_border_box text_align_center">
                  <h3>
                    <DataLink
                      className="color_greydark first_font"
                      to="/projects/some-project"
                    >
                      Project Title 1
                    </DataLink>
                  </h3>
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
                <div className="section padding_20 box_sizing_border_box text_align_center">
                  <h3>
                    <DataLink
                      className="color_greydark first_font"
                      to="/projects/some-project"
                    >
                      Project Title 2
                    </DataLink>
                  </h3>
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

                <div className="section padding_20 box_sizing_border_box text_align_center">
                  <h3>
                    <DataLink
                      className="color_greydark first_font"
                      to="/projects/some-project"
                    >
                      Project Title 3
                    </DataLink>
                  </h3>
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
                <div className="section padding_20 box_sizing_border_box text_align_center">
                  <h3>
                    <DataLink
                      className="color_greydark first_font"
                      to="/projects/some-project"
                    >
                      Project Title 4
                    </DataLink>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          <div className="section padding_15 box_sizing_border_box">
            <div className="section border_1_solid_grey">
              <div className="section position_relative">
                <img alt="" className="section" src="/img/courses/img20.png" />
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h3 style={{ marginBottom: '14px' }}>
                  <DataLink
                    className="color_greydark first_font"
                    to="/projects/some-project"
                  >
                    Project 0
                  </DataLink>
                </h3>
                <p>
                  Abstract: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean egestas magna at porttitor vehicula.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section text_align_center custom-full-width-element">
          <DataLink
            className="display_inline_block font_size_13 color_white bg_blue first_font padding_8 border_radius_3"
            to="/projects"
          >
            View All Projects
          </DataLink>
        </div>
      </div>
    </div>
  );
};

export default flowRight(
  //withGoogleSheets('executive_committee'),
  withSection('projects')
)(Projects);
