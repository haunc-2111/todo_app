import React from 'react';

class TodoHeader extends React.Component {
  render() {
    return (
      <h3 className="card-title mt-3">{this.props.title}</h3>
    );
  }
}

export default TodoHeader;
