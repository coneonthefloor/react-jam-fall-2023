import { render } from '@redwoodjs/testing/web'

import GameCanvas from './GameCanvas'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameCanvas />)
    }).not.toThrow()
  })
})
