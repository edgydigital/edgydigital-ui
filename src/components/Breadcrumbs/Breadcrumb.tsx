import React, {PropsWithChildren, ReactNode} from 'react'
import {Globe} from 'react-feather'

export interface Props extends PropsWithChildren {
  className?: string
  textClassName?: string
  Icon?: ReactNode
}

export default function Breadcrumb({className = '', Icon, textClassName = '', children}: Props) {
  return (
    <div className={`flex w-fit items-center gap-2 ${className}`}>
      {Icon ?? <Globe />}
      {typeof children === 'string' || typeof children === 'number' ? (
        <p className={`semiSubtitle ${textClassName}`}>{children}</p>
      ) : (
        children
      )}
    </div>
  )
}
