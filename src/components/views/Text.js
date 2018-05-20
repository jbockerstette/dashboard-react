import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const colorClass = {
  primary: 'Text--primary',
  secondary: 'Text--secondary',
  disabled: 'Text--disabled'
};

const Text = props => {
  const { htmlTag, children, color } = props;
  const cname = `Text-title ${colorClass[color]}`;
  const Component = htmlTag;

  return <Component className={cname}>{children}</Component>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  htmlTag: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'disabled'])
};

Text.defaultProps = {
  htmlTag: 'h1',
  color: 'primary'
};

export default Text;
