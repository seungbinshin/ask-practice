import { questions, pickRandom } from '../data/questions'

const categories = [
  { key: 'intro', data: questions.part1.intro, color: 'border-blue-500' },
  { key: 'experience', data: questions.part1.experience, color: 'border-green-500' },
  { key: 'teamwork', data: questions.part1.teamwork, color: 'border-yellow-500' },
]

export default function QuestionSelect({ onSelect, onBack }) {
  const handlePart1 = (category) => {
    const [q] = pickRandom(category.data.pool, 1)
    onSelect({
      ...q,
      timeLimitSec: category.data.timeLimitSec,
      prepTimeSec: category.data.prepTimeSec,
      category: category.data.label,
      part: 1,
    })
  }

  const handlePart2 = () => {
    const [q] = pickRandom(questions.part2.pool, 1)
    onSelect({
      ...q,
      timeLimitSec: questions.part2.timeLimitSec,
      prepTimeSec: questions.part2.prepTimeSec,
      category: questions.part2.label,
      part: 2,
    })
  }

  return (
    <div className="fade-in">
      <button
        onClick={onBack}
        className="tap-target text-gray-400 mb-6 flex items-center gap-1"
      >
        ← 홈으로
      </button>

      <h2 className="text-xl font-bold mb-6">문항 선택</h2>

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3">Part 1 · 기본 질문 · 답변 1분</p>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handlePart1(cat)}
              className={`tap-target w-full text-left p-4 bg-hynix-card rounded-xl border-l-4 ${cat.color} active:scale-[0.98] transition-transform`}
            >
              <div className="font-semibold">{cat.data.label}</div>
              <div className="text-sm text-gray-400 mt-1">
                {cat.data.pool.length}개 질문 풀에서 랜덤 출제
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-3">Part 2 · 직무 질문 · 답변 3분</p>
        <button
          onClick={handlePart2}
          className="tap-target w-full text-left p-4 bg-hynix-card rounded-xl border-l-4 border-hynix-red active:scale-[0.98] transition-transform"
        >
          <div className="font-semibold">{questions.part2.label}</div>
          <div className="text-sm text-gray-400 mt-1">
            {questions.part2.pool.length}개 질문 풀에서 랜덤 출제
          </div>
        </button>
      </div>
    </div>
  )
}
