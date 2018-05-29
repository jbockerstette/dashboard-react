import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    return function handleClick() {
      this.props.onClick(id);
    }.bind(this);
  }

  render() {
    const { children, selected } = this.props;

    return (
      <ul className="Menu">
        {React.Children.map(children, child => {
          const { text } = child.props;
          return React.cloneElement(child, {
            onClick: this.handleClick(text),
            selected: selected === text
          });
        })}
      </ul>
    );
  }
}

Menu.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Menu.defaultProps = {
  selected: ''
};

export default Menu;
