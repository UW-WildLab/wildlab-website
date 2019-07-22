import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import FontAwesome from 'react-fontawesome';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection, withTitle } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

class NewsItemInfo extends Component {
  state = { selectedTab: 'NewsItems' };

  selectTab = tab => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    return (
      <div className="section">
        <div className="container clearfix">
          <div className="width_66_percentage width_100_percentage_ipad_port width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section position_relative">
                <img alt="" className="section" src="/img/courses/img1.png" />
                <div className="bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                  <div className="position_absolute bottom_20">
                    <DataLink
                      className="display_inline_block font_size_13 color_white border_1_solid_white first_font padding_8 border_radius_3 margin_right_20"
                      to="account.html#tabs-3"
                    >
                      BOOKMARK
                    </DataLink>
                  </div>
                </div>
              </div>
              <div className="section height_40"></div>
              <div className="section">
                <p>
                  Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Sed quis rutrum tellus, sit amet viverra
                  felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
                  nulla ipsum, venenatis malesuada felis quis, ultricies
                  convallis neque. Pellentesque tristique fringilla tempus.
                  Vivamus bibendum nibh in dolor pharetra, a euismod nulla
                  dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc.
                  Suspendisse eu ante pretium, consectetur leo at, congue quam.
                  Nullam hendrerit porta ante vitae tristique. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Vestibulum ligula libero, feugiat faucibus
                  mattis eget, pulvinar et ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="width_33_percentage width_100_percentage_ipad_port width_100_percentage_all_iphone float_left">
            <h2>
              <strong>Other News</strong>
            </h2>
            <div className="section height_30"></div>
            <div className="section position_relative">
              <img
                alt=""
                className="position_absolute"
                width="100"
                src="/img/courses/square/img1.png"
              />
              <div className="section padding_left_120 box_sizing_border_box">
                <div className="section height_5"></div>
                <h4>Learn To Fish Course Online</h4>
                <div className="section height_10"></div>
                <p className="">by John Doe on 21/12/2016</p>
                <div className="section height_10"></div>
                <DataLink
                  className="display_inline_block color_white  bg_green padding_5_10 border_radius_3 font_size_13"
                  to="#"
                >
                  FREE
                </DataLink>
              </div>
            </div>
            <div className="section height_25"></div>
            <div className="section position_relative">
              <img
                alt=""
                className="position_absolute"
                width="100"
                src="/img/courses/square/img1.png"
              />
              <div className="section padding_left_120 box_sizing_border_box">
                <div className="section height_5"></div>
                <h4>Learn To Fish Course Online</h4>
                <div className="section height_10"></div>
                <p className="">by John Doe on 21/12/2016</p>
                <div className="section height_10"></div>
                <DataLink
                  className="display_inline_block color_white  bg_green padding_5_10 border_radius_3 font_size_13"
                  to="#"
                >
                  FREE
                </DataLink>
              </div>
            </div>
            <div className="section height_25"></div>
            <div className="section position_relative">
              <img
                alt=""
                className="position_absolute"
                width="100"
                src="/img/courses/square/img1.png"
              />
              <div className="section padding_left_120 box_sizing_border_box">
                <div className="section height_5"></div>
                <h4>Learn To Fish Course Online</h4>
                <div className="section height_10"></div>
                <p className="">by John Doe on 21/12/2016</p>
                <div className="section height_10"></div>
                <DataLink
                  className="display_inline_block color_white  bg_green padding_5_10 border_radius_3 font_size_13"
                  to="#"
                >
                  FREE
                </DataLink>
              </div>
            </div>
            <div className="section height_50"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default flowRight(
  //withGoogleSheets('candidate_recommendation_committee'),
  withTitle({ path: 'name' }),
  withSection('NewsItem-info')
)(NewsItemInfo);
