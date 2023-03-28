import React, { useState } from 'react';
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

function TodoList() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const handleChange = (e) => {
    setTodo({ ...todo, date: e.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
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
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    {
      headerName: 'Priority', field: 'priority', sortable: true, filter: true,
      cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'green' }
    },
  ]

  return (
    <div>
      
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <form>
          <TextField
            name="date"
            id="date"
            label="Date"
            type="date"
            onChange={inputChanged}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <TextField label="Description" variant="standard" name="description" value={todo.description} onChange={inputChanged} />
        <TextField label="Priority" variant="standard" name="priority" value={todo.priority} onChange={inputChanged} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>

        </LocalizationProvider>

        <Button onClick={addTodo} variant="contained" >Add</Button>
        <Button onClick={deleteTodo} variant="contained">Delete</Button>

      </Stack>

      <div className='ag-theme-material'
        style={{
          height: '700px',
          width: '80%px',
          margin: 'auto'
        }}>
        <AgGridReact
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
          rowSelection='single'
          columnDefs={columns}
          rowData={todos}>
        </AgGridReact>
      </div>
    </div>
  );
};

export default TodoList;