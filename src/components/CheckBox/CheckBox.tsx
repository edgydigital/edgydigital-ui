import React, {ReactNode} from 'react'
import {Check} from 'react-feather'

interface Props {
  checked?: boolean
  hasIcon?: boolean
  className?: string
  Icon?: ReactNode
  onClick?: () => void
}

export default function CheckBox({checked, hasIcon, className, Icon, onClick}: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-small text-white ${
        checked ? 'bg-black' : 'border-1 border-gray50'
      } ${className}`}
    >
      {hasIcon && checked && <>{Icon || <Check width="16" height="16" />}</>}
    </div>
  )
}
