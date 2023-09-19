import type {Meta, StoryObj} from '@storybook/react'
import Link from '../components/Link/Link'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'Icon']
    }
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const NoIcon: Story = {
  args: {
    label: 'View all'
  }
}
export const IconLeft: Story = {
  args: {
    label: 'View all',
    iconPosition: 'left'
  }
}
export const IconRight: Story = {
  args: {
    label: 'View all',
    iconPosition: 'right'
  }
}
