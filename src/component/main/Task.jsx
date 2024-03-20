import { useState } from 'react'
import { MdOutlineModeEdit, MdDelete } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

export default function Task({ task, deleteTask, editTask, changeStatus }) {
  const { id, text, status } = task
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState(text)

  const handleCheck = (e) => {
    const newStatus = e.target.checked ? 'DONE' : 'INPROGRESS'
    changeStatus(id, newStatus)
  }

  const handleDelete = () => {
    deleteTask(id)
  }

  const handleEditChange = (e) => setEditedValue(e.target.value)

  const handleEdit = () => {
    editTask({ ...task, text: editedValue })
    setIsEditing(false)
  }

  const handleEditEnter = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    }
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={status === 'DONE' ? true : false}
          className="accent-purple-400"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleEditChange}
            onKeyDown={handleEditEnter}
            className={`w-96 text-lg text-neutral-700 px-2 py-1 ${status === 'DONE' ? 'line-through' : ''}`}
          />
        ) : (
          <input
            className={`w-96 px-2 py-1 text-lg text-neutral-700 pointer-events-none ${status === 'DONE' ? 'line-through text-neutral-400' : ''}`}
            type="text"
            value={text}
            readOnly
          />
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleEdit}>
            <FaCheck className="w-5 h-5 text-neutral-400" />
          </button>
        ) : (
          <div>
            <button onClick={() => setIsEditing(true)}>
              <MdOutlineModeEdit className="w-5 h-5 text-neutral-400" />
            </button>
            <button onClick={handleDelete}>
              <MdDelete className="w-5 h-5 text-neutral-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
