import React from "react";

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const moveLeft = () => {
    const newStatus =
      task.status === "inprogress" ? "todo" : task.status === "done" ? "inprogress" : null;
    if (newStatus) updateTask(task.id, newStatus);
  };

  const moveRight = () => {
    const newStatus =
      task.status === "todo" ? "inprogress" : task.status === "inprogress" ? "done" : null;
    if (newStatus) updateTask(task.id, newStatus);
  };

  return (
    <div className="task-card">
      <p>{task.title}</p>
      <div className="task-actions">
        <button onClick={moveLeft} disabled={task.status === "todo"}>
          ◀
        </button>
        <button onClick={moveRight} disabled={task.status === "done"}>
          ▶
        </button>
        <button onClick={() => deleteTask(task.id)}>🗑</button>
      </div>
    </div>
  );
};

export default TaskCard;
