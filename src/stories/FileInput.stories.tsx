import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import FileInput from '../components/FileInput/FileInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className']
    }
  }
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = (args: Story['args']) => {
  return (
    <form>
      <FileInput
        {...args}
        onChange={(e) => {
          alert(e.target.files ? `Names of files: ${Array.from(e.target.files)?.map((file) => file.name)}` : null)
        }}
      />
    </form>
  )
}
