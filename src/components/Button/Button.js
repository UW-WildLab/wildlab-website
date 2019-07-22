import React from 'react';
import PropTypes from 'prop-types';
import { Button as B } from 'react-bootstrap';
import classNames from 'classnames';

import './Button.css';

const Button = ({ oval, bg, className, children, ...rest }) => {
  const buttonClass = classNames(oval && 'oval', bg && 'bg', className);
  return (
    <B className={buttonClass} {...rest}>
      {children}
    </B>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  oval: PropTypes.bool,
  bg: PropTypes.bool
};

export default Button;
