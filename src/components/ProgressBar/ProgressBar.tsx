import React from 'react'

interface Props {
  className?: string
  leftLabel?: boolean
  rightLabel?: boolean
  topLabel?: boolean
  bottomLabel?: boolean
  progress: number
  indicatorClass?: string
  barClassName?: string
}

export default function ProgressBar({
  className,
  progress,
  leftLabel,
  rightLabel,
  topLabel,
  bottomLabel,
  barClassName,
  indicatorClass = ''
}: Props) {
  const prettyProgress = () => {
    if (progress < 0) {
      return 0
    }
    if (progress > 100) {
      return 100
    }
    return Math.round(progress)
  }
  return (
    <div className={`flex w-full items-center ${className}`}>
      {leftLabel ? (
        <div className="mr-2 min-w-[32px]">
          <p>{prettyProgress()}%</p>
        </div>
      ) : null}
      <div className={`flex w-full items-center rounded-full ${barClassName}`}>
        <div
          className={`relative mr-auto h-[8px] rounded-full bg-black ${indicatorClass}`}
          style={{width: `${prettyProgress()}%`}}
        >
          {bottomLabel ? (
            <div className="absolute right-0 top-[16px] z-[1] flex h-[40px] translate-x-[calc(50%_-_5px)] items-center justify-center rounded-small bg-white px-[12px] shadow-default4">
              <div
                className="absolute left-[50%] top-0 z-[-1] h-[16px] w-[16px] translate-x-[-50%] translate-y-[-50%] rotate-45 bg-white"
                style={{
                  borderRadius: '2px 0 0 0'
                }}
              />
              <p className="">{prettyProgress()}%</p>
            </div>
          ) : null}
          {topLabel ? (
            <div className="absolute bottom-[16px] right-0 z-[1] flex h-[40px] translate-x-[calc(50%_-_5px)] items-center justify-center rounded-small bg-white px-[12px] shadow-default4">
              <div
                className="absolute bottom-0 left-[50%] z-[-1] h-[16px] w-[16px] translate-x-[-50%] translate-y-[50%] rotate-45 bg-white"
                style={{
                  borderRadius: '0 0 2px 0'
                }}
              />
              <p className="">{prettyProgress()}%</p>
            </div>
          ) : null}
        </div>
      </div>
      {rightLabel ? (
        <div className="ml-2 min-w-[30px]">
          <p>{prettyProgress()}%</p>
        </div>
      ) : null}
    </div>
  )
}
