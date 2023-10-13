import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Stepper from '../components/Stepper'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'onPlus', 'onMinus', 'PlusIcon', 'MinusIcon', 'countClassName']
    }
  },
  args: {
    count: 0
  }
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  const [count, setCount] = useState(0)
  return (
    <Stepper
      {...args}
      count={count}
      onPlus={() => setCount((current) => current + 1)}
      onMinus={() => setCount((current) => current - 1)}
    />
  )
}
