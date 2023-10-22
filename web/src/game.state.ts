import { imperiumShield, kobayashiMaru, scimitarX } from './game/space-ship'

const initialGameState = {
  score: 0,
  gameInProgress: false,
  selectedSpaceShipName: imperiumShield.name,
  availableSpaceShips: [imperiumShield, kobayashiMaru, scimitarX],
  gridRect: new DOMRect(),
  disabledGridCellRects: [] as DOMRect[],
}

export type GameState = typeof initialGameState

export default initialGameState
