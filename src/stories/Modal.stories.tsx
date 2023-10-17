import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {ModalContainer} from '../components'
import {ModalBody} from '../components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Modal',
  component: ModalContainer,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'data']
    }
  }
} satisfies Meta<typeof ModalContainer>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="inset-0">
      <button className="m-auto" onClick={() => setIsOpen(true)}>
        OPEN MODAL
      </button>
      <ModalContainer {...args} isOpen={args?.isOpen || isOpen}>
        <ModalBody className="bg-white" onClose={() => setIsOpen(false)}>
          <div className="flex h-[120px] w-[200px] flex-col items-center justify-center">
            <h2>Modal</h2>
            <p className="mt-4">Modal pretty description</p>
          </div>
        </ModalBody>
      </ModalContainer>
    </div>
  )
}
