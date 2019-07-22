import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import FontAwesome from 'react-fontawesome';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection, withTitle } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

class ProjectInfo extends Component {
  state = { selectedTab: 'projects' };

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

                <div className="section height_50"></div>

                <h2>
                  <strong>Publications</strong>
                </h2>

                <div className="section">
                  <div className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box">
                    <div className="section box_sizing_border_box">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/avatar/avatar-chef-2.png"
                        />
                        <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                          <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                            <h5 className="color_white">
                              <strong>Jane Goleman</strong>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box">
                    <div className="section box_sizing_border_box">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/avatar/avatar-chef-3.png"
                        />
                        <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                          <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                            <h5 className="color_white">
                              <strong>Jane Mgrayan</strong>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box">
                    <div className="section box_sizing_border_box">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/avatar/avatar-chef-4.png"
                        />
                        <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                          <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                            <h5 className="color_white">
                              <strong>Jack Johnson</strong>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box">
                    <div className="section box_sizing_border_box">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/avatar/avatar-chef-5.png"
                        />
                        <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                          <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                            <h5 className="color_white">
                              <strong>Nick Hopiness</strong>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box">
                    <div className="section box_sizing_border_box">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/avatar/avatar-chef-6.png"
                        />
                        <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                          <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                            <h5 className="color_white">
                              <strong>Steve Morgan</strong>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="width_33_percentage width_100_percentage_ipad_port width_100_percentage_all_iphone float_left">
            <div className="section padding_15 box_sizing_border_box">
              <table className="section">
                <tbody>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <img
                        alt=""
                        className=""
                        width="40"
                        src="/img/icons/icon-availability.svg"
                      />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">27 Seats Available</h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20">
                      <img
                        alt=""
                        className=""
                        width="40"
                        src="/img/icons/icon-level.svg"
                      />
                    </td>
                    <td className="padding_20">
                      <h4 className=" text_align_right">Level: Beginner</h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <img
                        alt=""
                        className=""
                        width="40"
                        src="/img/icons/icon-clock-grey.svg"
                      />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">Duration: 8 Hours</h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <img
                        alt=""
                        className=""
                        width="40"
                        src="/img/icons/icon-pin-grey.svg"
                      />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">Location: Sidney</h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding_20 ">
                      <img
                        alt=""
                        className=""
                        width="40"
                        src="/img/icons/icon-card-grey.svg"
                      />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">Price: 35 USD</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  withSection('project-info')
)(ProjectInfo);
