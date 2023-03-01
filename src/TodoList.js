import React, { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  };

  const dateChanged = (event) => {
    setDate(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, date + " " + desc]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <p>
          Description:
          <input type="text" onChange={inputChanged} value={desc} />
          Date:
          <input type="text" onChange={dateChanged} value={date} />
          <button type="submit">Add</button>
        </p>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;