import { render } from '@redwoodjs/testing/web'

import ActionMenu from './ActionMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActionMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionMenu />)
    }).not.toThrow()
  })
})
