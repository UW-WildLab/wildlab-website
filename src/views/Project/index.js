import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import find from 'lodash/find';
import flowRight from 'lodash/flowRight';
import ProjectInfo from './ProjectInfo';
import NoMatch from '../NoMatch';
import { MiniBanner, withGoogleSheets } from '../../components';

class Project extends Component {
  static propTypes = {
    db: PropTypes.shape({
      projects: PropTypes.arrayOf(PropTypes.object)
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        projectId: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getProjectInfo = id => find(this.props.db.projects, d => d.id === id);

  getId = projectId => {
    const splitString = projectId.split('-');
    return splitString[splitString.length - 1];
  };

  render() {
    const { projectId } = this.props.match.params;
    const project = this.getProjectInfo(this.getId(projectId));

    return project ? (
      <div>
        <MiniBanner fullWidth noPadding title={project.name} />
        <ProjectInfo fullWidth project={project} />
      </div>
    ) : (
      <NoMatch />
    );
  }
}

export default flowRight(
  withRouter,
  withGoogleSheets('projects')
)(Project);
