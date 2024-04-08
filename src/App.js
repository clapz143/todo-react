import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import TaskList from './TaskList';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState(null); // 'input', 'names', 'checked'
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'completed', 'incomplete'
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  }

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setTasks([]);
    }
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const editTask = (taskId, newText, newCompleted) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText, completed: newCompleted } : task
    );
    setTasks(updatedTasks);
  }

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
    switch (sortBy) {
      case 'input':
        setTasks(tasks.slice().sort((a, b) => a.text.localeCompare(b.text)));
        break;
      case 'names':
        setTasks(tasks.slice().sort((a, b) => b.text.localeCompare(a.text)));
        break;
      case 'checked':
        setTasks(tasks.slice().sort((a, b) => a.completed - b.completed));
        break;
        
      default:
        break;
    }
  }

  const handleFilterChange = (filterBy) => {
    setFilterBy(filterBy);
  }

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }
  
  
  return (
    <div>
      <Header handleSortChange={handleSortChange} handleFilterChange={handleFilterChange} toggleShowCompleted={toggleShowCompleted} />
      <div className="input-form-container">
        <InputForm addTask={addTask} />
        <button onClick={handleClearList} className="clear-list-btn">Clear List</button>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} sortBy={sortBy} filterBy={filterBy} showCompleted={showCompleted} />
    </div>
  );
}

export default App;
