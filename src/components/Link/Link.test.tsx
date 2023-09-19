import React from 'react'
import {render} from '@testing-library/react'
import Link from './Link'

describe('Button', () => {
  test('renders a Link component', () => {
    render(<Link label="View all" />)
  })
})
