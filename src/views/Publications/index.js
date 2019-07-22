import React, { Component } from 'react';
import PublicationsTable from './PublicationsTable';
import { MiniBanner, withTitle } from '../../components';

const title = 'Publications';

class Publications extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <PublicationsTable fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(Publications);
