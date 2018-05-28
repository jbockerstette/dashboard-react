import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = props => {
  const { src, large } = props;
  const cn = `Avatar ${large ? 'Avatar__large' : ''}`;
  return (
    <div className={cn}>
      <img src={src} alt="avatar" />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  large: PropTypes.bool
};

Avatar.defaultProps = {
  large: false
};

export default Avatar;
