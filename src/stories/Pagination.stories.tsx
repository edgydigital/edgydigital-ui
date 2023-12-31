import React, {useState} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Pagination from '../components/Pagination/Pagination'
import {ChevronLeft, ChevronRight} from 'react-feather'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Pagination/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'textClassName']
    }
  }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PlaygroundCircle = () => {
  const [page, setPage] = useState(4)
  const increasePage = () => {
    if (page === 7) return
    else {
      setPage(page + 1)
    }
  }
  const decreasePage = () => {
    setPage(page - 1)
  }
  const onPageClick = (index: number) => {
    setPage(index)
  }
  const renderPreviosPagesFunction = (page: number) => {
    if (page > 1 && page < 3) {
      return page - 1
    } else if (page >= 3) {
      return page - 2
    } else {
      return page
    }
  }
  return (
    <div>
      <h1 className="mb-4 text-center">Page {page}</h1>
      <Pagination
        leftIcon={<ChevronLeft />}
        rightIcon={<ChevronRight />}
        variant="circle"
        increasePageFunction={increasePage}
        decreasePageFunction={decreasePage}
        onPageClick={onPageClick}
        numberOfPages={4}
        maxPage={7}
        currentPage={page}
        startsFrom={renderPreviosPagesFunction(page)}
        leftText="Previous"
        rightText="Next"
      />
    </div>
  )
}
export const PlaygroundSquare = () => {
  const [page, setPage] = useState(4)
  const increasePage = () => {
    if (page === 7) return
    else {
      setPage(page + 1)
    }
  }
  const decreasePage = () => {
    setPage(page - 1)
  }
  const onPageClick = (index: number) => {
    setPage(index)
  }
  const renderPreviosPagesFunction = (page: number) => {
    if (page > 1 && page < 3) {
      return page - 1
    } else if (page >= 3) {
      return page - 2
    } else {
      return page
    }
  }
  return (
    <div>
      <h1 className="mb-4 text-center">Page {page}</h1>
      <Pagination
        leftIcon={<ChevronLeft />}
        rightIcon={<ChevronRight />}
        variant="square"
        increasePageFunction={increasePage}
        decreasePageFunction={decreasePage}
        onPageClick={onPageClick}
        numberOfPages={4}
        maxPage={7}
        currentPage={page}
        startsFrom={renderPreviosPagesFunction(page)}
        leftText="Previous"
        rightText="Next"
      />
    </div>
  )
}
