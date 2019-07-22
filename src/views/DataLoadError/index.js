import React from 'react';
import { withSection } from '../../components';

import './DataLoadError.css';

const DataLoadError = () => (
  <div className="error-section">
    <h1>Data Load Error</h1>
    <p>
      An error has occurred. Please contact the site owners. Or Reload the page.
    </p>
  </div>
);

export default withSection('data-load-error')(DataLoadError);
