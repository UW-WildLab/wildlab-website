import React, { Component } from 'react';
import PeopleTable from './PeopleTable';
import { MiniBanner, withTitle } from '../../components';

const title = 'People';

class People extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <PeopleTable fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(People);
