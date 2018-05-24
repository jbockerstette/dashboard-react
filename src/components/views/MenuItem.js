import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Text from './Text';
import './MenuItem.css';

const MenuItem = props => {
  const { iconSrc, text, onClick } = props;
  return (
    <div className="Menu-item" onClick={onClick} role="menu">
      <Icon src={iconSrc} alt="menu" />
      <Text htmlTag="span" color="inherit">
        {text}
      </Text>
    </div>
  );
};

MenuItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  text: '',
  onClick: null
};

export default MenuItem;
