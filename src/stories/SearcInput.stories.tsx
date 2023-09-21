import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import SearchInput from '../components/SearchInput/SearchInput'
import {X} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'LoadingIcon', 'Icon', 'RemoveIcon', 'inputClassName', 'onDelete', 'onChange']
    }
  }
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    placeholder: 'Search'
  }
}
export const Filled: Story = {
  args: {
    placeholder: 'Search',
    value: 'Value'
  }
}

export const Playground = (args: Story) => {
  const [searchValue, setSearchValue] = useState('')
  const searchValueHandler = (text: string) => {
    setSearchValue(text)
  }
  const deleteHandler = () => {
    setSearchValue('')
  }
  return (
    <div>
      <SearchInput
        placeholder="Placeholder"
        RemoveIcon={<X />}
        value={searchValue}
        onDelete={deleteHandler}
        onChange={(e) => {
          searchValueHandler(e.target.value)
        }}
      />
    </div>
  )
}
