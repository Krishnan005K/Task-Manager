import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <li className="task-item">
      <h4 style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.title}
      </h4>
      <p>{task.description}</p>
      <button onClick={() => onToggleComplete(task)}>Toggle Complete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
