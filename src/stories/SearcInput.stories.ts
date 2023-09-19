import type {Meta, StoryObj} from '@storybook/react'

import SearchInput from '../components/SearchInput/SearchInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'LoadingIcon', 'Icon', 'RemoveIcon', 'inputClassName', 'onChange']
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
