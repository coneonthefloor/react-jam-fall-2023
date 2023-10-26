enum ThrusterColor {
  YELLOW = 'yellow',
  PURPLE = 'purple',
}

class SpaceShip {
  static name = ''
  spriteName = 'ship_A.png'
  thrusterColor: ThrusterColor = ThrusterColor.PURPLE
  thrusterOriginX = 0.5
  thrusterOriginY = -0.25
  health = 3

  constructor() {}
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
