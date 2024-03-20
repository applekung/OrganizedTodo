export default function TodoNav({ currentMode, handleModeChange, modes }) {
  const changeMode = (mode) => () => {
    handleModeChange(mode)
  }

  return (
    <nav>
      <ul className="flex gap-2">
        {/* modes가 거의 변경되지 않을 배열이라 key로 index값을 사용 */}
        {modes?.map((mode, idx) => (
          <li
            key={idx}
            className={`text-semibold px-2 py-1 ${mode === currentMode ? 'text-pink-400' : 'text-neutral-500'}`}
            onClick={changeMode(mode)}
          >
            {mode}
          </li>
        ))}
      </ul>
    </nav>
  )
}
