import React, { useState } from 'react';
import './App.css';

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
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.split(" ")[0]}</td>
              <td>{todo.split(" ")[1]}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;