
import Task from './Task'

const TasksList = ({tasks}) => {


  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index}>{task}</Task>
      ))}
    </div>
  )
}

export default TasksList
