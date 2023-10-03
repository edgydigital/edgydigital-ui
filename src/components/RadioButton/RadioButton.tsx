import React, {ChangeEventHandler, useEffect, useRef} from 'react'

interface Props {
  label?: string
  value?: string
  name: string
  className?: string
  checked?: boolean
  disabled?: boolean
  size?: 'sm' | 'md'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function RadioButton({label, value, name, checked, disabled, className, size, onChange}: Props) {
  const radioRef = useRef<HTMLInputElement>(null)

  return (
    <label
      className={`paragraphRegular group relative flex cursor-pointer select-none items-center pl-[35px] ${
        disabled ? ' !cursor-not-allowed' : ''
      }`}
    >
      {label}
      <input
        ref={radioRef}
        type="radio"
        className="absolute cursor-pointer opacity-0 "
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <span
        className={`checkmark-radio absolute left-0 flex items-center justify-center rounded-full border-1 border-gray85 bg-white group-hover:border-black ${
          size === 'md' ? 'h-[20px] w-[20px]' : 'h-[16px] w-[16px]'
        } ${radioRef.current?.checked || checked ? '!border-black' : ''} ${disabled ? '!border-0 !bg-gray90' : ''}`}
      >
        {radioRef.current?.checked || checked ? (
          <div className={`${size === 'md' ? 'h-[8px] w-[8px]' : 'h-[6px] w-[6px]'} rounded-full bg-black`} />
        ) : null}
      </span>
    </label>
  )
}
