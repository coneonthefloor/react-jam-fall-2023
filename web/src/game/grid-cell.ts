export class GridCell {
  id = Math.random().toString()
  disabled = false
  pending = false

  get bounds(): DOMRect {
    return this.$element.getBoundingClientRect()
  }

  constructor(public readonly $element: HTMLElement) {}
}
