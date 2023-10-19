import { render } from '@redwoodjs/testing/web'

import SpaceShipCard from './SpaceShipCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpaceShipCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpaceShipCard />)
    }).not.toThrow()
  })
})
