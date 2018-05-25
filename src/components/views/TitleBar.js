import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Icon from './Icon';
import IconButton from './IconButton';
import './TitleBar.css';

const TitleBar = props => (
  <div className="Title-bar">
    <Text>{props.children}</Text>
    <Icon src="search" />
    <IconButton iconSrc="filter_list">Filter by</IconButton>
    <div className="Title-bar-line" />
  </div>
);

TitleBar.propTypes = {
  children: PropTypes.string
};

TitleBar.defaultProps = {
  children: ''
};
export default TitleBar;
