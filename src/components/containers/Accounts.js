import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../views/TitleBar';
import Panel from '../views/Panel';
import IconButton from '../views/IconButton';
import Text from '../views/Text';
import './Accounts.css';

class Accounts extends Component {
  componentDidMount() {}

  render() {
    return (
      <Panel>
        <TitleBar>My Accounts</TitleBar>
        <div className="Account-row">
          <div>
            <Text>+1-386-575-1232</Text>
            <Text htmlTag="div" small>
              Available
            </Text>
          </div>
          <IconButton color="red">Edit</IconButton>
        </div>
      </Panel>
    );
  }
}

Accounts.propTypes = {};

export default Accounts;
