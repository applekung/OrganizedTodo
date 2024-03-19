import { useEffect, useState } from 'react'
import SingleTask from './SingleTask'
import AddTask from './AddTask'
import TodoNav from '../header/TodoNav'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function TodoList({ currentMode }) {
  const [tasks, setTasks] = useLocalStorage([], 'tasks')
  const [taskToShow, setTaskToShow] = useState([])

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleEditTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task)),
    )
  }
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }
  const handleChangeStatus = (id, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (id === task.id ? { ...task, status } : task)),
    )
  }

  useEffect(() => {
    let filteredTasks = tasks
    if (currentMode !== 'ALL') {
      filteredTasks = tasks.filter((task) => task.status === currentMode)
    }

    setTaskToShow(filteredTasks)
  }, [currentMode, tasks])

  return (
    <div className="flex flex-col gap-4">
      <AddTask addTask={handleAddTask} />
      <ul>
        {taskToShow.length ? (
          taskToShow.map((task) => (
            <SingleTask
              key={task.id}
              task={task}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
              handleChangeStatus={handleChangeStatus}
            />
          ))
        ) : (
          <p className="text-neutral-500">할일을 추가해주세요 :D</p>
        )}
      </ul>
    </div>
  )
}
