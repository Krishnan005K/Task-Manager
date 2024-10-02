import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={onEdit} 
            onDelete={onDelete} 
            onToggleComplete={onToggleComplete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
