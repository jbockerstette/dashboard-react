import React, { Component } from 'react';
import { capitalize } from 'lodash';
import Avatar from './components/views/Avatar';
import Text from './components/views/Text';
import Menu from './components/views/Menu';
import MenuItem from './components/views/MenuItem';
import Accounts from './components/containers/Accounts';
import Bills from './components/containers/Bills';
import Profile from './components/containers/Profile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'My dashboard',
      person: null
    };
    this.handleMenuSelected = this.handleMenuSelected.bind(this);
  }

  async componentDidMount() {
    try {
      const results = await fetch('https://randomuser.me/api/?seed=foobar');
      const data = await results.json();
      if (data.results.length > 0) {
        const [person] = data.results;
        console.log(person);
        this.setState(() => ({
          person
        }));
      }
    } catch (error) {
      console.error(error);
      this.setState(() => ({
        error: 'Something went wrong.'
      }));
    }
  }

  handleMenuSelected(id) {
    this.setState({ selection: id });
  }

  render() {
    const { person, selection } = this.state;
    if (!person) return null;
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
          <Avatar src={person.picture.medium} />
          <Text>Hello {capitalize(person.name.first)}</Text>
        </div>

        <Menu selected={selection} onClick={this.handleMenuSelected}>
          <MenuItem iconSrc="dashboard" text="My dashboard" />
          <MenuItem iconSrc="account_box" text="Accounts" />
          <MenuItem iconSrc="smartphone" text="Mobile" />
          <MenuItem iconSrc="event_note" text="Bills" />
          <MenuItem iconSrc="message" text="Complaints" />
          <MenuItem iconSrc="phone" text="Customer Care" />
        </Menu>
        <div className="App-content">
          <div className="App-content-grid">
            <div className="App-dashboard-accounts">
              <Accounts />
            </div>
            <div className="App-dashboard-bills">
              <Bills />
            </div>
            <div className="App-dashboard-profile">
              <Profile person={person} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
