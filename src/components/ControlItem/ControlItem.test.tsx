import React from 'react'
import {render} from '@testing-library/react'
import ControlItem from './ControlItem'

describe('ControlItem', () => {
  test('renders a ControlItem component', () => {
    render(
      <ControlItem
        label="Neco"
        onClick={() => {
          console.log('Clicked')
        }}
      />
    )
  })
})
