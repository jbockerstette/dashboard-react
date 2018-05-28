import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = props => {
  const { src, alt, large } = props;
  const cn = `Avatar ${large ? 'Avatar__large' : ''}`;
  return (
    <div className={cn}>
      <img src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  large: PropTypes.bool
};

Avatar.defaultProps = {
  large: false
};

export default Avatar;
