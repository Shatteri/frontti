import React from 'react';

function TodoTable({ todos, deleteTodo }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Action</th>
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
  );
}

export default TodoTable;