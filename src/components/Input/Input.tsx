import React, {useMemo} from 'react'
import {InputHTMLAttributes, ReactNode} from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'
import {Check, XCircle} from 'react-feather'

const inputVariants = cva(
  `flex h-[54px] relative flex-row items-center justify-between rounded-small bg-white px-2 border-gray50 border-1`,
  {
    variants: {
      intent: {
        error: 'border-error',
        valid: 'border-success'
      }
    }
  }
)

export type InputVariants = VariantProps<typeof inputVariants>

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  boxClassName?: string
  className?: string
  variant?: InputVariants[`intent`]
  isValid?: boolean
  errorText?: string
  Icon?: ReactNode
  label?: string
}

const inputStyle = (variant: InputVariants, className: string | undefined) => twMerge(inputVariants(variant), className)

export default function Input({
  value,
  boxClassName,
  variant,
  type,
  placeholder,
  className,
  errorText,
  onChange,
  isValid,
  Icon,
  label,
  ...otherProps
}: TextInputProps) {
  const renderIcon = useMemo(() => {
    switch (variant) {
      case 'error':
        return <XCircle size={24} className="stroke-error" />
      case 'valid':
        return <Check size={24} className="stroke-success" />
    }
  }, [variant])
  return (
    <div className={boxClassName}>
      {label ? <p className="formLabel mb-1">{label}</p> : null}
      <div className={inputStyle({intent: isValid ? 'valid' : variant}, className)}>
        <input
          className="input-text paragraphRegular h-full w-full rounded-small pr-1 text-primaryText outline-none placeholder:text-gray50"
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          {...otherProps}
        />
        {Icon || renderIcon}
      </div>
      {variant === 'error' && errorText ? <p className="paragraphSmall text-error mt-x">{errorText}</p> : null}
    </div>
  )
}
