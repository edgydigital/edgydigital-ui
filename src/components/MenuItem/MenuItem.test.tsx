import React from 'react'
import {render} from '@testing-library/react'
import MenuItem from './MenuItem'

describe('MenuItem', () => {
  test('renders a MenuItem component', () => {
    render(<MenuItem label="menuItem" />)
  })
})
