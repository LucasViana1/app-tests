import React, { useState } from 'react';

import getRandomId from '../utils/getRandomId';
import getFormattedDate from '../utils/getFormattedDate'

import Task from '../components/Task'

const Main = () => {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState({ name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasksList((oldTasksList) => ([
      ...oldTasksList,
      {
        ...task,
        id: getRandomId(),
        update: getFormattedDate(Date.now())
      }
    ]))
    setTask({ name: '' });
  }

  const handleChange = (e) => {
    const newTask = {
      name: e.target.value
    }
    setTask(newTask)
  }

  const handleDeleteTask = (id) => {
    setTasksList(
      (oldTasksList) => oldTasksList.filter(item => item.id !== id)
    )
  }

  const handleEditTask = (id, value) => {
    const selectedTask = {
      id,
      name: value,
      update: getFormattedDate(Date.now())
    };
    const newTasksList = tasksList.filter(item => item.id !== id)

    setTasksList(() => ([...newTasksList, selectedTask]))

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          data-testid="task-input"
          onChange={handleChange}
          value={task.name}
        />
        <button type="submit">Insert</button>
      </form>

      <section>
        {tasksList && tasksList.map((item, index) => (
          <Task
            index={index}
            key={item.id}
            task={item}
            handleDelete={handleDeleteTask}
            handleEdit={handleEditTask}
          />
        ))}
      </section>
    </div>
  );
}

export default Main;
