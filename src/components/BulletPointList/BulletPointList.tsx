import React from 'react'
import BulletPoint from '../BulletPoint/BulletPoint'

interface Props {
  className?: string
  textClassName?: string
  bulletClassName?: string
  list: string[]
}

export default function BulletPointList({className, textClassName, bulletClassName, list}: Props) {
  return (
    <ul className={`flex w-fit flex-col gap-1 ${className}`}>
      {list.map((object, index) => {
        return <BulletPoint textClassName={textClassName} bulletClassName={bulletClassName} key={index} text={object} />
      })}
    </ul>
  )
}
