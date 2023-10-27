import Phaser from 'phaser'

class Asteroid {
  vx = 0
  vy = 0
  vr = 0
  speed = 200

  constructor(
    public sprite: Phaser.GameObjects.Image,
    public destination: { x: number; y: number }
  ) {}

  update(physics: Phaser.Physics.Arcade.ArcadePhysics) {
    if (this.sprite.body) {
      physics.moveTo(this.sprite, this.destination.x, this.destination.y, 200)
    } else {
      physics.world.enableBody(this.sprite)
    }
    // this.sprite.setX(this.sprite.x + this.vx)
    // this.sprite.setY(this.sprite.y + this.vy)
    this.sprite.setRotation(this.sprite.rotation + this.vr)
  }
}

export default Asteroid
