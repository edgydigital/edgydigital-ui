import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'LoadingIcon', 'Icon', 'onClick']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    children: 'Primary'
  }
}
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true
  }
}
export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true
  }
}

export const Playground = (args: Story) => {
  const [clicked, setClicked] = useState(false)

  const clickHandler = () => {
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 1000)
  }
  return (
    <div className="flex flex-col items-center">
      <Button className="mb-2" onClick={clickHandler} {...args}>
        Test
      </Button>
      {clicked && <p>Button was clicked</p>}
    </div>
  )
}
