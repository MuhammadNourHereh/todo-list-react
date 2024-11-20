import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'

const App = () => {
  const [tasks, setTasks] = useState(['task 1', 'task 2', 'task 3']);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  return (
    <div>
      <h1>Todo List:</h1>
      <AddTaskBar addTask={addTask}/>
      <TasksList tasks={tasks}/>
    </div>
  )
}

export default App
