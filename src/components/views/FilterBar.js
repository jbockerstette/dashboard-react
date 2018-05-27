import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import Icon from './Icon';
import IconButton from './IconButton';
import './FilterBar.css';

const FilterBar = props => (
  <div className="Filter-bar">
    <Text>{props.title}</Text>
    <Icon src="search" />
    <IconButton iconSrc="filter_list">Filter by</IconButton>
    <div className="Filter-bar-line" />
  </div>
);

FilterBar.propTypes = {
  title: PropTypes.string
};

FilterBar.defaultProps = {
  title: ''
};
export default FilterBar;
