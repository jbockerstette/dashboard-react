import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Text from './Text';
import './MenuItem.css';

const MenuItem = props => {
  const { iconSrc, text, onClick, selected } = props;
  return (
    <div
      className={`Menu-item  ${selected ? 'selected' : ''}`}
      onClick={onClick}
      role="menu"
    >
      <Icon
        iconClass={`Menu-item-icon  ${selected ? 'selected' : ''}`}
        src={iconSrc}
        alt="menu"
      />
      <Text htmlTag="span" color="inherit">
        {text}
      </Text>
    </div>
  );
};

MenuItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

MenuItem.defaultProps = {
  text: '',
  onClick: null,
  selected: false
};

export default MenuItem;
