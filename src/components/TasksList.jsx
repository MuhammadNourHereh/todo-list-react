import { useContext } from 'react'
import Task from './Task'
import { TasksContext } from '../providers/TasksProvider'

const TasksList = () => {
  const { tasks } = useContext(TasksContext)

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <Task key={index} index={index} checked={task.checked} >{task.content}</Task>
      ))}
    </ul>
  )
}

export default TasksList
