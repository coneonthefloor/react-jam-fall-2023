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

export function updateInProgress(inProgress: boolean) {
  return <const>{
    type: 'UPDATE_IN_PROGRESS',
    inProgress,
  }
}

export function updateHealth(health: number) {
  return <const>{
    type: 'UPDATE_HEALTH',
    health,
  }
}

export function updateGold(gold: number) {
  return <const>{
    type: 'UPDATE_GOLD',
    gold,
  }
}

type GameAction = ReturnType<
  | typeof updateScore
  | typeof selectSpaceShip
  | typeof addCell
  | typeof setGridRect
  | typeof updateInProgress
  | typeof updateGold
  | typeof updateHealth
>

export default GameAction
