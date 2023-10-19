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

import SpaceShipCard from './SpaceShipCard'

const meta: Meta<typeof SpaceShipCard> = {
  component: SpaceShipCard,
  args: {
    imageUrl: "https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg",
    spaceShipName: "ViperX"
  }
}

export default meta

type Story = StoryObj<typeof SpaceShipCard>

export const Primary: Story = {}
