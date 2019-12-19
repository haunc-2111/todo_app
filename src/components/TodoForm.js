import React from 'react';

class TodoForm extends React.Component {
  addToDo = (e) => {
    e.preventDefault();
    let newContent = this.refs.todo_content.value;
    if(newContent) {
      this.props.addToDo(newContent);
      this.refs.form.reset();
    }
  }

  render() {
    return (
      <div className="card-footer">
        <form ref="form" className="form-inline" onSubmit={this.addToDo}>
          <input type="text" className="form-control" placeholder="Enter name" ref="todo_content" />
          <button type="submit" className="btn btn-primary ml-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
