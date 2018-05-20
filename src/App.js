import React, { Component } from 'react';
import logo from './logo.svg';
import iconDashboard from './assets/baseline-dashboard-24px.svg';
import iconAccount from './assets/baseline-account_box-24px.svg';
import iconMobile from './assets/baseline-smartphone-24px.svg';
import iconBills from './assets/baseline-event_note-24px.svg';
import iconComplaints from './assets/baseline-message-24px.svg';
import iconCustormerCare from './assets/baseline-phone-24px.svg';
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
          <MenuItem iconSrc={iconDashboard} text="My dashboard" />
          <MenuItem iconSrc={iconAccount} text="Accounts" />
          <MenuItem iconSrc={iconMobile} text="Mobile" />
          <MenuItem iconSrc={iconBills} text="Bills" />
          <MenuItem iconSrc={iconComplaints} text="Complaints" />
          <MenuItem iconSrc={iconCustormerCare} text="Customer Care" />
        </Menu>
      </div>
    );
  }
}

export default App;
