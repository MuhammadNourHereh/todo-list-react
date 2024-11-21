import React from 'react'
import './App.css'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'
import { TasksProvider } from '../providers/TasksProvider'

const App = () => {
  return (
    <TasksProvider>
      <div className='app'>
        <h1>Todo List 📝</h1>
        <AddTaskBar />
        <TasksList />
      </div>
    </TasksProvider>
  )
}

export default App
