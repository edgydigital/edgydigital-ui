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
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {options.map((object, index) => {
        return (
          <ControlItem
            onClick={() => {
              onClick(object.value)
            }}
            disabled={object.disabled}
            variant={variant}
            active={activeID === object.value}
            key={index}
            className={itemClassName}
            textClassName={itemTextClassName}
            label={object.label}
          />
        )
      })}
    </div>
  )
}
