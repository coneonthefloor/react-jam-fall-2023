import { render } from '@redwoodjs/testing/web'

import BackgroundCanvas from './BackgroundCanvas'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BackgroundCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BackgroundCanvas />)
    }).not.toThrow()
  })
})
