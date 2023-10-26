import { useEffect, useRef } from 'react'
import { useGame, useGameDispatch } from 'src/game.context'
import getConfig from 'src/game/config'

let game: Phaser.Game

const GameCanvas = () => {
  const state = useGame()
  const dispatch = useGameDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!game && state.gameInProgress) {
      game = new Phaser.Game(getConfig(canvas))
      game.registry.set('dispatch', dispatch)
    }

    if (game) {
      game.registry.set('state', state)

      if (game.registry.get('gameOver')) {
        game.destroy(false)
        game = undefined
      }
    }
  }, [state])

  return <canvas ref={canvasRef} className="fixed h-full w-full"></canvas>
}

export default GameCanvas
