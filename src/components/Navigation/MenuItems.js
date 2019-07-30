import React from 'react';
import PropTypes from 'prop-types';
import DataLink from './DataLink';

import './MenuItems.css';

const MenuItems = ({ isFooter }) => (
  <ul className="nav-menu-items">
    <li>
      <DataLink to="/home">Home</DataLink>
    </li>
    <li>
      <DataLink to="/people">People</DataLink>
    </li>
    <li>
      <DataLink to="/projects">Projects</DataLink>
    </li>
    <li>
      <DataLink to="/publications">Publications</DataLink>
    </li>
    <li>
      <DataLink to="/news">News</DataLink>
    </li>
    <li>
      <DataLink to="/about">About</DataLink>
    </li>
    <li>
      <DataLink to="/faqs">FAQs</DataLink>
    </li>
    {isFooter && (
      <li>
        <DataLink to="/calendar">Calendar</DataLink>
      </li>
    )}
  </ul>
);

MenuItems.propTypes = {
  isFooter: PropTypes.bool
};

MenuItems.defaultProps = {
  isFooter: false
};

export default MenuItems;
