import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Toast from '../components/Toast'
import {Globe} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'Icon', 'buttons', 'onClose']
    },
    backgrounds: {
      default: 'gray',
      values: [{name: 'gray', value: '#323a42'}]
    }
  },
  argTypes: {
    variant: {
      control: {
        type: 'select'
      }
    }
  }
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    heading: 'Heading',
    description: 'Description',
    Icon: <Globe />,
    buttons: [
      <button className="text-[12px] underline" key="1" onClick={() => alert('I am button')}>
        Click me
      </button>,
      <button className="text-[12px] underline" key="2" onClick={() => alert('I am button')}>
        Click me 2
      </button>
    ]
  }
}
