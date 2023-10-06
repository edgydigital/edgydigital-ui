import React, {HTMLAttributes} from 'react'
import FileInputGraphics from '../../Icons/FileInputGraphics'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
  title?: string
  description?: string
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export default function FileInput({
  className = '',
  title = 'Drop your files here or browse',
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
      <p className="semiSubtitle mt-2">{title}</p>
      <p className="paragraphSmall mt-x text-gray50">{description}</p>
    </div>
  )
}
