import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Tag from '../components/Tag/Tag'
import {MapPin, X} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Typography'
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Playground = (args: Story) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p className="subtitle">Subtitle</p>
      <p className="semiSubtitle">Semi-Subitle</p>
      <p>ParagraphRegular</p>
      <p className="paragraphSmall">ParagraphSmall</p>
      <p className="button">Button</p>
      <p className="label">Label</p>
      <p className="navigation">Navigation</p>
      <p className="link">Link</p>
    </div>
  )
}
