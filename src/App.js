import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './uxceo-128.jpg';
import './App.css';
import Avatar from './components/views/Avatar';
import Text from './components/views/Text';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App-grid">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
          <Text htmlTag="h4">My dashboard</Text>
          <Text htmlTag="h5" color="secondary">
            Welcome to Otis payment portal
          </Text>
        </header>
        <div className="App-title">
          <span>Hello Debra</span>
          <Avatar src={avatar} alt="Avatar" />
        </div>
      </div>
    );
  }
}

export default App;
