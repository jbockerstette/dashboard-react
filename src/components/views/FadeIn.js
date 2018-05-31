import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FadeIn extends Component {
  constructor(props) {
    super(props);
    this.state = { maxIsVisible: 0 };
  }

  componentDidMount() {
    const { delay } = this.props;
    const count = React.Children.count(this.props.children);
    let i = 0;
    this.interval = setInterval(() => {
      i += 1;
      if (i > count) clearInterval(this.interval);

      this.setState({ maxIsVisible: i });
    }, delay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { transitionDuration, children } = this.props;
    return (
      <React.Fragment>
        {React.Children.map(children, (child, i) => (
          <div
            style={{
              transition: `opacity ${transitionDuration}ms, top ${transitionDuration}ms`,
              position: 'relative',
              top: this.state.maxIsVisible > i ? 0 : 20,
              opacity: this.state.maxIsVisible > i ? 1 : 0,
              height: '100%'
            }}
          >
            {child}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

FadeIn.propTypes = {
  transitionDuration: PropTypes.number,
  delay: PropTypes.number
};

FadeIn.defaultProps = {
  transitionDuration: 400,
  delay: 50
};

export default FadeIn;
