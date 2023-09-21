import React from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'

const controlVariants = cva(
  ' h-[38px] w-[110px] laptop:h-[52px] laptop:w-[141px] cursor-pointer flex items-center justify-center',
  {
    variants: {intent: {segmented: '', tab: ''}},
    defaultVariants: {intent: 'segmented'}
  }
)

type ControlVariant = VariantProps<typeof controlVariants>

const controlStyle = (variant: ControlVariant['intent'], className: string | undefined) =>
  twMerge(controlVariants({intent: variant, className}))

interface Props {
  className?: string
  textClassName?: string
  label: string
  variant?: ControlVariant['intent']
  active?: boolean
  disabled?: boolean
  onClick: (text: string) => void
}
export default function ControlItem({className, textClassName, label, variant, active, disabled, onClick}: Props) {
  return (
    <div
      onClick={() => {
        if (!disabled) {
          onClick(label)
        }
      }}
      className={`${controlStyle(variant, className)} ${
        active && variant === 'segmented' ? 'bg-white !text-black shadow-default3' : 'text-gray50'
      } ${active && variant === 'tab' ? 'border-b-2 border-black !text-black' : 'text-gray50'} ${
        disabled && '!cursor-not-allowed opacity-[0.3]'
      } `}
    >
      <p className={`semiSubtitle ${textClassName}`}>{label}</p>
    </div>
  )
}
