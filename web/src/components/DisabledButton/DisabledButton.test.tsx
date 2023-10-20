import { render } from '@redwoodjs/testing/web'

import DisabledButton from './DisabledButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisabledButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisabledButton />)
    }).not.toThrow()
  })
})
