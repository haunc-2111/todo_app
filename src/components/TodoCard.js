import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listTodo: []};
  }

  componentDidMount() {
    let listTodo = [{content: "Training", isDone: true}, {content: "Nghi Tet", isDone: false}];
    this.setState({listTodo});
  }

  handleRemove = (index) => {
    let listTodo = this.state.listTodo;
    listTodo.splice(index, 1);
    this.setState(listTodo);
  }

  handleDone = (index) => {
    let listTodo = this.state.listTodo;
    this.setState(listTodo);
  }

  addToDo = (content) => {
    let newToDo = {content: content, isDone: false};
    let listTodo = this.state.listTodo;
    listTodo.push(newToDo);
    this.setState(listTodo);
  }

  render() {
    return (
      <div className="card mt-5">
        <TodoHeader title="Hau Todo APP"/>
        <TodoList
          listTodo={this.state.listTodo}
          handleRemove={this.handleRemove}
          handleDone={this.handleDone} />
        <TodoForm
          addToDo={this.addToDo} />
      </div>
    );
  }
}

export default TodoCard;
