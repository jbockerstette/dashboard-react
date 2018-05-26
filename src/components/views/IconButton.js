import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import './IconButton.css';

const colorClass = {
  grey: 'Btn--grey',
  red: 'Btn--red',
  green: 'Btn--green',
  inherit: 'Btn--inherit'
};

const IconButton = props => {
  const { iconSrc, children, color, onClick } = props;
  const cname = `Btn ${colorClass[color]}`;
  return (
    <button className={cname} onClick={onClick}>
      <Icon src={iconSrc} />
      {children}
    </button>
  );
};

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['grey', 'red', 'green', 'inherit'])
};

IconButton.defaultProps = {
  onClick: null,
  iconSrc: '',
  color: 'grey'
};

export default IconButton;
