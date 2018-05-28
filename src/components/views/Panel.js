import React from 'react';
import './Panel.css';

const Panel = props => (
  <div>
    <div className="Panel">{props.children}</div>
  </div>
);

export default Panel;
