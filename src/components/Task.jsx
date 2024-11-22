import React, { useContext } from 'react'
import './Task.css'
import {TasksContext} from '../providers/TasksProvider'

const Task = ({ children, index, checked }) => {
  const { delTask, setTasks, tasks } = useContext(TasksContext)
  const handleCheckboxChange = () => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks)
  }

  const handleDelete = (e) => {
    // Stop the click event from bubbling up to the parent li
    e.stopPropagation();
    delTask(index);
  }
  return (
    <li className="list-group-item list-group-item-action"
      onClick={handleCheckboxChange}
    ><div className='task-list-item'>
        <span
          className={`${checked ? 'checked' : 'unchecked'}`}
        >
          {children}
        </span>
        <button onClick={handleDelete}
          className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default Task