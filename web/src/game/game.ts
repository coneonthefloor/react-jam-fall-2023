import kaboom, { KaboomCtx } from 'kaboom'
import { GameState } from 'src/game.state'

let k: KaboomCtx
let state: GameState

export const updateGameState = (newState: GameState) => {
  state = newState
}

export const createGame = (canvas: HTMLCanvasElement, newState: GameState) => {
  updateGameState(newState)

  k = kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    font: 'sans-serif',
    canvas: canvas,
    background: [0, 0, 0, 0],
  })

  k.loadSpriteAtlas('simpleSpace_sheet.png', {
    asteroid1: {
      x: 144,
      y: 428,
      width: 48,
      height: 48,
    },
    'Scimitar X': {
      x: 0,
      y: 244,
      width: 52,
      height: 52,
    },
    'Imperium Shield': {
      x: 0,
      y: 368,
      width: 52,
      height: 52,
    },
    'Kobayashi Maru': {
      x: 148,
      y: 128,
      width: 42,
      height: 53,
    },
  })

  k.onUpdate(() => {
    for (const cell of state.gridCells) {
      const found = k.get(cell.id)
      if (found.length && !cell.disabled) {
        for (const obj of found) {
          k.destroy(obj)
        }
      } else if (cell.disabled) {
        k.add([
          cell.id,
          cell,
          k.pos(cell.bounds.left, cell.bounds.top),
          k.rect(cell.bounds.width, cell.bounds.height),
          k.area(),
          k.body({ isStatic: true }),
          k.opacity(0),
        ])
      }
    }
  })

  const leftWall = k.add([
    k.pos(state.gridRect.left, state.gridRect.top),
    k.rect(1, state.gridRect.height),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
  ])

  const rightWall = k.add([
    k.pos(state.gridRect.right, state.gridRect.top),
    k.rect(1, state.gridRect.height),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
  ])

  const topWall = k.add([
    k.pos(state.gridRect.left, state.gridRect.top),
    k.rect(state.gridRect.width, 1),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
  ])

  const bottomWall = k.add([
    k.pos(state.gridRect.left, state.gridRect.bottom),
    k.rect(state.gridRect.width, 1),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
  ])

  const player = k.add([
    {
      speed: 400,
    },
    k.anchor('center'),
    k.pos(
      state.gridRect.left + state.gridRect.width / 2,
      state.gridRect.bottom - state.gridRect.height / 2
    ),
    k.sprite(state.selectedSpaceShipName),
    k.body(),
    k.area(),
  ])

  player.onKeyDown('left', () => {
    if (player.checkCollision(leftWall)) return
    player.move(-player.speed, 0)
  })
  player.onKeyDown('right', () => {
    if (player.checkCollision(rightWall)) return
    player.move(player.speed, 0)
  })
  player.onKeyDown('up', () => {
    if (player.checkCollision(topWall)) return
    player.move(0, -player.speed)
  })
  player.onKeyDown('down', () => {
    if (player.checkCollision(bottomWall)) return
    player.move(0, player.speed)
  })

  // const asteroids = []

  // const asteroid = k.add([
  //   k.pos(state.gridRect.left + 50, state.gridRect.top + 50),
  //   k.area(),
  //   k.sprite('asteroid1'),
  //   k.body(),
  // ])

  return k
}
