import React, {ReactNode} from 'react'
import PaginationItem from '../PaginationItem'
import {ArrowLeft, ArrowRight} from 'react-feather'

interface Props {
  numberOfPages: number
  currentPage: number
  startsFrom?: number
  maxPage: number
  leftText?: string
  rightText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'circle' | 'square'
  onPageClick: (index: number) => void
  increasePageFunction: () => void
  decreasePageFunction: () => void
  classNames?: {
    container?: string
    leftText?: string
    rightText?: string
    leftIcon?: string
    rightIcon?: string
    paginationBox?: string
    paginationItem?: string
    item?: string
    paginationText?: string
  }
}

export default function Pagination({
  numberOfPages,
  currentPage,
  maxPage,
  variant,
  onPageClick,
  increasePageFunction,
  decreasePageFunction,
  classNames,
  startsFrom = 1,
  leftText,
  rightText,
  leftIcon,
  rightIcon
}: Props) {
  function createArrayWithLength(length: number) {
    if (typeof length !== 'number' || length < 0) {
      return []
    }
    return Array.from({length}, (_, index) => {
      if (index + startsFrom <= maxPage) return index + startsFrom
      else {
        return null
      }
    })
  }

  return (
    <div className={`flex items-center gap-2 ${classNames?.container}`}>
      {currentPage === 1 ? null : (
        <>
          <div onClick={decreasePageFunction} className="flex cursor-pointer gap-2">
            <p className={`${classNames?.leftText}`}>{leftText}</p>
            {leftIcon || <ArrowLeft />}
          </div>
        </>
      )}
      <div className={`flex gap-1 ${classNames?.paginationBox}`}>
        {createArrayWithLength(numberOfPages)[0] === 1 ? null : (
          <>
            <PaginationItem
              variant={variant}
              onClick={() => {
                onPageClick(1)
              }}
              index={1}
            />
            {currentPage === 4 ? null : (
              <PaginationItem
                variant={variant}
                className="cursor-default hover:border-gray50  hover:text-gray50"
                index="..."
              />
            )}
          </>
        )}
        {createArrayWithLength(numberOfPages).map((object, index) => {
          return (
            <>
              {' '}
              {object && (
                <PaginationItem
                  onClick={() => {
                    onPageClick(object)
                  }}
                  variant={variant}
                  isActive={object === currentPage}
                  textClassName={classNames?.paginationText}
                  className={classNames?.paginationItem}
                  index={object}
                />
              )}
            </>
          )
        })}
        {maxPage && maxPage > numberOfPages + startsFrom - 1 ? (
          <>
            {currentPage === maxPage - 2 ? null : (
              <PaginationItem
                variant={variant}
                className="cursor-default hover:border-gray50  hover:text-gray50"
                index="..."
              />
            )}
            <PaginationItem
              onClick={() => {
                onPageClick(maxPage)
              }}
              index={maxPage}
              variant={variant}
            />
          </>
        ) : null}
      </div>
      {maxPage === currentPage ? null : (
        <div onClick={increasePageFunction} className="flex cursor-pointer gap-2">
          {rightIcon || <ArrowRight />}
          <p className={`${classNames?.rightText}`}>{rightText}</p>
        </div>
      )}
    </div>
  )
}
