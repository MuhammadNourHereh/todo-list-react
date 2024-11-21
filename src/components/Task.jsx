import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import './Task.css'

const Task = ({ children, index, checked }) => {
  const { delTask, setTasks, tasks } = useContext(TasksContext)
  const handleCheckboxChange = () => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks)
  }
  return (
    <div>
      <span
        className={`${checked ? 'checked' : 'unchecked'} flex-grow`}
      >
        {children + ' '}
      </span>
      <input type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <button onClick={() => delTask(index)}>del</button>
    </div>
  )
}

export default Task