import { updateHealth } from 'src/game.actions'

enum ThrusterColor {
  YELLOW = 'yellow',
  PURPLE = 'purple',
}

export class SpaceShipUpgrade {
  constructor(
    public name: string,
    public cost: number,
    private callback: () => void
  ) {}

  action() {
    this.cost = this.cost * 2
    this.callback()
  }
}

class SpaceShip {
  static name = ''
  spriteName = 'ship_A.png'
  thrusterColor: ThrusterColor = ThrusterColor.PURPLE
  thrusterOriginX = 0.5
  thrusterOriginY = -0.25
  health = 3
  hasShield = false
  blasterCount = 1
  speed = 100
  fireRate = 1000

  upgrades = [
    new SpaceShipUpgrade('Heal', 10, () => {
      this.health = 3
    }),
    new SpaceShipUpgrade('Fire Rate', 5, () => {
      this.fireRate -= 200
    }),
    new SpaceShipUpgrade('Speed', 5, () => {
      this.speed += 100
    }),
  ]

  inDamageCooldown = false
  damage(dispatch: any) {
    if (!this.inDamageCooldown) {
      this.health -= 1
      dispatch(updateHealth(this.health))
      this.inDamageCooldown = true
      setTimeout(() => {
        this.inDamageCooldown = false
      }, 1000)
    }
  }
}

export class ImperiumShield extends SpaceShip {
  public static name = 'Imperium Shield'
  spriteName = 'ship_sidesC.png'
}

export class ScimitarX extends SpaceShip {
  public static name = 'Scimitar X'
  spriteName = 'ship_sidesB.png'
  thrusterOriginY = -0.1
}

export class KobayashiMaru extends SpaceShip {
  static name = 'Kobayashi Maru'
  spriteName = 'ship_sidesA.png'
  thrusterColor = ThrusterColor.YELLOW
  thrusterOriginY = -0.1
}

export default SpaceShip
