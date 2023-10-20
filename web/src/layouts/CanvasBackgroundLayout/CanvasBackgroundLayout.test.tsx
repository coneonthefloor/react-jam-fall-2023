import { render } from '@redwoodjs/testing/web'

import CanvasBackgroundLayout from './CanvasBackgroundLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CanvasBackgroundLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasBackgroundLayout />)
    }).not.toThrow()
  })
})
