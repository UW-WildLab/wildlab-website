import React from 'react';
//import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

const PeopleTable = () => (
  <div className="section ">
    <div className="container clearfix">
      <div className="width_100_percentage">
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid_3">
          <div className="section">
            <div className="section ">
              <div className="section position_relative">
                <img
                  alt=""
                  className="section"
                  src="/img/avatar/avatar-chef-5.png"
                />

                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20"></div>
                </div>
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h2>
                  <strong>Person 1</strong>
                </h2>
                <div className="section height_10"></div>
                <h6 className="text_transform_uppercase color_grey">
                  Designation
                </h6>
                <div className="section height_20"></div>
                <DataLink
                  className="display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13"
                  to="/people/some-person"
                >
                  VIEW PROFILE
                </DataLink>
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
  withSection('people-table')
)(PeopleTable);
