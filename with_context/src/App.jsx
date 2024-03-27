import { createContext, useState } from 'react'
import TodoList from './component/main/TodoList'
import TodoNav from './component/header/TodoNav'
import { useLocalStorage } from './hooks/useLocalStorage'

const modes = ['ALL', 'DONE', 'INPROGRESS']
export const TaskContext = createContext()

function App() {
  const [tasks, setTasks] = useLocalStorage([], 'tasks')
  const [currentMode, setCurrentMode] = useState(modes[0])
  const handleModeChange = (mode) => {
    if (modes.findIndex((el) => el === mode) === -1) return
    setCurrentMode(mode)
  }
  /** AddTask(task추가하는 인풋)에서 newTask를 받아 tasks배열에 추가 */
  const onAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const onEditTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task)),
    )
  }
  const onDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  /** Task의 체크박스 토글시 상태를 업데이트하는 함수 */
  const onChangeStatus = (id, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (id === task.id ? { ...task, status } : task)),
    )
  }

  return (
    <TaskContext.Provider
      value={{
        currentMode,
        handleModeChange,
        modes,
        onAddTask,
        onEditTask,
        onChangeStatus,
        onDeleteTask,
        tasks,
      }}
    >
      <div className="mx-auto mt-20 max-w-xl">
        <TodoNav />
        <TodoList />
      </div>
    </TaskContext.Provider>
  )
}

export default App
