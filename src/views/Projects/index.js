import React, { Component } from 'react';
import ProjectsTable from './ProjectsTable';
import { MiniBanner, withTitle } from '../../components';

const title = 'Projects';

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MiniBanner fullWidth noPadding title={title} />
        <ProjectsTable fullWidth />
      </div>
    );
  }
}

export default withTitle(title)(Projects);
