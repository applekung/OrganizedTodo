import { useContext, useEffect, useState } from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { TaskContext } from '../../App'

export default function TodoList() {
  const { currentMode, tasks } = useContext(TaskContext)

  const getFilteredData = () => {
    if (currentMode === 'ALL') {
      return tasks
    } else {
      return tasks.filter((task) => task.status === currentMode)
    }
  }

  let filteredTasks = getFilteredData()

  return (
    <div className="flex flex-col gap-4">
      <AddTask />
      <ul>
        {/* taskToShow에서 map으로 Task 한줄씩 보여줌 */}
        {filteredTasks?.length
          ? filteredTasks.map((task) => <Task task={task} />)
          : currentMode === 'ALL' && <p>할일을 추가해주세요 :D</p>}
      </ul>
    </div>
  )
}
