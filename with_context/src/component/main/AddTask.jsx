import { useContext, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { v4 as uuid } from 'uuid'
import { TaskContext } from '../../App'

export default function AddTask() {
  const { addTask } = useContext(TaskContext)
  const [text, setText] = useState('')
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const onAddTask = (e) => {
    e.preventDefault()
    if (text.trim() === '') {
      return
    }
    addTask({ id: uuid(), text, status: 'INPROGRESS' })
    setText('')
  }

  return (
    <form onSubmit={onAddTask} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="새로운 할일 추가"
        onChange={handleInputChange}
        // className="border border-purple-400 focus:ring focus:ring-purple-200 rounded px-4 py-2"
        className="input border border-purple-400"
        value={text}
      />
      <button onClick={onAddTask}>
        <CiCirclePlus className="colorIcon" />
      </button>
    </form>
  )
}
