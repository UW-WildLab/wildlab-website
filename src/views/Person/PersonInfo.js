import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import flowRight from 'lodash/flowRight';
import { withSection, withTitle } from '../../components';
//import { GridTable, withGoogleSheets } from '../../components';

class PersonInfo extends Component {
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
          <div className="width_66_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section height_20"></div>
              <div className="width_50_percentage width_100_percentage_all_iphone float_left ">
                <p className="padding_10 padding_0_all_iphone padding_left_0">
                  ivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Sed quis rutrum tellus, sit amet viverra
                  felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
                  nulla ipsum, venenatis malesuada felis quis, ultricies
                  convallis neque. Pellentesque tristique fringilla tempus.
                </p>
              </div>
              <div className="width_50_percentage width_100_percentage_all_iphone float_left">
                <p className="padding_10 padding_0_all_iphone padding_right_0">
                  Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Sed quis rutrum tellus, sit amet viverra
                  felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
                  nulla ipsum, venenatis malesuada felis quis, ultricies
                  convallis neque. Pellentesque tristique fringilla tempus.
                </p>
              </div>
              <div className="section height_40"></div>
              <div className="section">
                <div className="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                  <ul
                    className="list_style_none margin_0 padding_0 section border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                    role="tablist"
                  >
                    <li
                      className={`display_inline_block ui-state-default ui-corner-top ${
                        this.state.selectedTab === 'projects'
                          ? 'ui-tabs-active ui-state-active'
                          : ''
                      }`}
                      role="tab"
                      tabIndex="-1"
                      aria-controls="tabs-1"
                      aria-labelledby="ui-id-1"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <span
                          className="outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor"
                          onClick={() => this.selectTab('projects')}
                          tabIndex="-1"
                          id="ui-id-1"
                          role="presentation"
                        >
                          Projects
                        </span>
                        <span
                          className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                          onClick={() => this.selectTab('projects')}
                        >
                          5
                        </span>
                      </h4>
                    </li>
                    <li
                      className={`display_inline_block ui-state-default ui-corner-top ${
                        this.state.selectedTab === 'publications'
                          ? 'ui-tabs-active ui-state-active'
                          : ''
                      }`}
                      role="tab"
                      tabIndex="0"
                      aria-controls="tabs-2"
                      aria-labelledby="ui-id-2"
                      aria-selected="true"
                      aria-expanded="true"
                    >
                      <h4>
                        <span
                          className="outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor"
                          onClick={() => this.selectTab('publications')}
                          tabIndex="-1"
                          id="ui-id-2"
                          role="presentation"
                        >
                          Publications
                        </span>
                        <span
                          className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                          onClick={() => this.selectTab('publications')}
                        >
                          9
                        </span>
                      </h4>
                    </li>
                    <li
                      className={`display_inline_block ui-state-default ui-corner-top ${
                        this.state.selectedTab === 'news'
                          ? 'ui-tabs-active ui-state-active'
                          : ''
                      }`}
                      role="tab"
                      tabIndex="-1"
                      aria-controls="tabs-3"
                      aria-labelledby="ui-id-3"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <span
                          className="outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor"
                          onClick={() => this.selectTab('news')}
                          tabIndex="-1"
                          id="tabs-news"
                          role="presentation"
                        >
                          News
                        </span>
                        <span
                          className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                          onClick={() => this.selectTab('news')}
                        >
                          3
                        </span>
                      </h4>
                    </li>
                  </ul>
                  <div className="section height_20"></div>
                  <div
                    className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tabs-projects"
                    aria-labelledby="tabs-projects"
                    role="tabpanel"
                    aria-hidden={!this.state.selectedTab === 'projects'}
                    style={{
                      display:
                        this.state.selectedTab === 'projects' ? 'block' : 'none'
                    }}
                  >
                    <div className="section">
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
                  <div
                    className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tabs-publications"
                    aria-labelledby="tabs-publications"
                    role="tabpanel"
                    aria-hidden={!this.state.selectedTab === 'publications'}
                    style={{
                      display:
                        this.state.selectedTab === 'publications'
                          ? 'block'
                          : 'none'
                    }}
                  >
                    <div className="section">
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
                  <div
                    className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tabs-news"
                    aria-labelledby="tabs-news"
                    role="tabpanel"
                    aria-hidden={!this.state.selectedTab === 'news'}
                    style={{
                      display:
                        this.state.selectedTab === 'news' ? 'block' : 'none'
                    }}
                  >
                    <div className="section">
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
              </div>
            </div>
            <div className="section height_50"></div>
          </div>
          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <table className="section">
                <tbody>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <FontAwesome name="envelope" size="2x" />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">
                        Email: hallo@johndoe.com
                      </h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20">
                      <FontAwesome name="phone" size="2x" />
                    </td>
                    <td className="padding_20">
                      <h4 className=" text_align_right">Phone: +00 80023457</h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <FontAwesome name="skype" size="2x" />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">Skype: @johndoe</h4>
                    </td>
                  </tr>
                  <tr className="border_bottom_2_solid_grey">
                    <td className="padding_20 ">
                      <FontAwesome name="globe" size="2x" />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">
                        Web: www.johndoe.com
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding_20 ">
                      <FontAwesome name="map-marker" size="2x" />
                    </td>
                    <td className="padding_20 ">
                      <h4 className=" text_align_right">
                        Location: Milan ( IT )
                      </h4>
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
  withSection('person-info')
)(PersonInfo);
