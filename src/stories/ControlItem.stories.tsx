import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'
import ControlItem from '../components/ControlItem/ControlItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Control/ControlItem',

  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SegmentedDefault = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" variant="segmented" />
    </div>
  )
}
export const SegmentedActive = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" active variant="segmented" />
    </div>
  )
}
export const SegmentedDisabled = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" disabled variant="segmented" />
    </div>
  )
}

export const TabDefault = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" variant="tab" />
    </div>
  )
}
export const TabActive = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" active variant="tab" />
    </div>
  )
}
export const TabDisabled = (args: Story) => {
  return (
    <div>
      <ControlItem label="Option A" disabled variant="tab" />
    </div>
  )
}
