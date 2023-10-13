import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import Input from '../components/Input/Input'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  args: {
    placeholder: 'Input',
    label: 'Label'
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  return (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  )
}
