import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import Panel from '../views/Panel';
import TitleBar from '../views/TitleBar';
import Text from '../views/Text';
import Avatar from '../views/Avatar';
import IconButton from '../views/IconButton';
import './Profile.css';

class Profile extends Component {
  componentDidMount() {}

  render() {
    const { person } = this.props;
    if (!person) return null;
    const city = `${capitalize(person.location.city)}, ${person.nat}`;
    return (
      <React.Fragment>
        <Panel backgroundImage={person.picture.large}>
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
              <Avatar src={person.picture.large} large />
            </div>
            <input
              id="email"
              name="email"
              className="TextEdit"
              type="email"
              placeholder="Email"
              defaultValue={person.email}
            />
            <input
              id="phoneNumber"
              name="phoneNumber"
              className="TextEdit"
              type="tel"
              placeholder="Phone number"
              defaultValue={person.cell}
            />
            <input
              id="city"
              name="city"
              className="TextEdit"
              type="text"
              placeholder="City"
              defaultValue={city}
            />
            <input
              id="password"
              name="password"
              className="TextEdit"
              type="password"
              placeholder="Password"
              defaultValue={person.login.password}
            />
            <input
              id="smsAlerts"
              name="smsAlerts"
              className="TextEdit"
              type="text"
              placeholder="SMS alerts"
              defaultValue="SMS alerts activated"
            />
            <div className="Profile__save">
              <IconButton color="red">Save</IconButton>
            </div>
          </div>
        </Panel>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  person: PropTypes.object
};

Profile.defaultProps = {
  person: null
};

export default Profile;
