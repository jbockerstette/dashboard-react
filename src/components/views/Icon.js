import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = props => {
  const { src, iconClass } = props;
  return (
    <span className="Icon">
      <i className={`material-icons ${iconClass}`}>{src}</i>
    </span>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  iconClass: PropTypes.string
};

Icon.defaultProps = {
  iconClass: ''
};

export default Icon;
