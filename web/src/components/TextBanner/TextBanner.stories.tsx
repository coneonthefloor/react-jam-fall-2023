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

import TextBanner from './TextBanner'

const meta: Meta<typeof TextBanner> = {
  component: TextBanner,
  args: {
    text: 'Game Title'
  }
}

export default meta

type Story = StoryObj<typeof TextBanner>

export const Primary: Story = {}
