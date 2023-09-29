import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import ProgressBar from '../components/ProgressBar/ProgressBar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  },
  args: {
    progress: 40,
    leftLabel: true
  }
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (props: Story) => {
  return (
    <div className="h-[200px] w-[400px] bg-[#f3f3f3] p-8">
      <ProgressBar progress={props.args?.progress ?? 20} {...props} />
    </div>
  )
}
