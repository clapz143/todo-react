import React, { useEffect, useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, isNewTask }) => {
  const [editing, setEditing] = useState(isNewTask);
  const [editedText, setEditedText] = useState(task.text);
  const [completed, setCompleted] = useState(task.completed);

  useEffect(() => {
    setEditedText(task.text);
    setCompleted(task.completed);
  }, [task]);

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleCancelClick = () => {
    setEditing(false);
    setEditedText(task.text);
    setCompleted(task.completed);
  }

  const handleSaveClick = () => {
    if (editedText.trim() !== '') {
      editTask(task.id, editedText, completed);
      setEditing(false);
    }
  }

  return (
    <li>
      <div className="task-checkbox">
        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
      </div>
      <div className="task-text">
        {editing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      
      <div className="task-buttons">
        {editing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => deleteTask(task.id)}>Delete ❌</button>
            <button onClick={handleEditClick}>Edit ✏️</button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;

