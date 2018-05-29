import React, { Component } from 'react';
import { capitalize } from 'lodash';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Avatar from './components/views/Avatar';
import Text from './components/views/Text';
import Menu from './components/views/Menu';
import MenuItem from './components/views/MenuItem';
import Dashboard from './components/views/Dashboard';
import Accounts from './components/containers/Accounts';
import Bills from './components/containers/Bills';
import logo from './logo.svg';
import './App.css';
import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
  getRandomHashFromLocalStorage
} from './helpers/helpers';

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
      let data = getUserFromLocalStorage();
      if (!data) {
        const seed = getRandomHashFromLocalStorage();
        const results = await fetch(`https://randomuser.me/api/?seed=${seed}`);
        data = await results.json();
        setUserToLocalStorage(data);
      }
      if (data.results.length > 0) {
        const [person] = data.results;
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
      <Router>
        <div className="App-grid">
          <img src={logo} className="App-logo" alt="logo" />
          <header className="App-header">
            <Text htmlTag="h3">{selection}</Text>
            <Text htmlTag="h5" color="secondary">
              Welcome to Otis payment portal
            </Text>
          </header>
          <div>
            <Avatar src={person.picture.medium} />
            <Text>Hello {capitalize(person.name.first)}</Text>
          </div>
          <Menu selected={selection} onClick={this.handleMenuSelected}>
            <MenuItem to="/dashboard" iconSrc="dashboard" text="My dashboard" />
            <MenuItem to="/accounts" iconSrc="account_box" text="Accounts" />
            <MenuItem to="/dashboard" iconSrc="smartphone" text="Mobile" />
            <MenuItem to="/bills" iconSrc="event_note" text="Bills" />
            <MenuItem to="/dashboard" iconSrc="message" text="Complaints" />
            <MenuItem to="/dashboard" iconSrc="phone" text="Customer Care" />
          </Menu>

          <div className="App-content">
            <div className="App-content-grid">
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
              <Route
                path="/dashboard"
                render={() => <Dashboard person={person} />}
              />
              <Route path="/accounts" render={() => <Accounts />} />
              <Route path="/bills" render={() => <Bills />} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
