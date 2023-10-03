import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Toggle from '../components/Toggle/Toggle'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Form/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: [
        'className',
        'boxClassName',
        'textClassName',
        'activeColor',
        'inactiveColor',
        'ringClassName',
        'onClick'
      ]
    }
  }
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    active: false
  }
}
export const Active: Story = {
  args: {
    active: true
  }
}
export const Label: Story = {
  args: {
    active: false,
    label: 'Remember me'
  }
}

export const Playground = () => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <Toggle
        active={active}
        onClick={() => {
          setActive(!active)
        }}
        boxClassName="mb-2"
        label="Toggle disabled state"
      />
      <p>{active ? 'Active' : 'Inactive'}</p>
    </div>
  )
}
