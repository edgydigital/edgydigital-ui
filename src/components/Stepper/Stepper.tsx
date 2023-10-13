import React, {ReactNode} from 'react'
import {MinusCircle, PlusCircle} from 'react-feather'

interface Props {
  count: number | ReactNode
  onPlus?: () => void
  onMinus?: () => void
  PlusIcon?: ReactNode
  MinusIcon?: ReactNode
  countClassName?: string
  disabledMinus?: boolean
  disabledPlus?: boolean
}

export default function Stepper({
  count,
  onMinus,
  onPlus,
  PlusIcon,
  MinusIcon,
  countClassName = '',
  disabledPlus,
  disabledMinus
}: Props) {
  const minusHandler = () => {
    if (onMinus && !disabledMinus) {
      onMinus()
    }
  }
  const plusHandler = () => {
    if (onPlus && !disabledPlus) {
      onPlus()
    }
  }

  return (
    <div className="flex select-none">
      <div className={`${disabledMinus ? 'grayIcon' : 'cursor-pointer'}`} onClick={minusHandler}>
        {MinusIcon ?? <MinusCircle />}
      </div>
      {typeof count === 'number' ? (
        <p className={`paragraphRegular mx-x flex min-w-[18px] justify-center ${countClassName}`}>{count}</p>
      ) : (
        count
      )}
      <div className={`${disabledPlus ? 'grayIcon' : 'cursor-pointer'}`} onClick={plusHandler}>
        {PlusIcon ?? <PlusCircle />}
      </div>
    </div>
  )
}
