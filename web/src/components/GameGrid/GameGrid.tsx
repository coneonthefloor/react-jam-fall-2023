import { useEffect, useRef } from 'react'
import GameGridCell from '../GameGridCell/GameGridCell'
import { useGameDispatch } from 'src/game.context'
import { setGridRect } from 'src/game.actions'

function getCells(cellCount: number): JSX.Element[] {
  const cells: JSX.Element[] = []
  for (let i = 0; i < cellCount; i++) {
    cells.push(<GameGridCell key={i} />)
  }
  return cells
}

const GameGrid = () => {
  const dispatch = useGameDispatch()
  const gridRef = useRef<HTMLDivElement>(null)
  const cells = getCells(9)

  useEffect(() => {
    const grid = gridRef.current
    dispatch(setGridRect(grid.getBoundingClientRect()))
  }, [])

  return (
    <div
      ref={gridRef}
      className="grid h-[600px] w-full grid-flow-col grid-rows-3 grid-cols-3 gap-0 border-2 border-sky-300 opacity-20"
    >
      {cells}
    </div>
  )
}

export default GameGrid
