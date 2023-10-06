import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import Badge from '../components/Badge/Badge'
import {Heart} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  args: {
    text: 'Text'
  }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  return (
    <div className="flex h-[200px] w-[200px] items-center justify-center bg-darkPrimaryText">
      <Badge {...args} text={args?.text ?? 'Text'} />
    </div>
  )
}

export const Icon = (args: Story['args']) => {
  return (
    <div className="flex h-[200px] w-[200px] items-center justify-center bg-darkPrimaryText">
      <Badge {...args} Icon={<Heart fill="black" size={8} />} text={args?.text ?? 'Text'} />
    </div>
  )
}
