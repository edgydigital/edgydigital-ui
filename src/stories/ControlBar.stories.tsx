import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'
import ControlBar from '../components/ControlBar/ControlBar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Control/ControlBar',
  component: ControlBar,
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

export const PlaygroundSegmentedTwo = (args: Story) => {
  const [activeID, setActiveID] = useState('A')
  return (
    <div>
      <ControlBar
        activeID={activeID}
        onClick={(activeID) => {
          setActiveID(activeID)
        }}
        className="overflow-hidden rounded-small"
        variant="segmented"
        options={[
          {label: 'Option A', value: 'A'},
          {label: 'Option B', value: 'B'}
        ]}
      />
    </div>
  )
}
export const PlaygroundSegmentedThree = (args: Story) => {
  const [activeID, setActiveID] = useState('A')
  return (
    <div className="flex flex-col items-center">
      <ControlBar
        activeID={activeID}
        onClick={(activeID) => {
          setActiveID(activeID)
        }}
        className="overflow-hidden rounded-small"
        variant="segmented"
        options={[
          {label: 'Option A', value: 'A'},
          {label: 'Option B', value: 'B'},
          {label: 'Option C', value: 'C'}
        ]}
      />
      <p className="h3 mt-3">{`Selected option is: ${activeID}`}</p>
    </div>
  )
}

export const PlaygroundTabTwo = (args: Story) => {
  const [activeID, setActiveID] = useState('A')
  return (
    <div className="flex flex-col items-center">
      <ControlBar
        activeID={activeID}
        onClick={(activeID) => {
          setActiveID(activeID)
        }}
        variant="tab"
        options={[
          {label: 'Option A', value: 'A'},
          {label: 'Option B', value: 'B'}
        ]}
      />
      <p className="h3 mt-3">{`Selected option is: ${activeID}`}</p>
    </div>
  )
}
export const PlaygroundTabThree = (args: Story) => {
  const [activeID, setActiveID] = useState('A')
  return (
    <div className="flex flex-col items-center">
      <ControlBar
        activeID={activeID}
        onClick={(activeID) => {
          setActiveID(activeID)
        }}
        variant="tab"
        options={[
          {label: 'Option A', value: 'A'},
          {label: 'Option B', value: 'B'},
          {label: 'Option C', value: 'C'}
        ]}
      />
      <p className="h3 mt-3">{`Selected option is: ${activeID}`}</p>
    </div>
  )
}
export const PlaygroundSegmentedThreeDisabled = (args: Story) => {
  const [activeID, setActiveID] = useState('A')
  return (
    <div className="flex flex-col items-center">
      <ControlBar
        activeID={activeID}
        onClick={(activeID) => {
          setActiveID(activeID)
        }}
        variant="tab"
        options={[
          {label: 'Option A', value: 'A'},
          {label: 'Option B', value: 'B', disabled: true},
          {label: 'Option C', value: 'C'}
        ]}
      />
      <p className="h3 mt-3">{`Selected option is: ${activeID}`}</p>
    </div>
  )
}
