import { render } from '@redwoodjs/testing/web'

import TextBanner from './TextBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextBanner text={''} />)
    }).not.toThrow()
  })
})
