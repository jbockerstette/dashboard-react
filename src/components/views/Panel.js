import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

const Panel = props => <div className="Panel">{props.children}</div>;

Panel.propTypes = {
  children: PropTypes.element
};

Panel.defaultProps = {
  children: ''
};

export default Panel;
