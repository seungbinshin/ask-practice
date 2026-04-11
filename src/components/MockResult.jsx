import { useState, useRef, useEffect } from 'react'

export default function MockResult({ questions, recordings, onHome }) {
  const [playingId, setPlayingId] = useState(null)
  const audioRef = useRef(null)
  const urlsRef = useRef({})

  useEffect(() => {
    const urls = {}
    questions.forEach((q) => {
      if (recordings[q.id]?.blob) {
        urls[q.id] = URL.createObjectURL(recordings[q.id].blob)
      }
    })
    urlsRef.current = urls
    return () => {
      Object.values(urls).forEach(URL.revokeObjectURL)
    }
  }, [questions, recordings])

  const togglePlay = (questionId) => {
    if (!audioRef.current) return

    if (playingId === questionId) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setPlayingId(null)
    } else {
      const url = urlsRef.current[questionId]
      if (!url) return
      audioRef.current.src = url
      audioRef.current.play()
      setPlayingId(questionId)
    }
  }

  const totalDuration = questions.reduce((sum, q) => {
    return sum + (recordings[q.id]?.duration || 0)
  }, 0)

  const totalMin = Math.floor(totalDuration / 60)
  const totalSec = Math.round(totalDuration % 60)

  return (
    <div className="fade-in">
      <h2 className="text-xl font-bold mb-2">모의면접 완료</h2>
      <p className="text-sm text-gray-400 mb-6">
        총 소요시간: <span className="text-white font-semibold">{totalMin}분 {totalSec}초</span>
      </p>

      <div className="flex flex-col gap-3 mb-6">
        {questions.map((q, i) => {
          const rec = recordings[q.id]
          const dur = rec?.duration || 0
          const min = Math.floor(dur / 60)
          const sec = Math.round(dur % 60)
          const isShort = dur < 30
          const isCurrentlyPlaying = playingId === q.id

          return (
            <div key={q.id} className="bg-hynix-card rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{i + 1}/7</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${q.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
                    {q.category}
                  </span>
                </div>
                <span className={`text-sm font-semibold tabular-nums ${isShort ? 'text-hynix-red' : 'text-green-400'}`}>
                  {min}:{String(sec).padStart(2, '0')}
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{q.question}</p>

              <div className="flex gap-2">
                {rec?.blob && (
                  <button
                    onClick={() => togglePlay(q.id)}
                    className="tap-target text-xs px-3 py-1.5 bg-hynix-dark rounded-lg border border-gray-700 active:scale-[0.98]"
                  >
                    {isCurrentlyPlaying ? '⏹ 정지' : '▶ 재생'}
                  </button>
                )}
                {isShort && (
                  <span className="text-xs text-hynix-red flex items-center">⚠ 30초 미만</span>
                )}
              </div>

              <details className="mt-3">
                <summary className="text-xs text-gray-500 cursor-pointer">답변 가이드 보기</summary>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{q.guideNotes}</p>
              </details>
            </div>
          )
        })}
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setPlayingId(null)}
        playsInline
      />

      <div className="flex flex-col gap-3">
        <button
          onClick={onHome}
          className="tap-target w-full py-3 bg-hynix-red rounded-xl font-medium active:scale-[0.98] transition-transform"
        >
          홈으로
        </button>
      </div>
    </div>
  )
}
