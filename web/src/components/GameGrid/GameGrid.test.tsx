import { render } from '@redwoodjs/testing/web'

import GameGrid from './GameGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameGrid />)
    }).not.toThrow()
  })
})
