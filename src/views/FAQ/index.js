import React from 'react';
import Questions from './Questions';
import { MiniBanner, withTitle } from '../../components';

const title = 'Frequently Asked Questions';

const FAQ = () => (
  <div>
    <MiniBanner fullWidth noPadding title={title} />
    <Questions />
  </div>
);

export default withTitle(title)(FAQ);
