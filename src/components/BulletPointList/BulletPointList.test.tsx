import React from 'react'
import {render} from '@testing-library/react'
import BulletPointList from './BulletPointList'

describe('BulletPointList', () => {
  test('renders a list of bullet points in ul component', () => {
    render(
      <BulletPointList
        list={[
          'Nostrud ipsum dolore minim sint aliqua.',
          'Velit reprehenderit ut Lorem non aliqua do in magna adipisicing aliquip qui laboris.',
          'Velit cillum ad proident fugiat ad.'
        ]}
      />
    )
  })
})
