import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';
import find from 'lodash/find';
import flowRight from 'lodash/flowRight';
import PersonInfo from './PersonInfo';
import NoMatch from '../NoMatch';
import { MiniBanner } from '../../components';

class Person extends Component {
  static propTypes = {
    db: PropTypes.shape({
      people: PropTypes.arrayOf(PropTypes.object)
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        personId: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getPersonInfo = id => find(this.props.db.people, d => d.id === id);

  getId = personId => {
    const splitString = personId.split('-');
    return splitString[splitString.length - 1];
  };

  render() {
    const { personId } = this.props.match.params;
    const person = this.getPersonInfo(this.getId(personId));

    return person ? (
      <div>
        <MiniBanner fullWidth noPadding title={person.name} />
        <PersonInfo fullWidth person={person} />
      </div>
    ) : (
      <NoMatch />
    );
  }
}

export default flowRight(
  withRouter,
  withGoogleSheets('people')
)(Person);
