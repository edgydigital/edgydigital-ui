import React, {useEffect, useState} from 'react'

interface Props {
  className?: string
  isPressed?: boolean
  onChange?: (pressed: boolean) => void
  text?: string
  description?: string
  size?: 'small' | 'medium'
  isDisabled?: boolean
  textClassName?: string
  descriptionClassName?: string
}

export default function Toggle({
  className = '',
  isPressed: keepPressed,
  text,
  description,
  size = 'small',
  onChange,
  isDisabled,
  textClassName = '',
  descriptionClassName = ''
}: Props) {
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    if (keepPressed !== undefined) {
      setIsPressed(keepPressed)
    }
  }, [keepPressed])

  const toggle = () => {
    if (!isDisabled) {
      setIsPressed((current) => !current)
      if (onChange) {
        onChange(!isPressed)
      }
    }
  }

  const isSmall = size === 'small'

  return (
    <div className={`flex ${description ? 'items-start' : 'items-center'}`}>
      <div
        className={`relative cursor-pointer rounded-full transition-all focus-visible:outline-[#DCDCDC] ${
          isDisabled ? 'bg-gray90' : isPressed ? 'bg-black' : 'bg-gray95'
        } ${className}`}
        style={{width: isSmall ? 36 : 44, height: isSmall ? 20 : 24}}
        onClick={toggle}
      >
        <div
          className={`absolute top-[50%] translate-y-[-50%] rounded-full ${
            isDisabled ? 'bg-gray95' : 'bg-white'
          } transition-all`}
          style={{
            filter: 'drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.10))',
            left: isPressed ? `calc(100% - ${isSmall ? 18 : 22}px)` : 2,
            height: isSmall ? 16 : 20,
            width: isSmall ? 16 : 20
          }}
        />
      </div>
      {text ? (
        <div className="ml-1">
          <p
            className={`paragraphRegular transition-colors ${
              isDisabled ? 'text-gray85' : 'text-secondaryText'
            } ${textClassName}`}
          >
            {text}
          </p>
          {description ? <p className={`text-gray65 ${descriptionClassName}`}>{description}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
