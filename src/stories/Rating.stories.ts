import type {Meta, StoryObj} from '@storybook/react'

import Rating from '../components/Rating/Rating'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Rating> = {
  title: 'Components/Atoms/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'extraLarge'],

      control: {
        type: 'select'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {rating: 3.4}
}

export const Label: Story = {
  args: {rating: 3.4, showLabel: true}
}
