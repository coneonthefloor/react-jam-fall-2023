import Phaser from 'phaser'
import SpaceShip, {
  ImperiumShield,
  KobayashiMaru,
  ScimitarX,
} from './space-ship'
import { GameState } from 'src/game.state'
import { updateGold, updateInProgress } from 'src/game.actions'
import { choose, randomInt, sample } from './core/random'
import Asteroid, { AsteroidOrigin } from './asteroid'
import Bullet from './bullet'

export class Game extends Phaser.Scene {
  gameOver = false
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  spaceShip: SpaceShip
  spaceShipThrusterSprite: Phaser.GameObjects.Image
  playerSprite: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
  gridRect: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  cells: Map<string, Phaser.Types.Physics.Arcade.ImageWithStaticBody> =
    new Map()
  spaceShipParticles: Phaser.GameObjects.Particles.ParticleEmitter
  asteroidParticles: Phaser.GameObjects.Particles.ParticleEmitter
  graphics: Phaser.GameObjects.Graphics
  asteroids: Asteroid[] = []

  bullets: Phaser.GameObjects.Group

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

    this.spaceShipParticles = this.add.particles(0, 0, 'sprites', {
      frame: ['star_small.png', 'star_medium.png'],
      lifespan: 1000,
      speed: { min: 150, max: 250 },
      scale: { start: 0.5, end: 0 },
      gravityY: 0,
      blendMode: 'ADD',
      emitting: false,
    })

    this.asteroidParticles = this.add.particles(0, 0, 'sprites', {
      frame: [
        'meteor_small.png',
        'meteor_detailedSmall.png',
        'meteor_squareSmall.png',
      ],
      lifespan: 1000,
      speed: { min: 150, max: 250 },
      scale: { start: 0.5, end: 0 },
      gravityY: 0,
      blendMode: 'ADD',
      emitting: false,
    })

    this.graphics = this.add.graphics()

    this.generateAsteroid()

    const interval = setInterval(() => {
      this.generateAsteroid()
      if (this.asteroids.length >= 5) {
        clearInterval(interval)
      }
    }, 5000)

    this.bullets = this.physics.add.group({
      classType: Bullet,
      maxSize: 10,
      runChildUpdate: true,
    })
  }

  lastFired = 0

  update(time: number) {
    this.graphics.clear()

    this.updatePlayer()

    if (this.spaceShip.health) {
      if (time > this.lastFired + this.spaceShip.fireRate) {
        const bullet = this.bullets.get()

        if (bullet) {
          const vec = this.physics.velocityFromAngle(
            this.playerSprite.angle + 90,
            1
          )

          const vx = vec.x * 10
          const vy = vec.y * 10

          bullet.fire(
            this.playerSprite.x,
            this.playerSprite.y,
            vx,
            vy,
            this.playerSprite.rotation
          )

          this.lastFired = time + 50
        }
      }

      for (const activeAsteroid of this.asteroids.filter((_) => _.active)) {
        activeAsteroid.update(this.physics)

        for(const bullet of this.bullets.children.getArray()) {
          if(this.physics.overlap(bullet, activeAsteroid.sprite)) {
            this.addCoinDrop(activeAsteroid)
            this.asteroidParticles.explode(
              5,
              activeAsteroid.sprite.x,
              activeAsteroid.sprite.y
            )
            this.setUpAsteroid(activeAsteroid)
          }
        }

        if (this.physics.overlap(this.playerSprite, activeAsteroid.sprite)) {
          this.addCoinDrop(activeAsteroid)
          this.spaceShip.damage(this.registry.get('dispatch'))
          this.asteroidParticles.explode(
            5,
            activeAsteroid.sprite.x,
            activeAsteroid.sprite.y
          )
          this.setUpAsteroid(activeAsteroid)
        } else {
          const otherAsteroids = this.asteroids.filter(
            (_) => _.id !== activeAsteroid.id
          )
          for (const otherAsteroid of otherAsteroids) {
            if (
              this.physics.overlap(activeAsteroid.sprite, otherAsteroid.sprite)
            ) {
              this.addCoinDrop(activeAsteroid)

              this.asteroidParticles.explode(
                5,
                activeAsteroid.sprite.x,
                activeAsteroid.sprite.y
              )
              this.asteroidParticles.explode(
                5,
                otherAsteroid.sprite.x,
                otherAsteroid.sprite.y
              )

              this.setUpAsteroid(otherAsteroid)
              this.setUpAsteroid(activeAsteroid)
            }
          }
        }
      }

      for (const asteroid of this.asteroids) {
        if (
          (asteroid.sprite.x < -asteroid.sprite.width &&
            asteroid.origin === AsteroidOrigin.RIGHT) ||
          (asteroid.sprite.x > this.game.canvas.width &&
            asteroid.origin === AsteroidOrigin.LEFT)
        ) {
          this.setUpAsteroid(asteroid)
        }
      }

      for (const [index, [coinRect, coinText]] of this.coins.entries()) {
        if (coinRect.hitTest(this.playerSprite.x, this.playerSprite.y)) {
          const dispatch = this.registry.get('dispatch')
          const state = this.registry.get('state')
          dispatch(updateGold(state.gold + 5))
          this.coins.splice(index, 1)
          coinRect.destroy()
          coinText.destroy()
        }
      }
    }

    if (!this.spaceShip.health) {
      this.endGame()
    }
  }

  coins: [Phaser.Physics.Arcade.Body, Phaser.GameObjects.Text][] = []
  addCoinDrop(asteroid: Asteroid) {
    const { x, y } = asteroid.sprite
    const { gridRect } = this
    if (this.physics.overlap(gridRect, asteroid.sprite)) {
      const coinText = this.add
        .text(x, y, '🪙', { fontSize: 30 })
        .setPadding(5, 5, 5, 5)
      const coinRect = this.physics.add.body(
        coinText.x,
        coinText.y,
        coinText.width,
        coinText.height
      )
      this.coins.push([coinRect, coinText])
    }
  }

  updatePlayer() {
    if (!this.spaceShip.health && this.playerSprite.visible) {
      this.playerSprite.setVisible(false)
      this.spaceShipThrusterSprite.setVisible(false)
      this.explodePlayer()
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
      if (cell.body) {
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
        }
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
      this.explodePlayer()
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

  explodePlayer() {
    this.spaceShipParticles.setX(this.playerSprite.x)
    this.spaceShipParticles.setY(this.playerSprite.y)
    this.spaceShipParticles.explode(30)
  }

  endGame() {
    this.gameOver = true

    setTimeout(() => {
      this.registry.set('gameOver', true)
      this.registry.get('dispatch')(updateInProgress(false))
    }, 2000)
  }

  setUpAsteroid(asteroid: Asteroid) {
    const variants = [
      'meteor_detailedLarge.png',
      'meteor_detailedSmall.png',
      'meteor_large.png',
      'meteor_small.png',
      'meteor_squareDetailedLarge.png',
      'meteor_squareDetailedSmall.png',
      'meteor_squareLarge.png',
      'meteor_squareSmall.png',
    ]
    asteroid.active = true
    asteroid.origin = choose(AsteroidOrigin.LEFT, AsteroidOrigin.RIGHT)
    const y = randomInt(100, this.game.canvas.height - 100)
    if (asteroid.sprite) {
      asteroid.sprite.destroy()
    }
    const asteroidSprite = this.add.sprite(0, y, 'sprites', sample(variants))
    asteroid.sprite = asteroidSprite
    const destinationCell = sample(Array.from(this.cells.values()))
    let x = this.game.canvas.width + asteroidSprite.width
    if (asteroid.origin === AsteroidOrigin.RIGHT) {
      x = -asteroidSprite.width
      asteroid.sprite.x = this.game.canvas.width
    }
    asteroid.destination = {
      x,
      y: destinationCell.y + destinationCell.height / 2,
    }
    asteroid.vr = 0.02
    asteroid.speed = randomInt(25, 150)
    return asteroid
  }

  generateAsteroid() {
    const asteroid = new Asteroid()
    this.asteroids.push(this.setUpAsteroid(asteroid))
  }
}
