import type {Meta, StoryObj} from '@storybook/react'

import BulletPointList from '../components/BulletPointList/BulletPointList'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/BulletPoint/BulletPointList',
  component: BulletPointList,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'bulletClassName', 'textClassName']
    }
  }
} satisfies Meta<typeof BulletPointList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    list: [
      'Lorem ipsum dolor sit amet',
      'Quis eu tempor aute labore non adipisicing quis ea.',
      'Officia tempor adipisicing commodo occaecat enim labore',
      'Enim mollit deserunt minim anim officia nulla aliqua.'
    ]
  }
}

export const CustomBulletBg: Story = {
  args: {
    list: ['Quis eu tempor aute labore non adipisicing quis ea.', 'Lorem ipsum dolor sit amet'],
    bulletClassName: '!bg-primaryAccent'
  }
}

export const CustomTextStyle: Story = {
  args: {
    list: [
      'Enim mollit deserunt minim anim officia nulla aliqua.',
      'Officia tempor adipisicing commodo occaecat enim labore',
      'Quis eu tempor aute labore non adipisicing quis ea.'
    ],
    textClassName: 'italic'
  }
}
