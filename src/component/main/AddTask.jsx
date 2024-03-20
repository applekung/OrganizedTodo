import { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { v4 as uuid } from 'uuid'

export default function AddTask({ addTask }) {
  const [text, setText] = useState('')
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const handleAddTask = (e) => {
    e.preventDefault()
    if (text.trim() === '') {
      return
    }
    addTask({ id: uuid(), text, status: 'INPROGRESS' })
    setText('')
  }

  return (
    <form onSubmit={handleAddTask} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="새로운 할일 추가"
        onChange={handleInputChange}
        className="rounded border border-purple-400 px-4 py-2 focus:ring focus:ring-purple-200"
        value={text}
      />
      <button type="submit">
        <CiCirclePlus className="h-8 w-8 font-bold text-purple-400" />
      </button>
    </form>
  )
}
