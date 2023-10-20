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

type GameAction = ReturnType<typeof updateScore | typeof selectSpaceShip>

export default GameAction
