import React, {PropsWithChildren, useEffect, useState} from 'react'

interface Props extends PropsWithChildren {
  className?: string
  isOpen?: boolean
  initialRender?: boolean
}

export default function ModalContainer({children, className = '', isOpen, initialRender = false}: Props) {
  const [canRender, setCanRender] = useState(initialRender)

  useEffect(() => {
    if (!canRender) {
      setCanRender(true)
    }
  }, [isOpen])

  if (!canRender) {
    return null
  }

  return (
    <div
      className={`fixed left-0 top-0 transition-all ${
        isOpen ? 'opacity-1 z-[9999]' : 'z-[-1] opacity-0'
      } flex h-full w-full items-end justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-[3px] tablet:items-center ${className}`}
    >
      {children}
    </div>
  )
}
