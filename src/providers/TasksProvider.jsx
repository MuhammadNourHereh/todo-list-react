import { createContext, useEffect, useState } from "react";
import TaskModel from "../models/TaskModel";

const TasksContext = createContext(undefined);
const InitialData = [
  new TaskModel('Welecome to todo app 📝'),
  new TaskModel('Add a Task by add button or pressing Enter'),
  new TaskModel('Delete a Task by the trash can button'),
  new TaskModel('Check/ uncheck a Task by single click'),
  new TaskModel('edited a Task by the pen can button Or double click'),
  new TaskModel('Re-order Tasks by dragging'),
  new TaskModel('Tasks are saved locally in your device'),
  new TaskModel('Engoy ✨'),
];

const TasksProvider = ({ children }) => {

  // Load tasks from localStorage on initial render
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : InitialData
  })

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, new TaskModel(newTask)]);
  }
  const delTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))
  }
  const editTaskContent = (index, newContent) => {
    setTasks(tasks.map((task, taskIndex) =>
      taskIndex === index
        ? { ...task, content: newContent }
        : task
    ));
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, addTask, delTask, editTaskContent }}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksProvider, TasksContext };