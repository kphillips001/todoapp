import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  markComplete = () => {
    
  }

  render() {
    return this.props.todos.map((todo) =>(
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        />
    ));
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
