import { GridCell } from './game/grid-cell'
import { imperiumShield, kobayashiMaru, scimitarX } from './game/space-ship'

const initialGameState = {
  score: 0,
  gameInProgress: false,
  selectedSpaceShipName: imperiumShield.name,
  availableSpaceShips: [imperiumShield, kobayashiMaru, scimitarX],
  gridRect: new DOMRect(),
  gridCells: [] as GridCell[]
}

export type GameState = typeof initialGameState

export default initialGameState
