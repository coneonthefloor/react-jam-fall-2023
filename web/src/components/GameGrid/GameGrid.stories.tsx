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

import GameGrid from './GameGrid'

const meta: Meta<typeof GameGrid> = {
  component: GameGrid,
}

export default meta

type Story = StoryObj<typeof GameGrid>

export const Primary: Story = {}
