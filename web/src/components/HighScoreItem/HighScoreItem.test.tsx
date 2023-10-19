import { render } from '@redwoodjs/testing/web'

import HighScoreItem from './HighScoreItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HighScoreItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HighScoreItem />)
    }).not.toThrow()
  })
})
