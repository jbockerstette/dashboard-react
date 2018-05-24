import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = props => {
  const { src, alt } = props;
  return (
    <span className="Icon">
      <i className="material-icons Icon__img" style={{ color: 'red' }}>
        {src}
      </i>
    </span>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Icon;
