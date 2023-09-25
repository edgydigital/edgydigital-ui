import React, {ReactNode} from 'react'
import {Check} from 'react-feather'

interface Props {
  checked?: boolean
  hasIcon?: boolean
  className?: string
  Icon?: ReactNode
  disabled?: boolean
  tabIndex?: number
  onClick?: () => void
}

export default function CheckBox({checked, disabled, tabIndex, hasIcon, className, Icon, onClick}: Props) {
  return (
    <div
      tabIndex={tabIndex || 1}
      onClick={onClick}
      className={` flex h-[16px] w-[16px] cursor-pointer items-center justify-center rounded-semiSmall border-1 text-black outline-8 outline-[#E9E9E9] hover:border-black ${
        checked ? 'border-black' : 'border-gray85'
      } ${disabled && '!cursor-not-allowed border-none bg-gray90'} ${className}`}
    >
      {hasIcon && checked && <>{Icon || <Check width="10" height="10" strokeWidth={'2px'} />}</>}
    </div>
  )
}
