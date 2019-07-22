import React, { Component } from 'react';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';

const withTitle = title => WrappedComponent =>
  class extends Component {
    static displayName = 'WrappedComponent';

    componentDidMount() {
      const documentTitle = isPlainObject(title)
        ? get(this.props, title.path)
        : title;

      document.title = 'WildLab - ' + documentTitle;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withTitle;
