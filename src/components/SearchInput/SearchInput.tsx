import React, {ChangeEventHandler, ReactNode} from 'react'
import {Search, XCircle} from 'react-feather'

interface Props {
  Icon?: ReactNode
  RemoveIcon?: ReactNode
  className?: string
  inputClassName?: string
  placeholder?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onDelete?: () => void
}

export default function SearchInput({
  Icon,
  RemoveIcon,
  className,
  inputClassName,
  placeholder,
  value,
  onChange,
  onDelete
}: Props) {
  return (
    <div
      className={`relative flex h-[50px] items-center gap-1 rounded-medium bg-transparent px-2 ${
        value && 'shadow-default3'
      } ${className}`}
    >
      <div>{Icon || <Search />}</div>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-transparent outline-none ${inputClassName}`}
        value={value}
      />
      {value && <div onClick={onDelete}>{RemoveIcon || <XCircle />}</div>}
    </div>
  )
}
