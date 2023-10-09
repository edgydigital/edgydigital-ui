import React, {HTMLAttributes, ReactNode} from 'react'
import FileInputGraphics from '../../Icons/FileInputGraphics'

interface Props
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'title'> {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export default function FileInput({
  className = '',
  title = (
    <p className="semiSubtitle">
      Drop your files here or <span className="underline">browse</span>
    </p>
  ),
  description = 'Maximum size: 50MB',
  style,
  containerProps,
  ...otherProps
}: Props) {
  return (
    <div
      {...containerProps}
      className={`relative flex flex-col items-center rounded-medium border-2 border-dashed border-gray50 p-4 focus-visible:border-primaryText ${
        containerProps?.className ?? ''
      }`}
    >
      <input
        {...otherProps}
        type="file"
        style={{opacity: 0, ...style}}
        className={`absolute inset-0 rounded-medium ${className}`}
      />
      <FileInputGraphics />
      <div className="mt-2">{typeof title === 'string' ? <p className="semiSubtitle">{title}</p> : title}</div>
      <div className="mt-x">
        {typeof description === 'string' ? <p className="paragraphSmall text-gray50">{description}</p> : description}
      </div>
    </div>
  )
}
