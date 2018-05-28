import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../views/Panel';
import TitleBar from '../views/TitleBar';
import Text from '../views/Text';
import Avatar from '../views/Avatar';
import IconButton from '../views/IconButton';
import avatar from '../../uxceo-128.jpg';

import './Profile.css';

class Profile extends Component {
  componentDidMount() {}

  render() {
    return (
      <Panel>
        <div className="Profile">
          <TitleBar title="My Profile" />
          <div className="Profile__login">
            <Text small color="disabled">
              Last Login: 24 Sep 2017, 13:56
            </Text>
            <Text htmlTag="div" small color="disabled">
              Macbook pro, Buffalo (US)
            </Text>
          </div>
          <div className="Profile__avatar">
            <Avatar src={avatar} large />
          </div>
          <input type="email" />
          <input type="phone" />
          <input type="text" />
          <input type="password" />
          <input type="text" />
          <div className="Profile__save">
            <IconButton color="red">Save</IconButton>
          </div>
        </div>
      </Panel>
    );
  }
}

Profile.propTypes = {};

export default Profile;
