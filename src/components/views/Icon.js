import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = props => {
  const { src, iconClass } = props;
  if (src === '') {
    return null;
  }
  return (
    <span className="Icon">
      <i className={`material-icons ${iconClass}`}>{src}</i>
    </span>
  );
};

Icon.propTypes = {
  src: PropTypes.string,
  iconClass: PropTypes.string
};

Icon.defaultProps = {
  iconClass: '',
  src: ''
};

export default Icon;
