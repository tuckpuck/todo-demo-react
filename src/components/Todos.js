import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
