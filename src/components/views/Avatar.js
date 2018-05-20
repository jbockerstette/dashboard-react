import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = props => {
  const { src, alt } = props;
  return (
    <div className="Avatar">
      <img src={src} className="Avatar__avatar" alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;
