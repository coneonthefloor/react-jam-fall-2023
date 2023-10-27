import GameAction from './game.actions'
import { GameState } from './game.state'

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return { ...state, score: action.score }
    case 'UPDATE_GOLD':
      return { ...state, gold: action.gold }
    case 'UPDATE_HEALTH':
      return { ...state, health: action.health }
    case 'UPDATE_IN_PROGRESS':
      return { ...state, gameInProgress: action.inProgress }
    case 'SELECT_SPACE_SHIP':
      return { ...state, selectedSpaceShipName: action.spaceShipName }
    case 'SET_GRID_RECT':
      return { ...state, gridRect: action.gridRect }
    case 'ADD_CELL':
      return { ...state, gridCells: [...state.gridCells, action.cell] }
    default:
      return state
  }
}

export default gameReducer
