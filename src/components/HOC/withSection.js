import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Grid from 'react-bootstrap/Grid';
import classNames from 'classnames';

const withSection = id => WrappedComponent =>
  class extends Component {
    static displayName = 'WrappedComponent';

    static propTypes = {
      fullWidth: PropTypes.bool,
      noPadding: PropTypes.bool,
      bg: PropTypes.bool
    };

    getComponent = () => <WrappedComponent {...this.props} />;

    render() {
      const { noPadding, fullWidth, bg } = this.props;
      let sectionClass = classNames(noPadding && 'no-padding', bg && 'bg');

      return (
        <section id={id} className={sectionClass}>
          {fullWidth ? this.getComponent() : <div className="grid grid_12">{this.getComponent()}</div>}
        </section>
      );
    }
  };

export default withSection;
