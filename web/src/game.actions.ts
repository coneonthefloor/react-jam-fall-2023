import { GridCell } from './game/grid-cell'

export function updateScore(score: number) {
  return <const>{
    type: 'UPDATE_SCORE',
    score,
  }
}

export function selectSpaceShip(spaceShipName: string) {
  return <const>{
    type: 'SELECT_SPACE_SHIP',
    spaceShipName,
  }
}

export function setGridRect(gridRect: DOMRect) {
  return <const>{
    type: 'SET_GRID_RECT',
    gridRect,
  }
}

export function addCell(cell: GridCell) {
  return <const>{
    type: 'ADD_CELL',
    cell,
  }
}

type GameAction = ReturnType<
  | typeof updateScore
  | typeof selectSpaceShip
  | typeof addCell
  | typeof setGridRect
>

export default GameAction
