import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import House from './components/House';

class App extends Component {

  constructor() {
    super();
    this.state = {
      houses: [
        {id: 1, color: 'gray', door: 'wood', windows: 'iron', yard: 'grass'},
        {id: 2, color: 'blue', door: 'wood', windows: 'iron', yard: 'grass'},
        {id: 3, color: 'red', door: 'wood', windows: 'iron', yard: 'grass'},
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
              {
                  this.state.houses.map((house) => (
                    <House key={house.id} house={house}></House> 
                  ))
              }
          <a className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
            Learn React its working
          </a>
        </header>
      </div>
    );
  }
}

export default App;
