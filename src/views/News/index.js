import React, { Component } from 'react';
import NewsTable from './NewsTable';
import { MiniBanner, withTitle } from '../../components';

const title = 'News';

class News extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <NewsTable fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(News);
