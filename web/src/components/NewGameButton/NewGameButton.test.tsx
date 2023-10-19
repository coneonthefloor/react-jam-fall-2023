import { render } from '@redwoodjs/testing/web'

import NewGameButton from './NewGameButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewGameButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewGameButton />)
    }).not.toThrow()
  })
})
