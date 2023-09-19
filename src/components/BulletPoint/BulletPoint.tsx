import React from 'react'

interface Props {
  className?: string
  textClassName?: string
  bulletClassName?: string
  text?: string
}

export default function BulletPoint({className, bulletClassName, textClassName, text}: Props) {
  return (
    <li className={`flex w-fit items-center gap-1 ${className}`}>
      <div className={`h-[8px] w-[8px] rounded-extraSmall bg-primaryText ${bulletClassName}`} />
      <p className={`paragraphRegular ${textClassName}`}>{text}</p>
    </li>
  )
}
