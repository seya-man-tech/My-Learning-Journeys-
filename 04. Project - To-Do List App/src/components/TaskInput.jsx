// src/components/TaskInput.jsx
import React, { useState } from "react";
import "../styles/TaskInput.css";
function TaskInput({ addTask }) {
  const [inputTitle, setInputTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle.trim()) return; // Do nothing if input is empty
    addTask(inputTitle);
    setInputTitle(""); // Clear input field
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-add-btn">
        Add
      </button>
    </form>
  );
}

export default TaskInput;
