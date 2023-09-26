import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import ProgressCircle from '../components/ProgressCircle'
import {HelpCircle} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/Atoms/ProgressCircle/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: 'medium',
    progress: 84.2,
    percentageFormat: 'int',
    showPercentage: true
  }
}

export const Icon: Story = {
  args: {
    size: 'medium',
    progress: 84.2,
    Icon: <HelpCircle />
  }
}

export const Percentage: Story = {
  args: {
    size: 'medium',
    progress: 84.2,
    percentageFormat: 'int',
    showPercentage: true
  }
}
