import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Task from './Task'

export default function TodoList({ currentMode }) {
  const [tasks, setTasks] = useLocalStorage([], 'tasks')
  const [taskToShow, setTaskToShow] = useState([])

  /** AddTask(task추가하는 인풋)에서 newTask를 받아 tasks배열에 추가 */
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const editTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task)),
    )
  }
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  /** Task의 체크박스 토글시 상태를 업데이트하는 함수 */
  const changeStatus = (id, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (id === task.id ? { ...task, status } : task)),
    )
  }

  // tasks와 currentMode가 바뀔때 taskToShow 상태 업데이트
  useEffect(() => {
    // currentMode가 'ALL'일경우 모든 task 보여줌
    let filteredTasks = tasks
    if (currentMode === 'DONE' || currentMode === 'INPROGRESS') {
      filteredTasks = tasks.filter((task) => task.status === currentMode)
    }

    setTaskToShow(filteredTasks)
  }, [currentMode, tasks])

  return (
    <div className="flex flex-col gap-4">
      <AddTask addTask={handleAddTask} />
      <ul>
        {/* taskToShow에서 map으로 Task 한줄씩 보여줌 */}
        {taskToShow.length
          ? taskToShow.map((task) => (
              <Task
                key={task.id}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
                changeStatus={changeStatus}
              />
            ))
          : currentMode === 'ALL' && <p>할일을 추가해주세요 :D</p>}
      </ul>
    </div>
  )
}
