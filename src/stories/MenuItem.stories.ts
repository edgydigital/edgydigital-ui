import type {Meta, StoryObj} from '@storybook/react'

import MenuItem from '../components/MenuItem/MenuItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'textClassName', 'Icon', 'onClick', 'ArrowIcon']
    }
  }
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {label: 'Menu Item', className: 'w-[320px]'}
}
