import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do homework',
        completed: false,
      },
      {
        id: 2,
        title: 'clean room',
        completed: false,
      },
      {
        id: 3,
        title: 'wash dishes',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
