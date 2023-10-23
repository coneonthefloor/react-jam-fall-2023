export class GridCell {
  disabled = false
  pending = false

  get id(): string {
    return `${this.bounds.x}:${this.bounds.y}`
  }

  constructor(public readonly bounds: DOMRect) {}
}
