import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTaskBar from './AddTaskBar'
import TasksList from './TasksList'
import { TasksContext } from '../context/TasksContext'


export class TaskModel {
  constructor(content) {
    this.content = content
    this.checked = false
  }
}

const App = () => {

  const [tasks, setTasks] = useState([new TaskModel('task 1'), new TaskModel('task 2'), new TaskModel('task 3')]);
  const addTask = (newTask) => {
    setTasks([...tasks, new TaskModel(newTask)]);
  }
  const delTask = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, delTask }}>
      <div>
        <h1>Todo List:</h1>
        <AddTaskBar addTask={addTask} />
        <TasksList tasks={tasks} />
      </div>
    </TasksContext.Provider>
  )
}

export default App
