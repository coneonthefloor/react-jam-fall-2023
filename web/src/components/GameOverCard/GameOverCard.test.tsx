import { render } from '@redwoodjs/testing/web'

import GameOverCard from './GameOverCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameOverCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameOverCard />)
    }).not.toThrow()
  })
})
