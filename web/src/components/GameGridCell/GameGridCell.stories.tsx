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

import GameGridCell from './GameGridCell'

const meta: Meta<typeof GameGridCell> = {
  component: GameGridCell,
}

export default meta

type Story = StoryObj<typeof GameGridCell>

export const Primary: Story = {}
