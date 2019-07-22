import React from 'react';
import { MiniBanner, withTitle } from '../../components';

import './NoMatch.css';

const NoMatch = () => (
  <div className="no-match">
    <MiniBanner fullWidth noPadding />
    <h1>404 Page Not Found</h1>
  </div>
);

export default withTitle('Page Not Found')(NoMatch);
