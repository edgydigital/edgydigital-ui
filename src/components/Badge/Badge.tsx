import React, {ReactNode} from 'react'

interface Props {
  className?: string
  text?: string
  Icon?: ReactNode
  dotClassName?: string
}

export default function Badge({className = '', text, Icon, dotClassName = ''}: Props) {
  return (
    <div className={`flex h-[16px] items-center rounded-full bg-white px-x shadow-default4 ${className}`}>
      <div className={`mr-x h-[4px] w-[4px] rounded-full bg-black ${dotClassName}`} />
      {Icon}
      <p className={`ml text-[8px] leading-[8px] ${Icon ? 'ml-x' : ''}`}>{text}</p>
    </div>
  )
}
