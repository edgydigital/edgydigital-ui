import React, {ReactNode} from 'react'
import {ArrowLeft, ArrowRight} from 'react-feather'

interface Props {
  label?: string
  iconPosition?: 'left' | 'right'
  Icon?: ReactNode
  className?: string
}

export default function Link({label, className, iconPosition, Icon}: Props) {
  return (
    <div className={`flex w-fit cursor-pointer items-center gap-1 ${className}`}>
      {iconPosition === 'left' && <>{Icon || <ArrowLeft />}</>}
      <p className="link">{label}</p>
      {iconPosition === 'right' && <>{Icon || <ArrowRight />}</>}
    </div>
  )
}
