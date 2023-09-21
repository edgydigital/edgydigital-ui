'use client'
import React, {ReactNode} from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'
import {ArrowLeft, ArrowRight} from 'react-feather'

const buttonVariants = cva(
  'uppercase button w-fit gap-1 rounded-medium font-bold flex items-center px-5 rounded-medium',
  {
    variants: {
      intent: {
        primary: 'bg-black text-white active:bg-gray28',
        secondary: 'bg-white border-1 border-black'
      },
      size: {
        medium: ['h-[54px]']
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium'
    }
  }
)

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
            <div
              className="inline-block h-[30px] w-[30px] animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            />
          )}
        </>
      ) : (
        <>
          {iconPosition === 'left' && <>{Icon || <ArrowLeft />}</>}
          {children}
          {iconPosition === 'right' && <>{Icon || <ArrowRight />}</>}
        </>
      )}
    </button>
  )
}
