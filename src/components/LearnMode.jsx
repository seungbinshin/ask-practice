import { useState } from 'react'
import { studyContent } from '../data/studyContent'

export default function LearnMode({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sectionIndex, setSectionIndex] = useState(0)

  if (!selectedCategory) {
    return (
      <div className="fade-in">
        <button onClick={onBack} className="tap-target text-gray-400 mb-4 flex items-center gap-1">
          ← 홈으로
        </button>
        <h2 className="text-xl font-bold mb-2">학습 모드</h2>
        <p className="text-sm text-gray-400 mb-6">카테고리를 선택해 AE 핵심 지식을 학습하세요</p>
        <div className="flex flex-col gap-3">
          {studyContent.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat); setSectionIndex(0) }}
              className="tap-target w-full text-left p-4 bg-hynix-card rounded-xl active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="font-semibold">{cat.title}</div>
                  <div className="text-xs text-gray-500">{cat.sections.length}개 섹션</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const section = selectedCategory.sections[sectionIndex]
  const total = selectedCategory.sections.length

  return (
    <div className="fade-in">
      <button
        onClick={() => setSelectedCategory(null)}
        className="tap-target text-gray-400 mb-4 flex items-center gap-1"
      >
        ← 카테고리 목록
      </button>

      {/* Category title + progress */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{selectedCategory.icon}</span>
        <h2 className="text-lg font-bold">{selectedCategory.title}</h2>
      </div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{sectionIndex + 1} / {total}</span>
      </div>
      <div className="w-full h-1 bg-gray-700 rounded-full mb-6">
        <div
          className="h-1 bg-hynix-red rounded-full progress-bar"
          style={{ width: `${((sectionIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Section title */}
      <h3 className="text-base font-semibold text-hynix-red mb-4">{section.title}</h3>

      {/* Content */}
      <div className="bg-hynix-card rounded-xl p-5 mb-6">
        <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {section.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setSectionIndex(i => Math.max(0, i - 1))}
          disabled={sectionIndex === 0}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          ← 이전
        </button>
        <button
          onClick={() => setSectionIndex(i => Math.min(total - 1, i + 1))}
          disabled={sectionIndex === total - 1}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          다음 →
        </button>
      </div>

      {/* Section jump */}
      <div className="flex flex-wrap gap-2">
        {selectedCategory.sections.map((s, i) => (
          <button
            key={i}
            onClick={() => setSectionIndex(i)}
            className={`text-xs px-3 py-1.5 rounded-lg border active:scale-[0.98] ${
              i === sectionIndex
                ? 'border-hynix-red text-hynix-red'
                : 'border-gray-700 text-gray-500'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
