import React, {cloneElement, ReactElement, ReactNode, useMemo} from 'react'
import {XCircle} from 'react-feather'

interface Props {
  className?: string
  heading?: string | ReactNode
  description?: string | ReactNode
  buttons?: ReactNode[]
  Icon?: ReactNode
  CloseIcon?: ReactNode
  variant?: 'success' | 'error' | 'warning'
  onClose?: () => void
}

export default function Toast({
  className = '',
  heading,
  description,
  buttons,
  Icon,
  CloseIcon,
  variant,
  onClose
}: Props) {
  const closeHandler = () => {
    if (onClose) {
      onClose()
    }
  }

  const color = () => {
    switch (variant) {
      case 'success':
        return '#00BB8E'
      case 'error':
        return '#FF3C5F'
      case 'warning':
        return '#FF8D3A'
      default:
        return 'black'
    }
  }

  const ClonedIcon = useMemo(
    () => (Icon ? cloneElement(Icon as ReactElement, {color: color()}) : null),
    [Icon, variant]
  )

  return (
    <div
      className={`flex w-full max-w-[370px] rounded-medium border-t-2 bg-white p-2 ${className}`}
      style={{borderTop: variant ? `2px solid ${color()}` : undefined}}
    >
      {ClonedIcon ? <div className="mr-2 flex-shrink-0">{ClonedIcon}</div> : null}
      <div>
        <p className="subtitle">{heading}</p>
        <p className="mt-1 text-secondaryText">{description}</p>
        {buttons && buttons.length > 0 ? (
          <div className="mt-2 flex">
            {buttons.map((Button, index) => (
              <div key={index} className={index !== 0 ? 'ml-3' : ''}>
                {Button}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="ml-1">
        <button type="button" onClick={closeHandler}>
          {CloseIcon ?? <XCircle size={24} />}
        </button>
      </div>
    </div>
  )
}
