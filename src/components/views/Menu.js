import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: props.selected };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    return function handleClick(e) {
      this.setState({ selected: id });
      this.props.onClick(id);
    }.bind(this);
  }

  render() {
    const { children } = this.props;
    const { selected } = this.state;

    return (
      <div className="Menu">
        {React.Children.map(children, child => {
          const { text } = child.props;
          return React.cloneElement(child, {
            onClick: this.handleClick(text),
            selected: selected === text
          });
        })}
      </div>
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
