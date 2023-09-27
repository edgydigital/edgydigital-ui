import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import Accordion from '../components/Accordion/Accordion'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Accordion/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'isOpen', 'onToggle']
    }
  }
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story) => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen((current) => !current)
  }

  return (
    <div className={`w-full p-4`}>
      <Accordion
        data={{title: 'Accordion title', content: 'Accordion Content'}}
        isOpen={isOpen}
        onToggle={toggle}
        {...args}
      />
    </div>
  )
}
