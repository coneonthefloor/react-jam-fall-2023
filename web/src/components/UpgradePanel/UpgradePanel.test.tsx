import { render } from '@redwoodjs/testing/web'

import UpgradePanel from './UpgradePanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpgradePanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpgradePanel />)
    }).not.toThrow()
  })
})
