import React from 'react';
import Projects from './Projects';
import Publications from './Publications';
import { BigBanner, withTitle } from '../../components';

const Home = () => (
  <div>
    <BigBanner fullWidth noPadding />
    <Projects fullWidth />
    <Publications fullWidth />
  </div>
);

export default withTitle('Home')(Home);
