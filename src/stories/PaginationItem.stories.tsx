import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import PaginationItem from '../components/PaginationItem/PaginationItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Pagination/PaginationItem',
  component: PaginationItem,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'textClassName']
    }
  }
} satisfies Meta<typeof PaginationItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Square: Story = {
  args: {
    variant: 'square'
  }
}
export const Circle: Story = {
  args: {
    variant: 'circle'
  }
}
export const Dot: Story = {
  args: {
    variant: 'dot'
  }
}
