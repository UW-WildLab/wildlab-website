import React, { Component } from 'react';
import PersonInfo from './PersonInfo';
import { MiniBanner, withTitle } from '../../components';

const title = 'Person';

class Person extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <PersonInfo fullWidth name="Alex Smith" />
      </div>
    );
  }
}

export default withTitle(title)(Person);
