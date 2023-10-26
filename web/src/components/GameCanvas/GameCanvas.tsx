import { useEffect, useRef } from 'react'
import { useGame } from 'src/game.context'
import getConfig from 'src/game/config'

let game

const GameCanvas = () => {
  const state = useGame()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!game) {
      game = new Phaser.Game(getConfig(canvas))
    }

    game.registry.set('state', state)
  }, [state])

  return <canvas ref={canvasRef} className="fixed h-full w-full"></canvas>
}

export default GameCanvas
