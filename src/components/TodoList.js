import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const listTodo = this.props.listTodo.map((item, index) => (
      <TodoItem
        key={index}
        index={index}
        content={item.content}
        isDone={item.isDone}
        handleRemove={this.props.handleRemove}
        handleDone={this.props.handleDone} />
    ));

    return (
      <div className="card-body">
        <ul className="list-todo list-unstyled">
          {listTodo}
        </ul>
      </div>
    );
  }
}

export default TodoList;
