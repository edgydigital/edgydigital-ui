import React, {TextareaHTMLAttributes, useMemo} from 'react'
import {ReactNode} from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'
import {Check, XCircle} from 'react-feather'

const textAreaVariants = cva(
  `flex min-h-[75px] w-full py-[14px] relative flex-row paragraphRegular outline-none items-center justify-between rounded-small bg-white px-2`,
  {
    variants: {
      intent: {
        error: 'border-error',
        valid: 'border-success'
      }
    }
  }
)

export type InputVariants = VariantProps<typeof textAreaVariants>

export interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  boxClassName?: string
  className?: string
  variant?: InputVariants['intent']
  errorText?: string
  Icon?: ReactNode
  label?: string
  iconPosition?: 'left' | 'right'
}

const textAreaStyle = (variant: InputVariants, className: string | undefined) =>
  twMerge(textAreaVariants(variant), className)

export default function TextArea({
  value,
  boxClassName,
  variant,
  placeholder,
  className,
  errorText,
  Icon,
  label,
  iconPosition,
  ...otherProps
}: TextInputProps) {
  const renderIcon = useMemo(() => {
    switch (variant) {
      case 'error':
        return <XCircle size={24} className="stroke-error" />
      case 'valid':
        return <Check size={24} className="stroke-success" />
      default:
        if (Icon) {
          return Icon
        }
        return null
    }
  }, [variant, Icon])
  return (
    <div className={boxClassName}>
      {label ? <p className="formLabel mb-1">{label}</p> : null}
      <div className="relative flex overflow-hidden rounded-small border-1 border-gray50">
        <textarea
          placeholder={placeholder}
          value={value}
          className={`${textAreaStyle({intent: variant}, className)} ${
            renderIcon ? (iconPosition === 'right' ? 'pr-[48px]' : 'pl-[48px]') : ''
          }`}
          {...otherProps}
        />
        {renderIcon ? (
          <div className={`absolute top-[14px] ${iconPosition === 'right' ? 'right-2' : 'left-2'}`}>{renderIcon}</div>
        ) : null}
      </div>
      {variant === 'error' && errorText ? <p className="paragraphSmall mt-x text-error">{errorText}</p> : null}
    </div>
  )
}
