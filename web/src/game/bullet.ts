import Phaser from 'phaser'

class Bullet extends Phaser.Physics.Arcade.Image {
  incX = 0
  incY = 0
  lifespan = 0

  constructor(scene) {
    super(scene, 0, 0, 'sprites', 'ship_B.png')
    this.setScale(.3, .3)
  }

  fire(originX, originY,vx, vy, rotation) {
    this.setActive(true)
    this.setVisible(true)

    this.setPosition(originX, originY)
    this.setRotation(rotation)
    this.incX= vx
    this.incY= vy

    this.lifespan = 1000
  }

  update(time, delta) {
    this.lifespan -= delta

    this.x -= this.incX
    this.y -= this.incY

    if (this.lifespan <= 0) {
      this.setActive(false)
      this.setVisible(false)
    }
  }
}

export default Bullet
