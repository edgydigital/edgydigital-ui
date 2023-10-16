import React, {PropsWithChildren} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Breadcrumbs from '../components/Breadcrumbs'
import {ChevronRight, Globe} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'textClassName', 'data', 'separator', 'LinkComponent']
    }
  }
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    data: [...Array(4)].map((_, index) => ({
      Icon: <Globe className="stroke-gray50" />,
      children: `Breadcrumb ${index + 1}`,
      textClassName: 'text-gray50',
      link: {
        href: '/?path=/story/components-atoms-button--primary'
      }
    })),
    separator: <ChevronRight className="stroke-gray50" />,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    LinkComponent: ({children}: PropsWithChildren) => <a href="/">{children}</a>
  }
}

export const OutlineSlash: Story = {
  args: {
    data: [...Array(4)].map((_, index) => ({
      Icon: <Globe className="stroke-gray50" />,
      children: `Breadcrumb ${index + 1}`,
      textClassName: 'text-gray50',
      link: {
        href: '/'
      }
    })),
    separator: <p className="text-gray50">/</p>,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    LinkComponent: ({children}: PropsWithChildren) => (
      <a href="/?path=/story/components-atoms-button--primary">{children}</a>
    ),
    className: 'border-1 border-gray50'
  }
}
