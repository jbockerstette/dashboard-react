import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './uxceo-128.jpg';
import './App.css';
import Avatar from './components/views/Avatar';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App-grid">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
          <h4 className="App-title">My dashboard</h4>
          <h5 className="App-subtitle">Welcome to Otis payment portal</h5>
        </header>
        <div>
          <Avatar src={avatar} alt="Avatar" />
          <span className="App-title">Hello Debra</span>
        </div>
      </div>
    );
  }
}

export default App;
