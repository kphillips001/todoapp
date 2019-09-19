import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  markComplete = () => {
    
  }

  render() {
    return this.props.todos.map((todo) =>(
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
