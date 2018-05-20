import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = props => {
  const { src, alt } = props;
  return (
    <div className="Icon">
      <img src={src} className="Icon__img" alt={alt} />
    </div>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Icon;
