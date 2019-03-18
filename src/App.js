import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import Library from './Library'
import Users from './Users'

class App extends Component {
  render() {
    var myName="Varma"
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title={myName} year={2019}/>
          <Welcome year={2017}/>
        </header>
        <Users/>
      </div>
    );
  }
}



export default App;
