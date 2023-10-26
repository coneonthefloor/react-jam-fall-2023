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

import GameOverCard from './GameOverCard'

const meta: Meta<typeof GameOverCard> = {
  component: GameOverCard,
  args: {
    score: 98,
    shipName: 'Scimitar X'
  }
}

export default meta

type Story = StoryObj<typeof GameOverCard>

export const Primary: Story = {}
