import React, { useState } from "react";
import TaskCard from "./TaskCard";

const statusLabels = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const Column = ({ status, tasks, addTask, updateTask, deleteTask }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      addTask(newTitle, status);
      setNewTitle("");
    }
  };

  return (
    <div className="column">
      <h2>{statusLabels[status]}</h2>
      <form onSubmit={handleAdd} className="task-form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New task..."
        />
        <button type="submit">Add</button>
      </form>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
