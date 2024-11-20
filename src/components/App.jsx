import React from 'react'
import './App.css'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'

const App = () => {
  return (
    <div>
      <h1>Todo List:</h1>
      <AddTaskBar />
      <TasksList />
    </div>
  )
}

export default App
