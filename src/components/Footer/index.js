import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from '../Navigation/MenuItems';

//import './Footer.css';

import logo from '../../images/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="section bg_greydark">
      <div className="section height_50"></div>

      <div className="container clearfix">
        <div className="grid grid_12 text_align_center">
          <div className="section">
            <Link to="index.html">
              <img alt="" width="200" className="" src={logo} />
            </Link>
          </div>
          <div className="section height_20"></div>
          <div className="display_inline_block">
            <Link to="index.html">
              <img
                alt=""
                width="40"
                className="margin_right_10"
                src="/img/icons/icon-facebook-circle.svg"
              />
            </Link>
            <Link to="index.html">
              <img
                alt=""
                width="40"
                className="margin_right_10"
                src="/img/icons/icon-twitter-circle.svg"
              />
            </Link>
            <Link to="index.html">
              <img
                alt=""
                width="40"
                className="margin_right_10"
                src="/img/icons/icon-linkedin-circle.svg"
              />
            </Link>
            <Link to="index.html">
              <img
                alt=""
                width="40"
                className="margin_right_10"
                src="/img/icons/icon-youtube-circle.svg"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="section height_50"></div>
    </div>
    <div className="section bg_greydark">
      <div className="container clearfix border_top_1_solid_greydark">
        <div className="grid grid_12 text_align_center text_align_center_responsive border_top_1_solid_greydark_responsive display_none_all_iphone">
          <div className="navigation_copyright">
            <MenuItems isFooter={true} />
          </div>
        </div>
        <div className="grid grid_12 text_align_center text_align_center_responsive">
          <p className="color_grey font_size_14">© Copyright 2019 Wildlab</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
