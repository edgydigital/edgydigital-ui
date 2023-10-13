import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import TextArea from '../components/TextArea/TextArea'
import {Globe} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  args: {
    placeholder: 'TextArea',
    label: 'Label'
  }
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  return (
    <div className="w-[300px]">
      <TextArea {...args} />
    </div>
  )
}

export const Icon = (args: Story['args']) => {
  return (
    <div className="w-[300px]">
      <TextArea {...args} Icon={<Globe />} />
    </div>
  )
}
