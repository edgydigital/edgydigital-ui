import React, {ReactNode, useRef, useState} from 'react'
import {Minus, Plus} from 'react-feather'

interface Props {
  className?: string
  data: {
    title: string | ReactNode
    content: string | ReactNode
  }
  isOpen?: boolean
  onToggle?: () => void
}

export default function Accordion({className, data, isOpen: keepOpen, onToggle}: Props) {
  const [isOpen, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    if (isOpen === undefined) {
      return setOpen((current) => !current)
    }
    if (onToggle) {
      onToggle()
    }
  }

  const openState = isOpen || keepOpen

  return (
    <div
      className={`transition-bg rounded-small ${
        openState ? 'bg-white shadow-default4' : 'bg-transparent'
      } p-2 laptop:p-3 ${className || ''}`}
    >
      <div className="flex cursor-pointer items-center justify-between" onClick={toggle}>
        {typeof data?.title === 'object' ? data.title : <p className="subtitle pr-2 laptop:pr-3">{data?.title}</p>}
        <div className="flex-shrink-0 ">{openState ? <Minus /> : <Plus />}</div>
      </div>
      <div
        className="transition-max-height overflow-hidden"
        style={{
          maxHeight: openState ? contentRef?.current?.offsetHeight || 300 : 0
        }}
      >
        <div className="pt-1" ref={contentRef}>
          {typeof data?.content === 'object' ? data?.content : <p className="">{data?.content}</p>}
        </div>
      </div>
    </div>
  )
}
