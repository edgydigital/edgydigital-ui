import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Button from '../components/Button/Button'
import NavigationItem from '../components/NavigationItem/NavigationItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/NavigationItem',
  component: NavigationItem,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'Icon', 'DropDownIcon']
    }
  }
} satisfies Meta<typeof NavigationItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {text: 'Item'}
}
export const WithIcon: Story = {
  args: {
    IconPosition: 'left',
    hasIcon: true,
    text: 'Item'
  }
}

export const WithIconAndDropdown: Story = {
  args: {
    IconPosition: 'left',
    hasIcon: true,
    text: 'Item',
    hasDropDownIcon: true
  }
}

export const WithDropdown: Story = {
  args: {
    IconPosition: 'left',
    text: 'Item',
    hasDropDownIcon: true
  }
}

export const Playground = (args: Story) => {
  return (
    <div>
      <a href="https://edgy.digital" target="_blank">
        <NavigationItem text="Item" hasIcon IconPosition="left" />
      </a>
    </div>
  )
}
