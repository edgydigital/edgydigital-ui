import React, {PropsWithChildren, ReactNode, useEffect, useRef} from 'react'
import {XCircle} from 'react-feather'

interface Props extends PropsWithChildren {
  className?: string
  onClose?: () => void
  CloseButton?: ReactNode
  Icon?: ReactNode
  data?: {
    heading?: string
    description?: string
    buttons?: ReactNode[]
  }
}

export default function ModalBody({children, className = '', onClose, CloseButton, data, Icon}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleClickOutside(event: MouseEvent) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node) && onClose) {
      onClose()
    }
  }

  useEffect(() => {
    if (onClose && wrapperRef.current) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [wrapperRef, onClose])

  return (
    <div
      className={`relative flex h-fit w-fit min-w-[120px] max-w-[80%] flex-col items-center rounded-medium p-4 shadow-default4 ${className}`}
      ref={wrapperRef}
    >
      {Icon ?? null}
      {data ? (
        <>
          {data.heading ? <h4>{data.heading}</h4> : null}
          {data.description ? (
            <p className={`semiSubtitle ${data.description ? 'mt-2' : ''}`}>{data.description}</p>
          ) : null}
          {data.buttons && Array.isArray(data.buttons) && data.buttons.length > 0 ? (
            <div className={`gap-2 tablet:flex ${data.heading || data.description ? 'mt-4' : ''}`}>
              {data.buttons.map((Button) => Button)}
            </div>
          ) : null}
        </>
      ) : (
        children
      )}
      <div className="absolute right-4 top-4 cursor-pointer" onClick={onClose}>
        {CloseButton ?? <XCircle className="stroke-gray50" />}
      </div>
    </div>
  )
}
