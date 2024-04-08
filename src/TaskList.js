import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, sortBy, filterBy, showCompleted }) => {
  if (!tasks) {
    return <div>No tasks available</div>;
  }

  // Sort tasks
  const sortedTasks = tasks.slice().sort((a, b) => {
    if (sortBy === 'input') {
      return a.text.localeCompare(b.text);
    } else if (sortBy === 'names') {
      return b.text.localeCompare(a.text);
    } else if (sortBy === 'checked') {
      return a.completed - b.completed;
    } else {
      return 0;
    }
  });

  // Filter tasks
let filteredTasks = sortedTasks.filter(task => {
  if (showCompleted) {
    return task.completed; // Show all completed tasks when showCompleted is true
  } else {
    return !task.completed; // Show all incomplete tasks when showCompleted is false
  }
});


  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
