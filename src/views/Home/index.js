import React from 'react';
import News from './News';
import Projects from './Projects';
import Publications from './Publications';
import { BigBanner, withTitle } from '../../components';

const Home = () => (
  <div>
    <BigBanner fullWidth noPadding />
    <Publications fullWidth />
    <Projects fullWidth />
    <News fullWidth />
  </div>
);

export default withTitle('Home')(Home);
