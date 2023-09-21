import React from 'react'
import {render} from '@testing-library/react'
import ControlBar from './ControlBar'

describe('Button', () => {
  test('renders a Button component', () => {
    render(<ControlBar activeID="A" onClick={() => {}} options={[{value: 'A', label: 'Label A'}]} />)
  })
})
