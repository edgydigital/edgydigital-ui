import React, {ReactNode} from 'react'
import {ArrowRight, Maximize} from 'react-feather'

interface Props {
  label?: string
  Icon?: ReactNode
  className?: string
  textClassName?: string
  ArrowIcon?: ReactNode
  onClick?: () => void
}

export default function MenuItem({label, Icon, className, textClassName, ArrowIcon, onClick}: Props) {
  return (
    <div
      className={`flex h-[50px] cursor-pointer items-center gap-1 rounded-small bg-white px-2 shadow-default3 ${className}`}
    >
      <div>{Icon || <Maximize />}</div>
      <p className={`subtitle flex-1 text-left ${textClassName}`}>{label}</p>
      <div>{ArrowIcon || <ArrowRight />}</div>
    </div>
  )
}
