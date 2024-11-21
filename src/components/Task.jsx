import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'


const Task = ({children, index}) => {
  const {delTask} = useContext(TasksContext)
  return (
    <div>
      {children + '\ '  }
      <button onClick={() => delTask(index)}>del</button>
    </div>
  )
}

export default Task