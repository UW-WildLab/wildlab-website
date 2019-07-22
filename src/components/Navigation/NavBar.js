import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import DataLink from './DataLink';
import MenuItems from './MenuItems';

import logo from '../../images/logo.png';

import './NavBar.css';

class NavBar extends Component {
  state = { showResponsiveMenu: false };

  toggleResponsiveMenu = () => {
    this.setState({ showResponsiveMenu: !this.state.showResponsiveMenu });
  };

  render() {
    const { showResponsiveMenu } = this.state;

    return (
      <div>
        <div
          className="navigation_2_sidebar_content padding_40 box_sizing_border_box overflow_hidden overflow_y_auto transition_all_08_ease bg_green height_100_percentage position_fixed width_300 right_300_negative z_index_9"
          style={{ display: showResponsiveMenu ? 'block' : 'none', right: 0 }}
        >
          <img
            alt=""
            width="25"
            className="close_navigation_2_sidebar_content cursor_pointer right_20 top_20 position_absolute"
            src="/img/icons/icon-close-white.svg"
            onClick={this.toggleResponsiveMenu}
          />
          <div className="navigation_2_sidebar">
            <MenuItems />
          </div>
        </div>
        <div className="section position_relative ">
          <div className="section position_absolute">
            <div className="container clearfix position_relative">
              <div className="grid grid_12 display_none_all_responsive">
                <div className="section height_10"></div>
                <DataLink to="/home">
                  <img
                    alt=""
                    className="position_absolute left_15 top_20"
                    width="170"
                    src={logo}
                  />
                </DataLink>
                <div className="navigation_2 text_align_right float_right display_none_all_responsive">
                  <MenuItems />
                </div>
                <div className="section height_10"></div>
              </div>
              <div className="width_50_percentage text_align_center_all_iphone width_100_percentage_all_iphone float_left display_none display_block_responsive">
                <div className="section height_20"></div>
                <DataLink to="index.html">
                  <img alt="" width="170" className="" src={logo} />
                </DataLink>
              </div>
              <div className="width_50_percentage width_100_percentage_all_iphone float_left display_none display_block_responsive">
                <div className="section height_20"></div>
                <div className="float_right width_100_percentage text_align_right text_align_center_all_iphone">
                  <div className="open_navigation_2_sidebar_content">
                    <img
                      alt=""
                      className="margin_right_20"
                      width="25"
                      src="/img/icons/icon-menu-white.svg"
                      onClick={this.toggleResponsiveMenu}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
