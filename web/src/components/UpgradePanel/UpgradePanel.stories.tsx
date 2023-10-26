// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UpgradePanel from './UpgradePanel'
import SpaceShip from 'src/game/space-ship'

const meta: Meta<typeof UpgradePanel> = {
  component: UpgradePanel,
  args: {
    upgrades: new SpaceShip().upgrades,
  },
}

export default meta

type Story = StoryObj<typeof UpgradePanel>

export const Primary: Story = {}
