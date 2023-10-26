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

import StatsPanel from './StatsPanel'

const meta: Meta<typeof StatsPanel> = {
  component: StatsPanel,
}

export default meta

type Story = StoryObj<typeof StatsPanel>

export const Primary: Story = {}
