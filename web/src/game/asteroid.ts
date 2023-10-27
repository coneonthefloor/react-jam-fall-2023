import Phaser from 'phaser'

export enum AsteroidOrigin {
  LEFT, RIGHT
}

class Asteroid {
  vr = 0
  speed = 0
  active = false
  isFragment = false
  origin = AsteroidOrigin.LEFT
  sprite: Phaser.GameObjects.Image
  destination: { x: number; y: number }

  update(physics: Phaser.Physics.Arcade.ArcadePhysics) {
    if (this.sprite.body) {
      physics.moveTo(
        this.sprite,
        this.destination.x,
        this.destination.y,
        this.speed
      )
    } else {
      physics.world.enableBody(this.sprite)
    }
    this.sprite.setRotation(this.sprite.rotation + this.vr)
  }
}

export default Asteroid
