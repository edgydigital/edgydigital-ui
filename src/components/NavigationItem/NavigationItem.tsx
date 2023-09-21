import React, {ReactNode} from 'react'
import {ChevronDown, Maximize} from 'react-feather'

interface Props {
  className?: string
  text?: string
  IconPosition?: 'left' | 'right'
  Icon?: ReactNode
  DropDownIcon?: ReactNode
  hasIcon?: boolean
  hasDropDownIcon?: boolean
}

export default function NavigationItem({
  className,
  Icon,
  DropDownIcon,
  text,
  hasIcon,
  IconPosition,
  hasDropDownIcon
}: Props) {
  return (
    <div className={`flex cursor-pointer items-center gap-2 ${className}`}>
      {hasIcon && IconPosition === 'left' && <>{Icon || <Maximize />}</>}
      <p className="navigation">{text}</p>
      {hasIcon && IconPosition === 'right' && <>{Icon || <Maximize />}</>}
      {hasDropDownIcon && <>{Icon || <ChevronDown />}</>}
    </div>
  )
}
