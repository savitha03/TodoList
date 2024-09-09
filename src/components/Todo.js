import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ToggleIndicator from "./ToggleIndicator";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, toggleTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  // const toggleStatus = (id, status) => {
  //   toggleTodo(id, status);
  // };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div
        className={`status-text ${todo.isComplete ? "complete" : "pending"}`}
      >
        {todo.isComplete ? "Complete" : "Pending"}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        {todo.isComplete === false ? (
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        ) : (
          <> </>
        )}
        <ToggleIndicator onChange={(status) => toggleTodo(todo.id, status)} />
      </div>
    </div>
  ));
};

export default Todo;
