import { KaboomCtx } from 'kaboom'
import { useEffect, useRef } from 'react'
import { useGame, useGameDispatch } from 'src/game.context'
import { createGame, updateGameState } from 'src/game/game'

let game: KaboomCtx

const GameCanvas = () => {
  const state = useGame()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!game) {
      createGame(canvas, state)
    } else {
      updateGameState(state)
    }
  }, [state])

  return <canvas ref={canvasRef} className="fixed h-full w-full"></canvas>
}

export default GameCanvas
