import { useState, useEffect, useRef, useCallback } from 'react'
import { questions } from '../data/questions'
import { modelAnswers } from '../data/modelAnswers'

const allQuestions = [
  ...questions.part1.intro.pool.map(q => ({ ...q, category: '1분 소개', part: 1 })),
  ...questions.part1.experience.pool.map(q => ({ ...q, category: '나의 경험', part: 1 })),
  ...questions.part1.teamwork.pool.map(q => ({ ...q, category: '팀워크', part: 1 })),
  ...questions.part2.pool.map(q => ({ ...q, category: '직무 지식', part: 2 })),
]

function FloatingStopwatch({ durationSec, questionIndex }) {
  const [remaining, setRemaining] = useState(durationSec)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  // Reset when question changes or duration changes
  useEffect(() => {
    setRemaining(durationSec)
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [questionIndex, durationSec])

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running, remaining])

  const toggle = useCallback(() => {
    if (remaining === 0) {
      setRemaining(durationSec)
      setRunning(true)
    } else {
      setRunning(r => !r)
    }
  }, [remaining, durationSec])

  const reset = useCallback(() => {
    setRemaining(durationSec)
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [durationSec])

  const min = Math.floor(remaining / 60)
  const sec = remaining % 60
  const pct = remaining / durationSec
  const isUrgent = remaining > 0 && remaining <= 10
  const isExpired = remaining === 0

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-2">
      <div
        className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-2 transition-colors ${
          isExpired ? 'bg-red-900/90 border-red-500' :
          isUrgent ? 'bg-orange-900/90 border-orange-400' :
          running ? 'bg-hynix-card/95 border-hynix-red' :
          'bg-hynix-card/95 border-gray-600'
        }`}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-700/50" />
          <circle
            cx="40" cy="40" r="35" fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 35}`}
            strokeDashoffset={`${2 * Math.PI * 35 * (1 - pct)}`}
            className={`transition-all duration-1000 linear ${
              isExpired ? 'text-red-500' : isUrgent ? 'text-orange-400' : 'text-hynix-red'
            }`}
            stroke="currentColor"
          />
        </svg>
        <div className="text-center z-10">
          <span className={`text-lg font-mono font-bold ${isExpired ? 'text-red-300' : 'text-white'}`}>
            {isExpired ? '⏰' : `${min}:${sec.toString().padStart(2, '0')}`}
          </span>
          <div className="text-[9px] text-gray-400 -mt-0.5">
            {isExpired ? 'TIME UP' : running ? '진행 중' : '대기'}
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <button
          onClick={toggle}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-md active:scale-95 transition-transform ${
            running
              ? 'bg-yellow-600 text-white'
              : isExpired
              ? 'bg-hynix-red text-white'
              : 'bg-green-700 text-white'
          }`}
        >
          {isExpired ? '재시작' : running ? '일시정지' : '시작'}
        </button>
        <button
          onClick={reset}
          className="px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-700 text-gray-300 shadow-md active:scale-95 transition-transform"
        >
          ↺
        </button>
      </div>
    </div>
  )
}

export default function StudyMode({ onBack }) {
  const [index, setIndex] = useState(0)

  const q = allQuestions[index]
  const total = allQuestions.length

  return (
    <div className="fade-in">
      <button
        onClick={onBack}
        className="tap-target text-gray-400 mb-4 flex items-center gap-1"
      >
        ← 홈으로
      </button>

      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{index + 1} / {total}</span>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${q.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
            Part {q.part}
          </span>
          <span className="text-xs text-gray-500">{q.category}</span>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-700 rounded-full mb-6">
        <div
          className="h-1 bg-hynix-red rounded-full progress-bar"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-lg leading-relaxed mb-6">{q.question}</p>

      {/* Guide */}
      <div className="bg-hynix-accent/30 rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-gray-300 mb-2">답변 골격</p>
        <p className="text-sm text-gray-400 leading-relaxed">{q.guideNotes}</p>
      </div>

      {/* Keywords */}
      <div className="bg-hynix-card rounded-xl p-4 mb-8">
        <p className="text-xs font-semibold text-gray-400 mb-2">키워드</p>
        <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
          {q.keywords.map((kw, i) => (
            <li key={i}>{kw}</li>
          ))}
        </ul>
      </div>

      {/* Model Answer Toggle */}
      {modelAnswers[q.id] && (
        <details className="bg-hynix-card border border-gray-700 rounded-xl p-4 mb-8">
          <summary className="text-sm font-semibold text-hynix-red cursor-pointer select-none">
            예시 답변 보기
          </summary>
          <p className="text-sm text-gray-300 leading-relaxed mt-3 whitespace-pre-line">
            {modelAnswers[q.id]}
          </p>
        </details>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => setIndex(i => Math.max(0, i - 1))}
          disabled={index === 0}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          ← 이전
        </button>
        <button
          onClick={() => setIndex(i => Math.min(total - 1, i + 1))}
          disabled={index === total - 1}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          다음 →
        </button>
      </div>

      {/* Category jump */}
      <div className="mt-6 flex flex-wrap gap-2 mb-28">
        {[
          { label: '소개', start: 0 },
          { label: '경험', start: questions.part1.intro.pool.length },
          { label: '팀워크', start: questions.part1.intro.pool.length + questions.part1.experience.pool.length },
          { label: '직무', start: questions.part1.intro.pool.length + questions.part1.experience.pool.length + questions.part1.teamwork.pool.length },
        ].map(({ label, start }) => (
          <button
            key={label}
            onClick={() => setIndex(start)}
            className={`text-xs px-3 py-1.5 rounded-lg border active:scale-[0.98] ${
              index >= start && (label === '직무' || index < start + (label === '소개' ? questions.part1.intro.pool.length : label === '경험' ? questions.part1.experience.pool.length : questions.part1.teamwork.pool.length))
                ? 'border-hynix-red text-hynix-red'
                : 'border-gray-700 text-gray-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Floating Stopwatch */}
      <FloatingStopwatch
        durationSec={q.part === 1 ? 60 : 180}
        questionIndex={index}
      />
    </div>
  )
}
