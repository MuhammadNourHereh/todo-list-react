import { useContext } from 'react'
import Task from './Task'
import { TasksContext } from '../context/TasksContext'

const TasksList = () => {
  const {tasks} = useContext(TasksContext)

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} index={index}>{task}</Task>
      ))}
    </div>
  )
}

export default TasksList
