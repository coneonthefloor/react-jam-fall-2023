import { GameState } from 'src/game.state'

export class Game {
  constructor(private state: GameState, private canvas: HTMLCanvasElement) {}

  setState(state: GameState) {
    this.state = state
  }
}
