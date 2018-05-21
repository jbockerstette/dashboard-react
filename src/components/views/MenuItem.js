import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Text from './Text';
import './MenuItem.css';

const MenuItem = props => {
  const { iconSrc, text } = props;
  return (
    <div className="Menu-item">
      <Icon src={iconSrc} alt="menu" />
      <Text htmlTag="span" color="inherit">
        {text}
      </Text>
    </div>
  );
};

MenuItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string
};

MenuItem.defaultProps = {
  text: ''
};

export default MenuItem;
