import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import './TitleBar.css';

const TitleBar = props => (
  <div className="Title-bar">
    <Text>{props.title}</Text>
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string
};

TitleBar.defaultProps = {
  title: ''
};
export default TitleBar;
