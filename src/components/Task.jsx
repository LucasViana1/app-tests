import React, { useState } from 'react'

const Task = ({ task, handleDelete, handleEdit, index }) => {
  const [taskName, setTaskName] = useState(task.name)

  return (
    <div data-testid={`task-${index}`}>
      <div>
        <input
          type="text"
          name="task-name"
          id="task-name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <span>Last update: {task.update}</span>
      </div>
      <div>
        <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
        <button type="button" onClick={() => handleEdit(task.id, taskName)}>Edit</button>
      </div>
    </div>
  )
}

export default Task