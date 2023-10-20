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

import VignetteCanvas from './VignetteCanvas'

const meta: Meta<typeof VignetteCanvas> = {
  component: VignetteCanvas,
}

export default meta

type Story = StoryObj<typeof VignetteCanvas>

export const Primary: Story = {}
