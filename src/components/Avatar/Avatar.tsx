import {VariantProps, cva} from 'class-variance-authority'
import React from 'react'
import {Heart} from 'react-feather'
import {twMerge} from 'tailwind-merge'

const AvatarVariants = cva('bg-black text-white flex items-center justify-center relative', {
  variants: {
    intent: {
      square: 'rounded-semiSmall',
      circle: 'rounded-full'
    },
    size: {
      medium: 'h-[32px] w-[32px]',
      large: 'h-[48px] w-[48px]'
    }
  },
  defaultVariants: {
    intent: 'circle',
    size: 'medium'
  }
})
type AvatarVariant = VariantProps<typeof AvatarVariants>
const buttonStyle = (variant: AvatarVariant['intent'], size: AvatarVariant['size'], className: string | undefined) =>
  twMerge(AvatarVariants({intent: variant, size, className}))

interface Props {
  className?: string
  isOutline?: boolean
  variant?: AvatarVariant['intent']
  size?: AvatarVariant['size']
  onClick?: () => void
  photo?: boolean
  initials?: string
  photoUrl?: string
}
export default function Avatar({className, isOutline, size, variant, onClick, photo, photoUrl, initials}: Props) {
  return (
    <div
      onClick={onClick}
      className={`${buttonStyle(variant, size, className)} ${isOutline && 'border-1 border-gray50'}`}
    >
      <div
        className={`flex h-[100%] w-[100%] items-center justify-center overflow-hidden ${
          variant === 'circle' ? 'rounded-full' : 'rounded-semiSmall'
        } ${isOutline && 'border-1 border-white'}`}
      >
        {photo ? (
          <img
            className="h-[100%] w-[100%] object-cover object-center"
            src={photoUrl || 'https://source.unsplash.com/random'}
          />
        ) : (
          <div>
            <p className="label">{initials}</p>
          </div>
        )}
      </div>

      <div
        className={`absolute bottom-0 right-0 flex h-[16px] w-[16px] items-center justify-center bg-white ${
          variant === 'circle' ? 'rounded-full' : 'rounded-extraSmall'
        }`}
      >
        <Heart fill={'#000000'} width={8} height={8} />
      </div>
    </div>
  )
}
