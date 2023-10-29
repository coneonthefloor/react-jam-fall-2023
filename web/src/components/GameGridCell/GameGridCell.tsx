import { useEffect, useRef, useState } from 'react'
import { addCell } from 'src/game.actions'
import { useGame, useGameDispatch } from 'src/game.context'
import { randomInt } from 'src/game/core/random'
import { GridCell } from 'src/game/grid-cell'

const disableCount = 3
const resetCount = 10

const GameGridCell = () => {
  const state = useGame()
  const dispatch = useGameDispatch()
  const cellRef = useRef<HTMLDivElement>(null)

  const [cell, setCell] = useState(null)

  useEffect(() => {
    const cell = new GridCell(cellRef.current)
    setCell(cell)
    dispatch(addCell(cell))
  }, [])

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
        {/* {state.gameInProgress && (cell?.disabled || cell?.pending) ? count : ''} */}
      </div>
    </div>
  )
}

export default GameGridCell
