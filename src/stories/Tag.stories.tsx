import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Tag from '../components/Tag/Tag'
import {MapPin, X} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'LeftIcon', 'RightIcon', 'onCloseClick']
    }
  }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Tag',
    variant: 'primary'
  }
}
export const Outline: Story = {
  args: {
    label: 'Tag',
    variant: 'outline'
  }
}
export const Background: Story = {
  args: {
    label: 'Tag',
    variant: 'primary',
    className: 'bg-primaryAccent text-white '
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
      <Tag
        label="Test tag"
        hasLeftIcon
        LeftIcon={<MapPin color="#B3E1FF" />}
        RightIcon={<X />}
        hasRightIcon
        variant="primary"
        className="mb-2 bg-gray28 text-white"
        onCloseClick={clickHandler}
        {...args}
      />
      {clicked && <p>Button was clicked</p>}
    </div>
  )
}
