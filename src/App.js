import React from 'react';
import './App.css';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className="App container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <TodoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
