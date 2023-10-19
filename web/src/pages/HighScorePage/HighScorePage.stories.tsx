import type { Meta, StoryObj } from '@storybook/react'

import HighScorePage from './HighScorePage'

const meta: Meta<typeof HighScorePage> = {
  component: HighScorePage,
}

export default meta

type Story = StoryObj<typeof HighScorePage>

export const Primary: Story = {}
