import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './uxceo-128.jpg';
import './App.css';
import Avatar from './components/views/Avatar';
import Text from './components/views/Text';
import Menu from './components/views/Menu';
import MenuItem from './components/views/MenuItem';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App-grid">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
          <Text htmlTag="h3">My dashboard</Text>
          <Text htmlTag="h5" color="secondary">
            Welcome to Otis payment portal
          </Text>
        </header>
        <div>
          <Avatar src={avatar} alt="Avatar" />
          <Text>Hello Debra</Text>
        </div>
        <Menu>
          <MenuItem
            iconSrc="dashboard"
            text="My dashboard"
            onClick={() => console.log('hi')}
          />
          <MenuItem iconSrc="account_box" text="Accounts" />
          <MenuItem iconSrc="smartphone" text="Mobile" />
          <MenuItem iconSrc="event_note" text="Bills" />
          <MenuItem iconSrc="message" text="Complaints" />
          <MenuItem iconSrc="phone" text="Customer Care" />
        </Menu>
        <div className="Dashboard">hi</div>
      </div>
    );
  }
}

export default App;
