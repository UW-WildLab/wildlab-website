import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import find from 'lodash/find';
import flowRight from 'lodash/flowRight';
import moment from 'moment';
import NewsItemInfo from './NewsItemInfo';
import NoMatch from '../NoMatch';
import { MiniBanner, withGoogleSheets } from '../../components';

class NewsItem extends Component {
  static propTypes = {
    db: PropTypes.shape({
      news: PropTypes.arrayOf(PropTypes.object)
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        newsId: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getNewsItemInfo = id => find(this.props.db.news, d => d.id === id);

  getId = projectId => {
    const splitString = projectId.split('-');
    return splitString[splitString.length - 1];
  };

  render() {
    const { newsId } = this.props.match.params;
    let news = this.getNewsItemInfo(this.getId(newsId));

    news.date = moment(news.date, 'MM/DD/YYYY').format('Do MMMM YYYY');

    return news ? (
      <div>
        <MiniBanner fullWidth noPadding title={news.title} />
        <NewsItemInfo fullWidth news={news} />
      </div>
    ) : (
      <NoMatch />
    );
  }
}

export default flowRight(
  withRouter,
  withGoogleSheets('news')
)(NewsItem);
