import type {Meta, StoryObj} from '@storybook/react'

import BulletPoint from '../components/BulletPoint/BulletPoint'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/BulletPoint/BulletPoint',
  component: BulletPoint,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'bulletClassName', 'textClassName']
    }
  }
} satisfies Meta<typeof BulletPoint>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    text: 'Lorem ipsum, dolor sit amet'
  }
}

export const CustomBulletBg: Story = {
  args: {
    text: 'Lorem ipsum, dolor sit amet',
    bulletClassName: '!bg-primaryAccent'
  }
}

export const CustomTextStyle: Story = {
  args: {
    text: 'Lorem ipsum, dolor sit amet',
    textClassName: 'italic'
  }
}
