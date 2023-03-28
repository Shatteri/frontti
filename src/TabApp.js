import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';
import TodoList from './TodoList';

function TabApp() {
    const [value, setValue] = useState('one');
    const handleChange = (event, value) => {
        setValue(value);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="home" />
                <Tab value="two" label="todos" />
            </Tabs>
            {value === 'one' && <div>
                <Link to="/">Home</Link>{' '}
                <Link to="/about">About</Link>{' '}
                <Link to="/contact">Contact</Link>{' '}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                </div>}
            {value === 'two' && <div><TodoList /></div>}
        </div>
    );
}

export default TabApp;
