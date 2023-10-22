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

export function disableCellRect(cellRect: DOMRect) {
  return <const>{
    type: 'DISABLE_CELL_RECT',
    cellRect,
  }
}

export function enableCellRect(cellRect: DOMRect) {
  return <const>{
    type: 'ENABLE_CELL_RECT',
    cellRect,
  }
}

type GameAction = ReturnType<
  | typeof updateScore
  | typeof selectSpaceShip
  | typeof disableCellRect
  | typeof enableCellRect
  | typeof setGridRect
>

export default GameAction
