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

import DisabledButton from './DisabledButton'

const meta: Meta<typeof DisabledButton> = {
  component: DisabledButton,
  args: {
    children: 'Selected'
  }
}

export default meta

type Story = StoryObj<typeof DisabledButton>

export const Primary: Story = {}
