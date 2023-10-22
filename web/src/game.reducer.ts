import GameAction from './game.actions'
import { GameState } from './game.state'

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return { ...state, score: action.score }
    case 'SELECT_SPACE_SHIP':
      return { ...state, selectedSpaceShipName: action.spaceShipName }
    case 'SET_GRID_RECT':
      return { ...state, gridRect: action.gridRect }
    case 'DISABLE_CELL_RECT':
      const gridCellRects = [...state.disabledGridCellRects, action.cellRect]
      return { ...state, disabledGridCellRects: gridCellRects }
    case 'ENABLE_CELL_RECT':
      const filteredCells = state.disabledGridCellRects.filter(
        ({ x, y }) => x !== action.cellRect.x && y !== action.cellRect.y
      )
      return { ...state, disabledGridCellRects: filteredCells }
    default:
      return state
  }
}

export default gameReducer
