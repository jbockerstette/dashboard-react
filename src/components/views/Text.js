import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const colorClass = {
  primary: 'Text--primary',
  secondary: 'Text--secondary',
  disabled: 'Text--disabled',
  inherit: 'Text--inherit'
};

const Text = props => {
  const { htmlTag, children, color, small } = props;
  const cname = `Text-title ${colorClass[color]} ${small ? 'Text--small' : ''}`;
  const Component = htmlTag;

  return <Component className={cname}>{children}</Component>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  htmlTag: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'inherit']),
  small: PropTypes.bool
};

Text.defaultProps = {
  htmlTag: 'span',
  color: 'primary',
  small: false
};

export default Text;
