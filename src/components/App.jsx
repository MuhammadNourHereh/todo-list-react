import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'
import { TasksContext } from '../context/TasksContext'

const App = () => {
  const [tasks, setTasks] = useState(['task 1', 'task 2', 'task 3']);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const delTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  }
  return (
    <TasksContext.Provider value={{tasks, setTasks, delTask}}>
      <div>
        <h1>Todo List:</h1>
        <AddTaskBar addTask={addTask} />
        <TasksList tasks={tasks} delTask={delTask} />
      </div>
    </TasksContext.Provider>
  )
}

export default App
