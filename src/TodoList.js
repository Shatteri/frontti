import './App.css';
import React, { useState } from 'react';

function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const dateChanged = (event) => {
    setDate(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, date + " " + desc]);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <p>Description:<input type="text" onChange={inputChanged} value={desc} />
        Date:<input type="text" onChange={dateChanged} value={date} />
        <button onClick="addTodo">Add</button></p>
      </form>
      <table>
        <h5>Date Description</h5>
        <tbody>
          {
          todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo}</td>
          </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;