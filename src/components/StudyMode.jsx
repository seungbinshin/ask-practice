import { useState } from 'react'
import { questions } from '../data/questions'

const allQuestions = [
  ...questions.part1.intro.pool.map(q => ({ ...q, category: '1분 소개', part: 1 })),
  ...questions.part1.experience.pool.map(q => ({ ...q, category: '나의 경험', part: 1 })),
  ...questions.part1.teamwork.pool.map(q => ({ ...q, category: '팀워크', part: 1 })),
  ...questions.part2.pool.map(q => ({ ...q, category: '직무 지식', part: 2 })),
]

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
      <div className="mt-6 flex flex-wrap gap-2">
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
    </div>
  )
}
