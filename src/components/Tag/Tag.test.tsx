import React from 'react'
import {render} from '@testing-library/react'
import Tag from './Tag'
import {Check} from 'react-feather'

describe('Tag', () => {
  test('renders a Tag component with basic setup', () => {
    render(<Tag />)
  })
})

describe('Tag', () => {
  test('renders a Tag component with left icon and outline', () => {
    render(<Tag variant="outline" hasLeftIcon />)
  })
})

describe('Tag', () => {
  test('renders a Tag component with left icon and outline', () => {
    render(<Tag variant="outline" hasLeftIcon />)
  })
})
describe('Tag', () => {
  test('renders a Tag component with right icon and custom className', () => {
    render(<Tag variant="outline" hasRightIcon RightIcon={<Check />} className="bg-primaryAccent" />)
  })
})
