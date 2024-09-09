import React from "react";
import "./styles.css";
import taskImage from "../assests/todo.jpg";
import { useNavigate } from "react-router-dom";

const Startpage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/todolist");
  };
  return (
    <div className="start-page">
      <div className="content">
        <img src={taskImage} alt="Task management" className="start-image" />
        <h1>Welcome to To-do List</h1>
        <p>A workspace for over 10 million influencers around the globe.</p>
        <button className="start-button" onClick={handleStart}>
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default Startpage;
