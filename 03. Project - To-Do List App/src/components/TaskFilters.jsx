import React from "react";
import "../styles/TaskFilters.css";
function TaskFilters({ currentFilter, setFilter }) {
  return (
    <div className="task-filters">
      <button
        className={currentFilter === "all" ? "filter-btn active" : "filter-btn"}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={
          currentFilter === "pending" ? "filter-btn active" : "filter-btn"
        }
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
      <button
        className={
          currentFilter === "completed" ? "filter-btn active" : "filter-btn"
        }
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
export default TaskFilters;
