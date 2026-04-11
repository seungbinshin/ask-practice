import { useState, useCallback } from 'react'
import CircleTimer from './CircleTimer'

export default function PrepTimer({ question, onComplete, mockProgress }) {
  const [showHints, setShowHints] = useState(false)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  return (
    <div className="fade-in flex flex-col items-center min-h-[80vh]">
      {mockProgress && (
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{mockProgress.current} / {mockProgress.total}</span>
            <span>준비 중</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div
              className="h-1 bg-hynix-red rounded-full progress-bar"
              style={{ width: `${(mockProgress.current / mockProgress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${question.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
          Part {question.part}
        </span>
        <span className="text-sm text-gray-400">{question.category}</span>
        <span className="text-xs text-gray-500">답변 {question.timeLimitSec >= 60 ? `${question.timeLimitSec / 60}분` : `${question.timeLimitSec}초`}</span>
      </div>

      <div className="text-center px-2 mb-8">
        <p className="text-lg leading-relaxed">{question.question}</p>
      </div>

      <div className="mb-8">
        <CircleTimer
          durationSec={question.prepTimeSec}
          onComplete={handleComplete}
        />
      </div>

      <p className="text-sm text-gray-400 mb-4">준비 시간</p>

      <button
        onClick={handleComplete}
        className="tap-target px-6 py-3 bg-hynix-card border border-gray-600 rounded-xl text-sm active:scale-[0.98] transition-transform mb-6"
      >
        답변 시작 →
      </button>

      <div className="w-full">
        <button
          onClick={() => setShowHints(!showHints)}
          className="tap-target text-xs text-gray-500 underline"
        >
          {showHints ? '키워드 힌트 숨기기' : '키워드 힌트 보기'}
        </button>
        {showHints && question.keywords && (
          <ul className="mt-2 text-sm text-gray-400 list-disc list-inside space-y-1">
            {question.keywords.map((kw, i) => (
              <li key={i}>{kw}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
