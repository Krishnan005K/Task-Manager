import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebase';

const AddTaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid; // Get the current user's ID
    try {
      await addDoc(collection(db, 'tasks'), { 
        title, 
        description, 
        isCompleted: false,
        userId, // Include userId in the task
        createdAt: new Date(),
      });
      setTitle('');
      setDescription('');
      onTaskAdded();
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
