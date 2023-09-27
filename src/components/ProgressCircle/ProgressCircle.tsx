import React, {ReactNode} from 'react'

const styleClass = {
  small: {h: 44, w: 44, p: 3.5},
  medium: {h: 64, w: 64, p: 5},
  large: {h: 100, w: 100, p: 7.5}
}

interface Props {
  className?: string
  size?: 'small' | 'medium' | 'large'
  Icon?: ReactNode
  progress: number
  showPercentage?: boolean
  percentageFormat?: 'int' | 'singleDecimal' | 'doubleDecimal'
  direction?: 'clockwise' | 'anticlockwise'
}

export default function ProgressCircle({
  className = '',
  size = 'medium',
  Icon,
  progress = 0,
  showPercentage,
  percentageFormat = 'int',
  direction = 'anticlockwise'
}: Props) {
  const prettyProgress = () => {
    if (progress < 0) {
      return 0
    }
    if (progress > 100) {
      return 100
    }
    switch (percentageFormat) {
      case 'singleDecimal':
        return progress.toFixed(1)
      case 'doubleDecimal':
        return progress.toFixed(2)
      default:
        return Math.round(progress)
    }
  }

  return (
    <div className={`relative h-fit w-fit ${className}`}>
      <svg
        width={styleClass[size]?.w}
        height={styleClass[size]?.h}
        style={direction === 'anticlockwise' ? {transform: 'rotateY(180deg)'} : {}}
      >
        <g transform={`rotate(-90 ${styleClass[size]?.w / 2} ${styleClass[size]?.w / 2})`}>
          <Circle color="#161616" percentage={+prettyProgress()} styleVars={styleClass[size]} />
        </g>
      </svg>
      <div className="absolute" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        {showPercentage ? (
          <p className={`${size === 'small' ? 'text-[10px] laptop:text-[10px]' : ''} primaryText`}>
            {prettyProgress()}%
          </p>
        ) : (
          Icon ?? null
        )}
      </div>
    </div>
  )
}

const Circle = ({
  percentage,
  styleVars
}: {
  color: string
  percentage: number
  styleVars: {h: number; w: number; p: number}
}) => {
  const halfWidth = styleVars.w / 2
  const r = halfWidth - styleVars.p / 2
  const circ = 2 * Math.PI * r

  const strokePct = circ - (circ * percentage) / 100 // where stroke will start, e.g. from 15% to 100%.

  return (
    <circle
      r={r}
      cx={halfWidth}
      cy={halfWidth}
      fill="transparent"
      stroke={percentage ? '#161616' : ''} // remove color as 0% sets full circumference
      strokeWidth={styleVars.p}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  )
}
