import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // Use an empty dependency array to ensure this effect runs only once

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call props.onSubmit inside handleSubmit to prevent re-render loop
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput(""); // Reset the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            style={{
              padding: "14px 32px 14px 16px",
              borderRadius: "4px",
              border: "2px solid #149fff",
              outline: "none",
              width: "320px",
              background: "transparent",
              color: "#fff",
            }}
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input-edit"
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
