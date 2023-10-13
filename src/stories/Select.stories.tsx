import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import Select from '../components/Select/Select'
import {Globe} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'options']
    }
  },
  argTypes: {
    variant: {
      options: ['valid', 'error', null],
      control: {
        type: 'radio'
      }
    }
  },
  args: {
    placeholder: 'Select',
    options: ['Option 1', 'Option 2']
  }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined)
  return (
    <div className="w-[300px]">
      <Select
        {...args}
        ValueIcon={selectedOption ? null : <Globe />}
        onChange={(option) => {
          setSelectedOption(option ?? undefined)
        }}
        options={args?.options}
        value={selectedOption}
      />
    </div>
  )
}
