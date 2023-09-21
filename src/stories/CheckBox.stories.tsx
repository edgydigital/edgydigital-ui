import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'
import CheckBox from '../components/CheckBox/CheckBox'
import {X} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Form/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'Icon', 'onClick']
    }
  }
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    checked: false
  }
}

export const Checked: Story = {
  args: {
    checked: true
  }
}

export const CheckedWithIcon: Story = {
  args: {
    checked: true,
    hasIcon: true
  }
}

export const Playground = (args: Story) => {
  const [checked, setChecked] = useState(false)
  const checkHandler = () => {
    setChecked(!checked)
  }
  return (
    <div className="flex gap-2">
      <CheckBox Icon={<X width={14} height={14} />} hasIcon checked={checked} onClick={checkHandler} />
      <p>{checked ? 'Checked' : 'Unchecked'}</p>
    </div>
  )
}
