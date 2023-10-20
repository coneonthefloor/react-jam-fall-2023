import GameAction from './game.actions'
import { GameState } from './game.state'

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return { ...state, score: action.score }
    case 'SELECT_SPACE_SHIP':
      return { ...state, selectedSpaceShipName: action.spaceShipName }
    default:
      return state
  }
}

export default gameReducer
