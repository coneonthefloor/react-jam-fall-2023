import { useRef, useEffect, useState } from 'react'
import { disableCellRect, enableCellRect } from 'src/game.actions'
import { useGame, useGameDispatch } from 'src/game.context'

const disableCount = 3
const resetCount = 10

const GameGridCell = () => {
  const state = useGame()
  const dispatch = useGameDispatch()
  const cellRef = useRef<HTMLDivElement>(null)

  const disabled = state.disabledGridCellRects.some(({ x, y }) => {
    const bounds = cellRef.current.getBoundingClientRect()
    return bounds.x === x && bounds.y === y
  })

  const [count, setCount] = useState(disableCount)
  const [countDown, setCountDown] = useState(false)

  const startDisableCountDown = () => {
    setCountDown(true)
    setCount(disableCount)
  }

  const startResetCountDown = () => {
    setCountDown(true)
    setCount(resetCount)
  }

  const disableCell = () => {
    dispatch(disableCellRect(cellRef.current.getBoundingClientRect()))
  }

  const enableCell = () => {
    dispatch(enableCellRect(cellRef.current.getBoundingClientRect()))
  }

  setTimeout(() => {
    if (count && countDown) {
      setCount(count - 1)
    }
  }, 1000)

  if (count === 0 && countDown) {
    if (!disabled) {
      startResetCountDown()
      disableCell()
    } else {
      setCountDown(false)
      enableCell()
    }
  }

  return (
    <div
      ref={cellRef}
      onClick={startDisableCountDown}
      className={`flex items-center justify-center border-2 border-sky-300 ${
        disabled ? 'bg-red-900' : ''
      }`}
    >
      <div
        className={`text-center text-8xl font-bold  ${
          disabled ? 'text-red-300' : 'text-sky-300'
        }`}
      >
        {countDown ? count : ''}
      </div>
    </div>
  )
}

export default GameGridCell
