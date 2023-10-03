import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import RadioButton from '../components/RadioButton/RadioButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Form/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'name', 'value', 'onChange']
    }
  }
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    name: 'radio',
    label: 'Option 1'
  }
}
export const Medium: Story = {
  args: {
    name: 'radio',
    label: 'Option 1',
    size: 'md'
  }
}
export const Playground = () => {
  const [radioValue, setRadioValue] = useState<string | undefined>('1')
  return (
    <div className="flex flex-col items-center">
      <form className="mb-4 flex flex-col gap-1">
        <RadioButton
          onChange={(e) => {
            setRadioValue(e.target.value)
          }}
          checked={radioValue === '1'}
          value="1"
          label="Option 1"
          name="radio"
        />
        <RadioButton
          onChange={(e) => {
            setRadioValue(e.target.value)
          }}
          value="2"
          label="Option 2"
          name="radio"
        />
        <RadioButton disabled value="3" label="Option 3" name="radio" />
      </form>
      <h3>
        Selected Value: <span className="text-primaryAccent">{radioValue}</span>
      </h3>
    </div>
  )
}
