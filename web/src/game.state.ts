import { GridCell } from './game/grid-cell'
import { ImperiumShield, KobayashiMaru, ScimitarX } from './game/space-ship'

const initialGameState = {
  score: 0,
  gameInProgress: false,
  selectedSpaceShipName: ImperiumShield.name,
  availableSpaceShips: [
    ImperiumShield.name,
    KobayashiMaru.name,
    ScimitarX.name,
  ],
  gridRect: new DOMRect(),
  gridCells: [] as GridCell[],
}

export type GameState = typeof initialGameState

export default initialGameState
