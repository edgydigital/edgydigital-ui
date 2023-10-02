import type {Meta, StoryObj} from '@storybook/react'

import Toggle from '../components/Toggle/Toggle'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Toggle> = {
  title: 'Components/Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'onChange']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {isPressed: false, size: 'small'}
}

export const Text: Story = {
  args: {isPressed: false, size: 'small', text: 'Remember me'}
}

export const Description: Story = {
  args: {isPressed: false, size: 'small', text: 'Remember me', description: 'Save my login details for next time.'}
}
