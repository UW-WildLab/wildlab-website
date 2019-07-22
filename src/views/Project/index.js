import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import { MiniBanner, withTitle } from '../../components';

const title = 'Project';

class Project extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <ProjectInfo fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(Project);
