import {VariantProps, cva} from 'class-variance-authority'
import React, {ReactNode} from 'react'
import {Square, XCircle} from 'react-feather'
import {twMerge} from 'tailwind-merge'

const tagVariants = cva('px-2 py-1 h-[40px] w-fit rounded-full flex items-center', {
  variants: {
    intent: {
      primary: '',
      outline: 'border-1 border-gray50 text-gray50'
    }
  }
})

type TagVariant = VariantProps<typeof tagVariants>

const tagStyle = (variant: TagVariant['intent'], className: string | undefined) =>
  twMerge(tagVariants({intent: variant, className}))

interface Props {
  className?: string
  label?: string
  LeftIcon?: ReactNode
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
  RightIcon?: ReactNode
  variant?: TagVariant['intent']
  onCloseClick?: () => void
}

export default function Tag({
  className,
  label,
  variant,
  hasLeftIcon,
  hasRightIcon,
  LeftIcon,
  RightIcon,
  onCloseClick
}: Props) {
  return (
    <div className={`${tagStyle(variant, className)} ${hasRightIcon && 'pr-0'}`}>
      {hasLeftIcon && <div className="mr-1">{LeftIcon || <Square />}</div>}
      <p className="semiSubtitle">{label}</p>
      {hasRightIcon && (
        <div onClick={onCloseClick} className="mx-1 cursor-pointer">
          {RightIcon || <XCircle />}
        </div>
      )}
    </div>
  )
}
