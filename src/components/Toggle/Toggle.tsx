import React from 'react'

interface Props {
  active?: boolean
  disabled?: boolean
  className?: string
  textClassName?: string
  boxClassName?: string
  ringClassName?: string
  label?: string
  activeColor?: string
  inactiveColor?: string
  size?: 'sm' | 'md'
  onClick?: () => void
}

export default function Toggle({
  active,
  disabled,
  boxClassName,
  className,
  ringClassName,
  activeColor,
  textClassName,
  label,
  size,
  onClick
}: Props) {
  return (
    <div className={`flex items-center ${disabled && 'opacity-[0.5]'} gap-1 ${boxClassName}`}>
      <div
        onClick={!disabled ? onClick : undefined}
        className={`h-[20px] w-[36px] cursor-pointer  rounded-full  p-[2px] ${disabled ? '!cursor-not-allowed' : ''} ${
          active ? `bg-${activeColor || 'black'}` : `bg-${activeColor || 'gray90'}`
        } ${className}`}
      >
        <div
          className={`${
            active ? 'ml-[50%]' : 'ml-0'
          } aspect-square h-[100%] rounded-full bg-white transition-all duration-[300ms] ${ringClassName}`}
        ></div>
      </div>
      {label && <p className={`text-secondaryText ${textClassName}`}>{label}</p>}
    </div>
  )
}
