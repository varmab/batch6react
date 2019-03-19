import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import LibraryMovies from './LibraryMovies'
import Users from './Users'

import Library from './Library'


class App extends Component {
  constructor(){
    super();

    this.state={
      year:2019
    }
  }

  updateYear=()=>{
    this.setState({
      year:this.state.year+1
    })
  }

  render() {
    var myName="Varma"
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title={myName} year={this.state.year}/>
          <button onClick={this.updateYear}>Add to year</button>
        </header>
        <Library/>
      </div>
    );
  }
}



export default App;
