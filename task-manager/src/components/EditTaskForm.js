import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const EditTaskForm = ({ task, onTaskUpdated, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskDoc = doc(db, 'tasks', task.id);
      await updateDoc(taskDoc, { title, description });
      onTaskUpdated(); // Notify parent component that the task has been updated
      onClose(); // Close the edit form
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <h3>Edit Task</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Update Task</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTaskForm;
