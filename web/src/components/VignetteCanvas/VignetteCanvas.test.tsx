import { render } from '@redwoodjs/testing/web'

import VignetteCanvas from './VignetteCanvas'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VignetteCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VignetteCanvas />)
    }).not.toThrow()
  })
})
