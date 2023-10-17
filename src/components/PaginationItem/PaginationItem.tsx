import {VariantProps, cva} from 'class-variance-authority'
import React from 'react'
import {twMerge} from 'tailwind-merge'

const PaginationItemVariants = cva('flex cursor-pointer items-center justify-center', {
  variants: {
    intent: {
      square:
        'w-[32px] rounded-semiSmall h-[32px] border-1 text-gray50 border-gray50 hover:text-black hover:border-black transition-all duration-[300ms]',
      circle:
        'w-[32px]  h-[32px] border-1 rounded-full text-gray50 border-gray50 hover:text-black hover:border-black transition-all duration-[300ms]',
      dot: 'w-[10px] rounded-full h-[10px] bg-white hover:bg-gray50 transition-all duration-[300ms]'
    }
  },
  defaultVariants: {
    intent: 'square'
  }
})

type PaginationItemVariant = VariantProps<typeof PaginationItemVariants>

const buttonStyle = (variant: PaginationItemVariant['intent'], className: string | undefined) =>
  twMerge(PaginationItemVariants({intent: variant, className}))

interface Props {
  className?: string
  onClick?: () => void
  index?: number | string
  isActive?: boolean
  variant?: PaginationItemVariant['intent']
  textClassName?: string
}

export default function PaginationItem({
  className,
  textClassName,
  onClick,
  index,
  isActive,
  variant = 'square'
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`${buttonStyle(variant, className)} ${isActive && 'border-0 !bg-black text-white'}`}
    >
      {variant === 'circle' || variant === 'square' ? (
        <>
          <p className={`${textClassName}`}>{index || 0}</p>
        </>
      ) : null}
    </div>
  )
}
