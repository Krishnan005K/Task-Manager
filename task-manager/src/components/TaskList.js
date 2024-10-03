import { useEffect } from 'react';
import moment from 'moment';

const notifyUser = (task) => {
  const taskDateTime = moment(`${task.date} ${task.time}`, 'YYYY-MM-DD HH:mm');
  const timeUntilTask = taskDateTime.diff(moment());

  if (timeUntilTask > 0) {
    setTimeout(() => {
      alert(`Reminder: Your task "${task.name}" is due now!`);
    }, timeUntilTask);
  }
};

const TaskList = ({ tasks }) => {
  useEffect(() => {
    tasks.forEach(notifyUser);
  }, [tasks]);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Due: {task.date} at {task.time}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
