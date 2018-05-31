import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

const classes = ['Panel'];

const style = {
  position: 'absolute',
  width: '100%',
  left: 0,
  top: 0,
  zIndex: -1,
  overflow: 'hidden'
};
const imgStyle = {
  width: '100%',
  height: '100%',
  filter: 'blur(25px)'
};

const Panel = props => {
  classes.push(props.className);
  return (
    <div className={classes.join(' ')} style={props.style}>
      <div className="Panel" style={style}>
        <img style={imgStyle} src={props.backgroundImage} atl="image" />
      </div>
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  backgroundImage: PropTypes.string
};

Panel.defaultProps = {
  className: '',
  style: undefined,
  backgroundImage: undefined
};

export default Panel;
