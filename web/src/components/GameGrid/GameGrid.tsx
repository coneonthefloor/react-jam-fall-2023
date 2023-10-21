import GameGridCell from '../GameGridCell/GameGridCell'

const cellCount = 9

const GameGrid = () => {
  const cells: JSX.Element[] = []
  for (let i = 0; i < cellCount; i++) {
    cells.push(<GameGridCell key={i} />)
  }
  return <div className="grid grid-flow-col grid-rows-3 gap-0 h-[600px] w-full border-2 border-sky-300 opacity-20">{cells}</div>
}

export default GameGrid
