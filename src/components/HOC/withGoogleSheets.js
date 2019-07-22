import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { DataLoadError } from '../../views';

const withGoogleSheets = sheet => WrappedComponent =>
  class extends Component {
    displayName = 'DBClass';

    static propTypes = {
      db: PropTypes.object
    };

    static contextTypes = {
      db: PropTypes.object
    };

    render() {
      let result = this.props.db || {};
      const { db } = this.context;

      result[sheet] = get(db, sheet);

      return db && result ? (
        <WrappedComponent {...this.props} db={result} />
      ) : (
        <DataLoadError />
      );
    }
  };

export default withGoogleSheets;
