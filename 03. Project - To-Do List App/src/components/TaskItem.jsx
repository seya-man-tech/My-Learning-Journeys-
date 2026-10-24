// src/components/TaskItem.jsx
import React, { useState } from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleUpdate = () => {
    if (!updatedText.trim()) return;
    editTask(task.id, updatedText);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="task-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="task-edit-input"
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <button onClick={handleUpdate} className="save-btn">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;