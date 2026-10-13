// src/App.jsx
import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskStats from "./components/TakStats";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import "./styles/global.css";
import "./styles/App.css";

function App() {
  // Tasks state with LocalStorage support
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("react_todolist_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Filter state ('all', 'pending', 'completed')
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("react_todolist_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task function
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Delete task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task function
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  // Filter tasks logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all'
  });

  // Stats calculations
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>React To-Do List</h1>
      </div>

      <TaskInput addTask={addTask} />

      <TaskStats
        total={totalTasks}
        completed={completedTasks}
        remaining={remainingTasks}
      />

      <TaskFilters currentFilter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
