import React, { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';

function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
    setTodos(todos.filter((todo, index) =>
    index !== gridRef.current.getSelectedNodes()[0].childIndex))
    }
    else {
    alert('Select row first');
    }
    }

  const columns = [
    { headerName: 'Date', field: "date", sortable:true, filter:true },
    { headerName: 'Description', field: "description", sortable:true, filter:true },
    { headerName: 'Priority', field: "priority", sortable:true , filter:true, 
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}]


  return (
    <div>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <div className='ag-theme-material' style={
        {
          height: '700px',
          width: '80%',
          margin: 'auto'
        }}>
        <AgGridReact
          ref={gridRef}
          onGridReady={ params => gridRef.current = params.api }
          rowSelection='single'
          columnDefs={columns}
          rowData={todos}>
        </AgGridReact>
      </div>
    </div>
  );
};

export default Todolist;

// import React, { useState } from 'react';
// import './App.css';
// import TodoTable from './TodoTable';

// function App() {
//   const [desc, setDesc] = useState('');
//   const [date, setDate] = useState('');
//   const [todos, setTodos] = useState([]);

//   const inputChanged = (event) => {
//     setDesc(event.target.value);
//   };

//   const dateChanged = (event) => {
//     setDate(event.target.value);
//   };

//   const addTodo = (event) => {
//     event.preventDefault();
//     setTodos([...todos, date + " " + desc]);
//   };

//   const deleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={addTodo}>
//         <p>
//           Description:
//           <input type="text" onChange={inputChanged} value={desc} />
//           Date:
//           <input type="text" onChange={dateChanged} value={date} />
//           <button type="submit">Add</button>
//         </p>
//       </form>
//       <TodoTable todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;