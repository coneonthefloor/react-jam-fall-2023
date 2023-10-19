import { render } from '@redwoodjs/testing/web'

import MenuScreenLayout from './MenuScreenLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MenuScreenLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuScreenLayout />)
    }).not.toThrow()
  })
})
