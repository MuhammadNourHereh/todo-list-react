import { createContext, useState } from "react";
import TaskModel from "../models/TaskModel";

const TasksContext = createContext(undefined);

const TasksProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState([new TaskModel('task 1'), new TaskModel('task 2'), new TaskModel('task 3')]);
  // Load tasks from localStorage on initial render
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem('tasks')
  //   return savedTasks ? JSON.parse(savedTasks) : []
  // })

  // // Save tasks to localStorage whenever they change
  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, new TaskModel(newTask)]);
  }
  const delTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, addTask, delTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksProvider, TasksContext };