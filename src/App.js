import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import Startpage from "./components/Startpage";

function App() {
  return (
    <Router>
      <div className="todo-list-app">
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
