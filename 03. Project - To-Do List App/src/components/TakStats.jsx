// src/components/TaskStats.jsx
import React from "react";
import "../styles/TaskStats.css";

function TakStats({ total, completed, remaining }) {
  return (
    <div className="task-stats">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Remaining: {remaining}</span>
    </div>
  );
}

export default TakStats;
