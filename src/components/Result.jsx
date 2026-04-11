import { useState, useRef, useEffect } from 'react'

export default function Result({ question, recording, onRetry, onSelect, onHome }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const urlRef = useRef(null)

  useEffect(() => {
    if (recording?.blob) {
      urlRef.current = URL.createObjectURL(recording.blob)
    }
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    }
  }, [recording])

  const togglePlay = () => {
    if (!audioRef.current || !urlRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    } else {
      audioRef.current.src = urlRef.current
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const durationSec = recording?.duration || 0
  const minutes = Math.floor(durationSec / 60)
  const seconds = Math.round(durationSec % 60)
  const isShort = durationSec < 30

  return (
    <div className="fade-in">
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${question.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
          Part {question.part}
        </span>
        <span className="text-sm text-gray-400">{question.category}</span>
      </div>

      <p className="text-lg leading-relaxed mb-6">{question.question}</p>

      <div className="bg-hynix-card rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">답변 시간</span>
          <span className={`text-2xl font-bold tabular-nums ${isShort ? 'text-hynix-red' : 'text-green-400'}`}>
            {minutes}:{String(seconds).padStart(2, '0')}
            <span className="text-sm text-gray-500 ml-1">
              / {question.timeLimitSec >= 60 ? `${question.timeLimitSec / 60}분` : `${question.timeLimitSec}초`}
            </span>
          </span>
        </div>
        {isShort && (
          <p className="text-xs text-hynix-red mt-2">⚠ 실제 시험에서는 30초 이상 답변해야 합니다</p>
        )}
      </div>

      {recording?.blob && (
        <button
          onClick={togglePlay}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl mb-6 active:scale-[0.98] transition-transform"
        >
          {isPlaying ? '⏹ 정지' : '▶ 녹음 재생'}
        </button>
      )}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        playsInline
      />

      <div className="bg-hynix-accent/30 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-gray-300 mb-2">답변 가이드</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-3">{question.guideNotes}</p>
        {question.keywords && (
          <>
            <p className="text-xs font-semibold text-gray-400 mb-1">키워드</p>
            <ul className="text-xs text-gray-500 list-disc list-inside space-y-0.5">
              {question.keywords.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onRetry}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform"
        >
          다시 연습
        </button>
        <button
          onClick={onSelect}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform"
        >
          문항 목록
        </button>
        <button
          onClick={onHome}
          className="tap-target text-sm text-gray-500 py-2"
        >
          홈으로
        </button>
      </div>
    </div>
  )
}
