import React, { Component } from 'react'
import Home from './components/Home'
import './assets/App.css';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <UserList />
      </div>
    );
  }
}

export default App;
