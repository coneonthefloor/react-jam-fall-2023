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

import ActionMenu from './ActionMenu'

const meta: Meta<typeof ActionMenu> = {
  component: ActionMenu,
}

export default meta

type Story = StoryObj<typeof ActionMenu>

export const Primary: Story = {}
