import { useEffect, useState, useRef } from 'react'

export default function CircleTimer({ durationSec, onComplete, size = 220, strokeWidth = 8 }) {
  const [remaining, setRemaining] = useState(durationSec)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    startTimeRef.current = Date.now()

    const tick = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const left = Math.max(0, durationSec - elapsed)
      setRemaining(left)

      if (left <= 0) {
        onComplete?.()
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [durationSec, onComplete])

  const progress = remaining / durationSec
  const dashOffset = circumference * (1 - progress)
  const displaySec = Math.ceil(remaining)

  let strokeColor = '#22c55e'
  if (displaySec <= 10) strokeColor = '#E4002B'
  else if (displaySec <= 30) strokeColor = '#eab308'

  const minutes = Math.floor(displaySec / 60)
  const seconds = displaySec % 60
  const timeText = minutes > 0
    ? `${minutes}:${String(seconds).padStart(2, '0')}`
    : `${seconds}`

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="timer-ring">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke 0.3s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-bold tabular-nums" style={{ color: strokeColor }}>
          {timeText}
        </span>
      </div>
    </div>
  )
}
