import { useState } from 'react'
import TodoList from './component/todos/TodoList'
import TodoNav from './component/header/TodoNav'

const modes = ['ALL', 'DONE', 'INPROGRESS']
function App() {
  const [currentMode, setCurrentMode] = useState(modes[0])
  const handleModeChange = (mode) => {
    if (modes.findIndex((el) => el === mode) === -1) return
    setCurrentMode(mode)
  }

  return (
    <div className="max-w-xl mx-auto mt-20">
      <TodoNav
        currentMode={currentMode}
        handleModeChange={handleModeChange}
        modes={modes}
      />
      <TodoList currentMode={currentMode} />
    </div>
  )
}

export default App
