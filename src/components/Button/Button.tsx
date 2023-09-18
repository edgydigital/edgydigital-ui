'use client'
import React, {ReactNode} from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'
import ArrowLeftSVG from '../../assets/icons/arrowleft'
import SpingSVG from '../../assets/icons/spin'
import ArrowRightSVG from '../../assets/icons/ArrowRight'

const buttonVariants = cva('uppercase gap-1 rounded-medium font-bold flex items-center px-4 rounded-medium', {
  variants: {
    intent: {
      primary: 'bg-black text-white',
      secondary: 'bg-white border-1 border-black'
    },
    size: {
      medium: ['h-[50px]']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})

type ButtonVariant = VariantProps<typeof buttonVariants>

const buttonStyle = (variant: ButtonVariant['intent'], className: string | undefined) =>
  twMerge(buttonVariants({intent: variant, className}))

interface Props {
  children: ReactNode
  LoadingIcon?: ReactNode
  Icon?: ReactNode
  iconPosition?: 'left' | 'right' | null
  className?: string
  isLoading?: boolean
  isDisabled?: boolean
  variant?: ButtonVariant['intent']
  onClick?: () => void
}

export default function Button({
  children,
  isLoading,
  LoadingIcon,
  Icon,
  iconPosition,
  isDisabled,
  variant,
  className,
  onClick
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle(variant, className)} ${
        isDisabled ? '!transform-none  opacity-30 !transition-none' : ''
      } ${isLoading || isDisabled ? 'cursor-not-allowed  hover:transform-none' : ''}`}
    >
      {isLoading ? (
        <>
          {LoadingIcon || (
            <div className="animate-spin">
              <SpingSVG />
            </div>
          )}
        </>
      ) : (
        <>
          {iconPosition === 'left' && <>{Icon || <ArrowLeftSVG />}</>}
          {children}
          {iconPosition === 'right' && <>{Icon || <ArrowRightSVG />}</>}
        </>
      )}
    </button>
  )
}
