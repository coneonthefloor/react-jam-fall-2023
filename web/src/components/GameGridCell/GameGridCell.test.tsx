import { render } from '@redwoodjs/testing/web'

import GameGridCell from './GameGridCell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameGridCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameGridCell />)
    }).not.toThrow()
  })
})
