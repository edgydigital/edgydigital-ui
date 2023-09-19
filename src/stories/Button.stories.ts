import type {Meta, StoryObj} from '@storybook/react'

import Button from '../components/Button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'LoadingIcon', 'Icon', 'onClick']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    children: 'Primary'
  }
}
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true
  }
}
export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true
  }
}
