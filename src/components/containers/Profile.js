import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../views/Panel';
import TitleBar from '../views/TitleBar';

class Profile extends Component {
  componentDidMount() {}

  render() {
    return (
      <Panel>
        <TitleBar title="My Profile" />
      </Panel>
    );
  }
}

Profile.propTypes = {};

export default Profile;
