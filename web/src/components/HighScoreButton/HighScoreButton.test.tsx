import { render } from '@redwoodjs/testing/web'

import HighScoreButton from './HighScoreButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HighScoreButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HighScoreButton />)
    }).not.toThrow()
  })
})
