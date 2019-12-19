import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isDone: this.props.isDone};
  }

  handleRemove = (e) => {
    this.props.handleRemove(this.props.index);
  }

  handleDone = (e) => {
    this.setState((state) => ({
      isDone: !state.isDone
    }));
    this.props.handleDone(this.props.index);
  }

  render() {
    const key = this.props.index;
    const stateClass = this.state.isDone ? "alert alert-success" : "alert alert-dark";
    const todoContent = this.props.content;
    const todoStatus = this.state.isDone ? "done" : "undone";

    return (
      <li key={key} className={stateClass}>
        <input type="checkbox" value={todoStatus} onChange={this.handleDone} className="done-checkbox" defaultChecked={this.state.isDone} />
        {todoContent}
        <button className="close" onClick={this.handleRemove}>x</button>
      </li>
    );
  }
}

export default TodoItem;
