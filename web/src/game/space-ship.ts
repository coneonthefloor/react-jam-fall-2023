enum ThrusterColor {
  YELLOW = 'yellow',
  PURPLE = 'purple',
}

export class SpaceShipUpgrade {
  constructor(
    public name: string,
    public cost: number,
    public callback: () => void
  ) {}
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

  upgrades = [
    new SpaceShipUpgrade('Shield', 5, () => {
      this.hasShield = true
    }),
    new SpaceShipUpgrade('Blaster', 3, () => {
      this.blasterCount += 1
    }),
    new SpaceShipUpgrade('Speed', 6, () => {
      this.speed += 50
    }),
  ]
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
