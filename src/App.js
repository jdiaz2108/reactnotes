import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [
        {id: 1, content: 'first'},
        {id: 2, content: 'scnd'},
        {id: 3, content: 'trd'},
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
    {this.state.notes.map(note => ( <Note id="{note.id}" content="{note.content}"/>) )}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React its working
          </a>
        </header>
      </div>
    );
  }
}

export default App;
