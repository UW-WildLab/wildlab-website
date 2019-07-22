import React from 'react';
import AboutUs from './AboutUs';
import Logos from './Logos';
import Values from './Values';
import { MiniBanner, withTitle } from '../../components';

const title = 'About the WildLab';

const About = () => (
  <div>
    <MiniBanner fullWidth noPadding title={title} />
    <AboutUs />
    <Values />
    <Logos fullWidth noPadding />
  </div>
);

export default withTitle(title)(About);
