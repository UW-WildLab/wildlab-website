import React, { Component } from 'react';
import NewsItemInfo from './NewsItemInfo';
import { MiniBanner, withTitle } from '../../components';

const title = 'NewsItem';

class NewsItem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <NewsItemInfo fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(NewsItem);
