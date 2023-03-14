import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';
import TodoList from './TodoList';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Link to="/">Home</Link>{' '}
    <Link to="/about">About</Link>{' '}
    <Link to="/contact">Contact</Link>{' '}
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
      <div className="App">
      <TodoList />
    </div>
    </BrowserRouter>
    </div>
  );
}
export default App;
