import { generateMockSet } from '../data/questions'

export default function Home({ onIndividual, onMock, onStudy }) {
  const handleMock = () => {
    const set = generateMockSet()
    onMock(set)
  }

  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-[80vh] gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          A<span className="text-hynix-red">!</span>SK
        </h1>
        <p className="text-lg text-gray-400">면접 연습</p>
        <p className="text-sm text-gray-500 mt-1">SK하이닉스 AE 비대면 영상 인터뷰</p>
      </div>

      <div className="w-full flex flex-col gap-4 max-w-xs">
        <button
          onClick={onStudy}
          className="tap-target w-full py-4 px-6 bg-hynix-card border border-gray-700 rounded-xl text-lg font-medium hover:bg-hynix-accent active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <div className="font-semibold">답변 준비</div>
            <div className="text-sm text-gray-400 mt-1">41개 질문 + 답변 골격 미리 학습</div>
          </div>
        </button>

        <button
          onClick={onIndividual}
          className="tap-target w-full py-4 px-6 bg-hynix-card border border-gray-700 rounded-xl text-lg font-medium hover:bg-hynix-accent active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <div className="font-semibold">개별 문항 연습</div>
            <div className="text-sm text-gray-400 mt-1">카테고리별로 골라서 반복 연습</div>
          </div>
        </button>

        <button
          onClick={handleMock}
          className="tap-target w-full py-4 px-6 bg-hynix-red rounded-xl text-lg font-medium hover:bg-red-700 active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <div className="font-semibold">전체 모의면접</div>
            <div className="text-sm text-red-200 mt-1">7문항 실전 연속 진행 (~40분)</div>
          </div>
        </button>
      </div>

      <div className="text-xs text-gray-600 text-center mt-4">
        <p>Part1 기본질문 3개 × 1분 + Part2 직무질문 4개 × 3분</p>
        <p>준비시간 60초 · 답변 30초 이상</p>
      </div>
    </div>
  )
}
