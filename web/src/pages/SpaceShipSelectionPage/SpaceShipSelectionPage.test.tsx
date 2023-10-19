import { render } from '@redwoodjs/testing/web'

import SpaceShipSelectionPage from './SpaceShipSelectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpaceShipSelectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpaceShipSelectionPage />)
    }).not.toThrow()
  })
})
