import React from 'react';
import Projects from './Projects';
import Publications from './Publications';
import { BigBanner, withTitle } from '../../components';

const Home = () => (
  <div>
    <BigBanner fullWidth noPadding />
    <Publications fullWidth />
    <Projects fullWidth />
  </div>
);

export default withTitle('Home')(Home);
