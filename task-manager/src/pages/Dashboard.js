import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, onSnapshot, deleteDoc, doc, updateDoc, where } from 'firebase/firestore';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import EditTaskForm from '../components/EditTaskForm';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'tasks'), where("userId", "==", user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasksArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksArray);
      });

      return () => unsubscribe();
    }
  }, [user]);

  const handleDeleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'tasks', id));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const taskDoc = doc(db, 'tasks', task.id);
      await updateDoc(taskDoc, { isCompleted: !task.isCompleted });
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user ? user.displayName : 'User'}</h2>
      <AddTaskForm onTaskAdded={() => {}} />
      {editingTask ? (
        <EditTaskForm 
          task={editingTask} 
          onTaskUpdated={() => setEditingTask(null)} 
          onClose={() => setEditingTask(null)} 
        />
      ) : null}
      <TaskList 
        tasks={tasks} 
        onEdit={(task) => setEditingTask(task)} 
        onDelete={handleDeleteTask} 
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default Dashboard;
