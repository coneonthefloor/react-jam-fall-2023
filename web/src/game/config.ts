import Phaser from 'phaser'
import { Game } from './game'

const getConfig = (
  canvas: HTMLCanvasElement
): Phaser.Types.Core.GameConfig => ({
  type: Phaser.CANVAS,
  width: window.innerWidth,
  height: window.innerHeight,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  transparent: true,
  scene: Game,
})

export default getConfig
