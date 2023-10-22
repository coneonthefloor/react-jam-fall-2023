import { useEffect, useRef } from 'react'
import { useGame, useGameDispatch } from 'src/game.context'
import { Game } from 'src/game/game'

let game: Game

const GameCanvas = () => {
  const state = useGame()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!game && state.gameInProgress) {
      game = new Game(state, canvas)
    }

    if (game && !state.gameInProgress) {
      game = undefined
    }

    if (game) {
      game.setState(state)
    }
  }, [state])

  return <canvas ref={canvasRef} className="fixed h-full w-full"></canvas>
}

export default GameCanvas
