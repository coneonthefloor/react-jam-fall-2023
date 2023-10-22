import { useEffect, useRef, useState } from 'react'
import { addCell } from 'src/game.actions'
import { useGameDispatch } from 'src/game.context'
import { GridCell } from 'src/game/grid-cell'

const disableCount = 3
const resetCount = 10

const GameGridCell = () => {
  const dispatch = useGameDispatch()
  const cellRef = useRef<HTMLDivElement>(null)

  const [cell, setCell] = useState(null)
  const [count, setCount] = useState(disableCount)
  const [countDown, setCountDown] = useState(false)

  useEffect(() => {
    const newCell = new GridCell(cellRef.current.getBoundingClientRect())
    setCell(newCell)
    dispatch(addCell(newCell))
  }, [])

  const startDisableCountDown = () => {
    setCountDown(true)
    setCount(disableCount)
    cell.pending = true
    cell.disabled = false
  }

  const startResetCountDown = () => {
    setCountDown(true)
    setCount(resetCount)
    cell.disabled = true
    cell.pending = false
  }

  const enableCell = () => {
    cell.pending = false
    cell.disabled = false
    setCountDown(false)
  }

  setTimeout(() => {
    if (count && countDown) {
      setCount(count - 1)
    }
  }, 1000)

  if (cell?.pending && !countDown) {
    startResetCountDown()
  }

  if (count === 0 && countDown) {
    if (cell && !cell.disabled) {
      startResetCountDown()
    } else {
      enableCell()
    }
  }

  return (
    <div
      ref={cellRef}
      onClick={startDisableCountDown}
      className={`flex items-center justify-center border-2 border-sky-300 ${
        cell?.disabled ? 'bg-red-900' : ''
      }`}
    >
      <div
        className={`text-center text-8xl font-bold  ${
          cell?.disabled ? 'text-red-300' : 'text-sky-300'
        }`}
      >
        {countDown ? count : ''}
      </div>
    </div>
  )
}

export default GameGridCell
