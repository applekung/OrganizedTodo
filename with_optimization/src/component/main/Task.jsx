import { useState } from 'react'
import { MdOutlineModeEdit, MdDelete } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { memo } from 'react'

const Task = ({ task, deleteTask, editTask, changeStatus }) => {
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
    <div className="flex items-center justify-between">
      <div>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={status === 'DONE' ? true : false}
          className="checkBox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleEditChange}
            onKeyDown={handleEditEnter}
            className={`input ${status === 'DONE' ? 'line-through' : ''}`}
          />
        ) : (
          <input
            className={`input pointer-events-none ${status === 'DONE' ? 'text-neutral-400 line-through' : ''}`}
            type="text"
            value={text}
            readOnly
          />
        )}
      </div>
      <div>
        {isEditing ? (
          <button onClick={handleEdit}>
            <FaCheck className="h-5 w-5 text-neutral-400" />
          </button>
        ) : (
          <div>
            <button onClick={() => setIsEditing(true)}>
              <MdOutlineModeEdit className="h-5 w-5 text-neutral-400" />
            </button>
            <button onClick={handleDelete}>
              <MdDelete className="h-5 w-5 text-neutral-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(Task)
