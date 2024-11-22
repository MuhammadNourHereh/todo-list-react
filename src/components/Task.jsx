import React, { useContext, useState } from 'react'
import './Task.css'
import { TasksContext } from '../providers/TasksProvider'

const Task = ({ children, index, checked }) => {
  const { delTask, setTasks, tasks, editTaskContent } = useContext(TasksContext)

  // to handle editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(children)

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

  const handleEdit = (e) => {
    // Stop the click event from bubbling up to the parent li
    e.preventDefault()
    editTaskContent(index, editedContent)
    setIsEditing(false)
  }

  const enterEditMode = (e) => {
    e.preventDefault()
    setIsEditing(true)
  }

  const readingMode =
    <span className={`${checked ? 'checked' : 'unchecked'}`}>
      {children}
    </span>

  const editingMode = <form onSubmit={handleEdit}>
    <input
      type="text"
      value={editedContent}
      onChange={(e) => setEditedContent(e.target.value)}
      autoFocus
      onBlur={() => setIsEditing(false)}
      className="form-control"
    />
  </form>


  return (
    <li className="list-group-item list-group-item-action"
      onClick={handleCheckboxChange}
    ><div className='task-list-item'>
        {isEditing ? editingMode : readingMode}
        <div className='buttons'> 
          <button onClick={enterEditMode}
            className="btn btn-sm btn-secondary">
            <i className="bi bi-pen"></i>
          </button>
          <button onClick={handleDelete}
            className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  )
}

export default Task