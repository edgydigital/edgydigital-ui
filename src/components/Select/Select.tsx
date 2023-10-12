import React, {ReactNode, useEffect, useMemo, useRef, useState} from 'react'
import {cva} from 'class-variance-authority'
import {twMerge} from 'tailwind-merge'
import {InputVariants} from '../Input/Input'
import {Check, ChevronDown, XCircle} from 'react-feather'

const selectVariants = cva(
  `flex h-[54px] cursor-pointer relative flex-row items-center justify-between rounded-small bg-white px-2 border-gray50 border-1`,
  {
    variants: {
      intent: {
        error: 'border-error',
        valid: 'border-success'
      }
    }
  }
)

interface Props {
  options: {option: string; value: string; icon?: ReactNode}[] | string[] | undefined
  onChange?: (value: string | null) => void
  value?: string | null
  placeholder?: string
  Icon?: ReactNode
  selectClassName?: string
  optionsBoxClassName?: string
  optionClassName?: string
  className?: string
  noBackdrop?: boolean
  ValueIcon?: ReactNode
  arrowColor?: string
  variant?: InputVariants[`intent`]
}

const selectStyle = (variant: InputVariants, className: string | undefined) =>
  twMerge(selectVariants(variant), className)

export default function CustomSelect({
  options,
  onChange,
  value,
  placeholder,
  Icon,
  selectClassName,
  optionsBoxClassName,
  optionClassName,
  className,
  ValueIcon,
  arrowColor,
  variant
}: Props) {
  const optionsRef = useRef(null)
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen((current) => !current)
  }

  const onChangeHandler = (value: string | null) => {
    if (onChange) {
      onChange(value)
    }
    toggle()
  }

  const optionsBoxHeight = () => {
    if (options) {
      if (options.length < 4) {
        return options.length * 52
      } else {
        return 180
      }
    }
  }
  const optionsBoxOverflow = () => {
    if (options) {
      if (options.length < 4) {
        return 'hidden'
      } else {
        return 'scroll'
      }
    } else {
      return 'hidden'
    }
  }

  const renderSelectText = () => {
    if (value) {
      return value
    } else {
      return placeholder
    }
  }
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleClickOutside(event: MouseEvent) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      toggle()
    }
  }

  useEffect(() => {
    if (open) {
      if (wrapperRef.current) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }
    }
  }, [wrapperRef, open])

  const renderIcon = useMemo(() => {
    if (ValueIcon) {
      return ValueIcon
    }
    switch (variant) {
      case 'error':
        return <XCircle size={24} className="stroke-error" />
      case 'valid':
        return <Check size={24} className="stroke-success" />
      default:
        return null
    }
  }, [variant, ValueIcon])

  return (
    <>
      <div ref={wrapperRef} className={`relative z-[5] ${className}`}>
        <div onClick={toggle} className={selectStyle({intent: variant}, selectClassName)}>
          <div className="flex items-center gap-1">
            {renderIcon ? <div>{renderIcon}</div> : null}
            <p className="input-text">{renderSelectText()}</p>
          </div>
          <div className="ml-1">
            <div
              style={{transform: open ? 'rotate3d(1,0,0,180deg' : 'rotate3d(0,0,0,180deg'}}
              className={`transition-all duration-[300ms] `}
            >
              {Icon ?? <ChevronDown color={arrowColor} />}
            </div>
          </div>
        </div>
        <div className="shadow-main2 absolute top-[calc(100%+10px)] w-full overflow-hidden rounded-small">
          <div
            ref={optionsRef}
            style={{
              height: open ? optionsBoxHeight() : 0,
              overflowY: optionsBoxOverflow(),
              msOverflowStyle: 'none'
            }}
            className={`rounded-small border-1 ${
              open ? 'border-gray50' : 'border-transparent'
            } transition-all duration-[300ms] ${optionsBoxClassName}`}
          >
            {options
              ? options.map((option, index, array) => {
                  return (
                    <div
                      onClick={() => {
                        onChangeHandler(typeof option === 'string' ? option : option.value)
                      }}
                      key={index}
                      className={`flex h-[52px] cursor-pointer items-center border-b-1 border-gray50 bg-white px-2 hover:bg-gray95  ${
                        index === array.length - 1 && '!border-b-0'
                      } ${optionClassName}`}
                    >
                      {typeof option === 'string' ? null : (
                        <div className="text-green mr-1">{option.icon && option.icon}</div>
                      )}
                      <p className="input-text">{typeof option === 'string' ? option : option.option}</p>
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </>
  )
}
