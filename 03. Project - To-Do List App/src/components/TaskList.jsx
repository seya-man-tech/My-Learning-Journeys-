// src/components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#a0aec0", marginTop: "20px" }}>
        No tasks found.
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
