import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './uxceo-128.jpg';
import './App.css';
import Avatar from './components/views/Avatar';
import Text from './components/views/Text';
import Menu from './components/views/Menu';
import MenuItem from './components/views/MenuItem';
import Icon from './components/views/Icon';
import IconButton from './components/views/IconButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: 'My dashboard' };
    this.handleMenuSelected = this.handleMenuSelected.bind(this);
  }
  componentDidMount() {}
  handleMenuSelected(id) {
    this.setState({ selection: id });
    console.log(id);
  }

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

        <Menu onClick={this.handleMenuSelected}>
          <MenuItem iconSrc="dashboard" text="My dashboard" />
          <MenuItem iconSrc="account_box" text="Accounts" />
          <MenuItem iconSrc="smartphone" text="Mobile" />
          <MenuItem iconSrc="event_note" text="Bills" />
          <MenuItem iconSrc="message" text="Complaints" />
          <MenuItem iconSrc="phone" text="Customer Care" />
        </Menu>
        <div className="App-content">
          <div className="App-content-grid">
            <div>
              <div className="Panel">
                <div className="Title-bar">
                  <Text>My accounts</Text>
                  <Icon src="search" />
                  <IconButton iconSrc="filter_list">Filter by</IconButton>
                  <div className="Title-bar-line" />
                </div>
              </div>
            </div>

            <div>panel 2</div>
            <div>panel 3</div>
            <div>panel 4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
