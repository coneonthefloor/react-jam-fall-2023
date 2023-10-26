export class GridCell {
  disabled = false
  pending = false

  get bounds(): DOMRect {
    return this.$element.getBoundingClientRect()
  }

  get id(): string {
    return `${this.bounds.x}:${this.bounds.y}`
  }

  constructor(public readonly $element: HTMLElement) {}
}
