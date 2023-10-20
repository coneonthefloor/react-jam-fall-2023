import { imperiumShield, kobayashiMaru, scimitarX } from './game/space-ship'

const initialGameState = {
  score: 0,
  selectedSpaceShipName: imperiumShield.name,
  availableSpaceShips: [imperiumShield, kobayashiMaru, scimitarX],
}

export type GameState = typeof initialGameState

export default initialGameState
