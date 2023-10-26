import Phaser from 'phaser'
import SpaceShip, {
  ImperiumShield,
  KobayashiMaru,
  ScimitarX,
} from './space-ship'
import { GameState } from 'src/game.state'

export class Game extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  spaceShip: SpaceShip
  spaceShipThrusterSprite: Phaser.GameObjects.Image
  playerSprite: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
  gridRect: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  cells: Map<string, Phaser.Types.Physics.Arcade.ImageWithStaticBody> =
    new Map()
  emitter: Phaser.GameObjects.Particles.ParticleEmitter
  graphics: Phaser.GameObjects.Graphics

  preload() {
    this.load.atlasXML(
      'sprites',
      'simpleSpace_sheet@2.png',
      'simpleSpace_sheet@2.xml'
    )
  }

  create() {
    const state = this.registry.get('state') as GameState

    this.spaceShip = this.getSelectedShip(state.selectedSpaceShipName)
    this.playerSprite = this.physics.add.image(
      window.innerWidth / 2,
      window.innerHeight / 2,
      'sprites',
      this.spaceShip.spriteName
    )

    this.playerSprite.setScale(0.5, 0.5)
    this.playerSprite.setDamping(true)
    this.playerSprite.setDrag(0.7)
    this.playerSprite.setMaxVelocity(100)
    this.playerSprite.setCollideWorldBounds(true)

    this.spaceShipThrusterSprite = this.add.image(
      this.playerSprite.x,
      this.playerSprite.y,
      'sprites',
      `effect_${this.spaceShip.thrusterColor}.png`
    )
    this.spaceShipThrusterSprite.setScale(0.25, 0.5)
    this.spaceShipThrusterSprite.setDepth(-1)
    this.spaceShipThrusterSprite.setVisible(false)
    this.spaceShipThrusterSprite.setOrigin(
      this.spaceShip.thrusterOriginX,
      this.spaceShip.thrusterOriginY
    )

    this.cursors = this.input.keyboard.createCursorKeys()

    this.gridRect = this.physics.add.staticImage(
      state.gridRect.x + state.gridRect.width / 2,
      state.gridRect.y + state.gridRect.height / 2,
      'sprites',
      'effect_purple.png'
    )
    this.gridRect.setBodySize(state.gridRect.width, state.gridRect.height)
    this.gridRect.setVisible(false)

    for (const cell of state.gridCells) {
      const body = this.physics.add.staticImage(
        cell.bounds.x + cell.bounds.width / 2,
        cell.bounds.y + cell.bounds.height / 2,
        'sprites',
        'effect_purple.png'
      )
      body.setBodySize(cell.bounds.width, cell.bounds.height)
      body.setVisible(false)
      this.cells.set(cell.id, body)
    }

    this.emitter = this.add.particles(0, 0, 'sprites', {
      frame: ['star_small.png', 'star_medium.png'],
      lifespan: 1000,
      speed: { min: 150, max: 250 },
      scale: { start: 0.5, end: 0 },
      gravityY: 0,
      blendMode: 'ADD',
      emitting: false,
    })

    this.graphics = this.add.graphics()
  }

  update() {
    this.graphics.clear()

    this.updatePlayer()
  }

  updatePlayer() {
    if (!this.spaceShip.health) {
      this.playerSprite.setVisible(false)
      this.spaceShipThrusterSprite.setVisible(false)
    }

    if (!this.playerSprite.visible) return

    const state = this.registry.get('state') as GameState
    const collidingCells: Phaser.Types.Physics.Arcade.ImageWithStaticBody[] = []
    for (const cell of state.gridCells) {
      const body = this.cells.get(cell.id)
      if (cell.disabled) {
        collidingCells.push(body)
      }
    }
    this.physics.world.collide(this.playerSprite, collidingCells)

    for (const cell of collidingCells) {
      const rectA = new Phaser.Geom.Rectangle(
        cell.body.x,
        cell.body.y,
        cell.body.width,
        cell.body.height
      )

      if (
        this.spaceShip.health &&
        rectA.contains(this.playerSprite.x, this.playerSprite.y)
      ) {
        this.spaceShip.health = 0
        this.explode()
      }
    }

    const rect = new Phaser.Geom.Rectangle(
      this.gridRect.body.x,
      this.gridRect.body.y,
      this.gridRect.body.width,
      this.gridRect.body.height
    )
    if (
      this.spaceShip.health &&
      !rect.contains(this.playerSprite.x, this.playerSprite.y)
    ) {
      this.spaceShip.health = 0
      this.explode()
    }

    if (this.cursors.up.isDown) {
      this.spaceShipThrusterSprite.setVisible(true)
      this.updateThrusterPosition()
      this.physics.velocityFromRotation(
        this.playerSprite.rotation - 1.570796, // - 90 deg
        100,
        this.playerSprite.body.acceleration
      )
    } else {
      this.spaceShipThrusterSprite.setVisible(false)
      this.playerSprite.setAcceleration(0)
    }

    if (this.cursors.left.isDown) {
      this.playerSprite.setAngularVelocity(-300)
    } else if (this.cursors.right.isDown) {
      this.playerSprite.setAngularVelocity(300)
    } else {
      this.playerSprite.setAngularVelocity(0)
    }

    this.physics.world.wrap(this.playerSprite, 32)
  }

  updateThrusterPosition() {
    this.spaceShipThrusterSprite.setRotation(this.playerSprite.rotation)
    this.spaceShipThrusterSprite.setX(this.playerSprite.x)
    this.spaceShipThrusterSprite.setY(this.playerSprite.y)
  }

  getSelectedShip(spaceShipName: string): SpaceShip {
    switch (spaceShipName) {
      case ImperiumShield.name:
        return new ImperiumShield()
      case KobayashiMaru.name:
        return new KobayashiMaru()
      case ScimitarX.name:
        return new ScimitarX()
    }

    return new SpaceShip()
  }

  explode() {
    this.emitter.setX(this.playerSprite.x)
    this.emitter.setY(this.playerSprite.y)
    this.emitter.explode(30)
  }
}
