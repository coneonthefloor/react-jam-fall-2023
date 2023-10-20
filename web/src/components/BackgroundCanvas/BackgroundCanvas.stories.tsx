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

import BackgroundCanvas from './BackgroundCanvas'

const meta: Meta<typeof BackgroundCanvas> = {
  component: BackgroundCanvas,
}

export default meta

type Story = StoryObj<typeof BackgroundCanvas>

export const Primary: Story = {}
