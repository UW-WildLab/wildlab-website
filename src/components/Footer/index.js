import React from 'react';
import MenuItems from '../Navigation/MenuItems';
import Logo from '../Navigation/Logo';

const Footer = () => (
  <footer className="footer">
    <div className="section bg_greydark">
      <div className="section height_50"></div>

      <div className="container clearfix">
        <div className="grid grid_12 text_align_center">
          <div className="section">
            <Logo />
          </div>
        </div>
      </div>
      <div className="section height_30"></div>
    </div>
    <div className="section bg_greydark">
      <div className="container clearfix border_top_1_solid_greydark">
        <div className="grid grid_12 text_align_center text_align_center_responsive border_top_1_solid_greydark_responsive display_none_all_iphone">
          <div className="navigation_copyright">
            <MenuItems isFooter={true} />
          </div>
        </div>
        <div className="grid grid_12 text_align_center text_align_center_responsive">
          <p className="color_grey font_size_14">© Copyright 2020 WildLab</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
