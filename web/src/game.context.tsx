import { createContext, useContext, useReducer } from 'react'
import gameReducer from './game.reducer'
import initialGameState, { GameState } from './game.state'
import GameAction from './game.actions'

const GameContext = createContext(null)

const GameDispatchContext = createContext(null)

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  )
}

export function useGame(): GameState {
  return useContext(GameContext)
}

export function useGameDispatch(): (action: GameAction) => GameState {
  return useContext(GameDispatchContext)
}

export default GameContext
