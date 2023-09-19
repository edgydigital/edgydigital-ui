import React from 'react'
import {render} from '@testing-library/react'
import SearchInput from './SearchInput'

describe('SeearchInput', () => {
  test('renders a SearchInput component', () => {
    render(<SearchInput placeholder="Search" />)
  })
})
