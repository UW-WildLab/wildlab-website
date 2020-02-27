import React from 'react';
import DataLink from './DataLink';

import './Logo.css';

const Logo = () => (
  <DataLink to="/home">
    <span className="logo logo-font">WildLab</span>
  </DataLink>
);

export default Logo;
