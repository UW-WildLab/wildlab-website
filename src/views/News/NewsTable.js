import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const PeopleTable = () => (
  <div className="section ">
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="width_33_percentage width_100_percentage_responsive float_left">
      <div className="section padding_15 box_sizing_border_box">
        <div className="section border_1_solid_grey">
          <div className="section position_relative">
            <DataLink to="/news/some-news">
              <img alt="" className="section" src="/img/courses/img23.png" />
            </DataLink>
            <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
            <DataLink
              className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
              to="/news/some-news"
            >
              NEWS
            </DataLink>
          </div>
          <div className="section padding_30 box_sizing_border_box">
            <h5 className="second_font color_grey">
              <DataLink to="/news/some-news">15th August 2014</DataLink>
            </h5>
            <div className="section height_10"></div>
            <h2>
              <DataLink
                className="first_font color_greydark"
                to="/news/some-news"
              >
                New Website
              </DataLink>
            </h2>
            <div className="section height_20"></div>
            <p>
              <DataLink to="/news/some-news">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas magna at porttitor vehicula nullam augue.
              </DataLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default flowRight(
  //withGoogleSheets('candidate_recommendation_committee'),
  withSection('people-table')
)(PeopleTable);
