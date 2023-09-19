import type {Meta, StoryObj} from '@storybook/react'
import Tag from '../components/Tag/Tag'

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
    label: 'Tag'
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
    className: 'bg-primaryAccent text-white '
  }
}
