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

import HighScoreButton from './HighScoreButton'

const meta: Meta<typeof HighScoreButton> = {
  component: HighScoreButton,
}

export default meta

type Story = StoryObj<typeof HighScoreButton>

export const Primary: Story = {}
