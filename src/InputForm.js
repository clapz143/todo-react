import React, { useState } from 'react';

const InputForm = ({ addTask, taskCount }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add</button>  
      {taskCount && <span className="task-count">{taskCount}</span>}
    </form>
  );
};

export default InputForm;
