import React from 'react'
import ControlItem from '../ControlItem'

interface Props {
  className?: string
  itemClassName?: string
  itemTextClassName?: string
  variant?: 'tab' | 'segmented'
  options: {label: string; value: string; disabled?: boolean}[]
  activeID: string
  onClick: (activeID: string) => void
}

export default function ControlBar({
  className,
  variant,
  itemClassName,
  activeID,
  itemTextClassName,
  options,
  onClick
}: Props) {
  const roundedClass = (index: number, arrayLength: number) => {
    if (index === 0) {
      return 'rounded-l-small'
    }
    if (index === arrayLength - 1) {
      return 'rounded-r-small'
    }
    return ''
  }
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {options.map((object, index, array) => {
        return (
          <ControlItem
            onClick={() => {
              onClick(object.value)
            }}
            disabled={object.disabled}
            variant={variant}
            active={activeID === object.value}
            key={index}
            className={`${roundedClass(index, array.length)} ${itemClassName}`}
            textClassName={itemTextClassName}
            label={object.label}
          />
        )
      })}
    </div>
  )
}
