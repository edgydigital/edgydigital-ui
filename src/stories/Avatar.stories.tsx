import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Avatar from '../components/Avatar/Avatar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'textClassName']
    }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Circle: Story = {
  args: {
    variant: 'circle',
    initials: 'AB'
  }
}
