import React, { useState, useEffect } from "react";
import Column from "./Column";

const defaultTasks = [
  { id: 1, title: "Design UI", status: "todo" },
  { id: 2, title: "Build Backend", status: "inprogress" },
  { id: 3, title: "Deploy App", status: "done" },
];

const Board = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("kanban-tasks");
    return stored ? JSON.parse(stored) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, status) => {
    const newTask = {
      id: Date.now(),
      title,
      status,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="board">
      {["todo", "inprogress", "done"].map((status) => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter((t) => t.status === status)}
          addTask={addTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Board;
