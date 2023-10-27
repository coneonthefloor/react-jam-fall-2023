import { useEffect, useRef, useState } from 'react'
import { addCell } from 'src/game.actions'
import { useGame, useGameDispatch } from 'src/game.context'
import { randomInt } from 'src/game/core/random'
import { GridCell } from 'src/game/grid-cell'
import StatsPanel from '../StatsPanel/StatsPanel'

const disableCount = 3
const resetCount = 10

const GameGridCell = () => {
  const state = useGame()
  const dispatch = useGameDispatch()
  const cellRef = useRef<HTMLDivElement>(null)

  const [cell, setCell] = useState(null)
  const [count, setCount] = useState(disableCount)
  const [countDown, setCountDown] = useState(false)

  useEffect(() => {
    const newCell = new GridCell(cellRef.current)
    setCell(newCell)
    dispatch(addCell(newCell))

    const interval = setInterval(() => {
      if (randomInt(0, 20) === 2 && !countDown && state.gameInProgress) {
        startDisableCountDown()
      }

      if (!state.gameInProgress) {
        clearInterval(interval)
      }
    }, 3000)
  }, [state.gameInProgress])

  const startDisableCountDown = () => {
    setCountDown(true)
    setCount(disableCount)
    if (cell) {
      cell.pending = true
      cell.disabled = false
    }
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
      className={`flex items-center justify-center border-2 border-sky-300 ${
        cell?.disabled && state.gameInProgress ? 'bg-red-900' : ''
      }`}
    >
      <div
        className={`text-center text-8xl font-bold  ${
          cell?.disabled && state.gameInProgress
            ? 'text-red-300'
            : 'text-sky-300'
        }`}
      >
        {countDown && state.gameInProgress ? count : ''}
      </div>
    </div>
  )
}

export default GameGridCell
