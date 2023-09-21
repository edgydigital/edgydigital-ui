import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'
import ControlItem from '../components/ControlItem/ControlItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Control/ControlItem',
  component: ControlItem,
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
export const SegmentedDefault: Story = {
  args: {
    label: 'Option A',
    variant: 'segmented'
  }
}
export const SegmentedActive: Story = {
  args: {
    label: 'Option A',
    variant: 'segmented',
    active: true
  }
}
export const SegmentedDisabled: Story = {
  args: {
    label: 'Option A',
    variant: 'segmented',
    disabled: true
  }
}
export const TabDefault: Story = {
  args: {
    label: 'Option A',
    variant: 'tab'
  }
}
export const TabActive: Story = {
  args: {
    label: 'Option A',
    variant: 'tab',
    active: true
  }
}
export const TabDisabled: Story = {
  args: {
    label: 'Option A',
    variant: 'tab',
    disabled: true
  }
}
