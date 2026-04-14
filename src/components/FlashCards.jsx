import { useState, useCallback } from 'react'
import { flashCards } from '../data/flashCards'

function Card({ card, flipped, onFlip }) {
  return (
    <div
      onClick={onFlip}
      className="tap-target w-full min-h-[220px] cursor-pointer select-none"
    >
      <div className={`relative w-full min-h-[220px] transition-all duration-300 ${flipped ? '' : ''}`}>
        <div className={`w-full min-h-[220px] rounded-2xl p-6 flex flex-col items-center justify-center text-center ${
          flipped
            ? 'bg-hynix-accent border border-blue-700'
            : 'bg-hynix-card border border-gray-700'
        }`}>
          {!flipped ? (
            <>
              <div className="text-2xl font-bold whitespace-pre-line leading-tight">{card.front}</div>
              <div className="text-xs text-gray-500 mt-4">탭하여 정답 확인</div>
            </>
          ) : (
            <>
              <div className="text-xs text-blue-400 mb-2 font-medium">{card.front}</div>
              <div className="text-sm text-gray-200 whitespace-pre-line leading-relaxed">{card.back}</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function DeckView({ deck, onBack }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [shuffled, setShuffled] = useState(null)

  const cards = shuffled || deck.cards
  const card = cards[index]
  const total = cards.length

  const next = useCallback(() => {
    if (index < total - 1) {
      setIndex(i => i + 1)
      setFlipped(false)
    }
  }, [index, total])

  const prev = useCallback(() => {
    if (index > 0) {
      setIndex(i => i - 1)
      setFlipped(false)
    }
  }, [index])

  const shuffle = useCallback(() => {
    const arr = [...deck.cards].sort(() => Math.random() - 0.5)
    setShuffled(arr)
    setIndex(0)
    setFlipped(false)
  }, [deck.cards])

  const reset = useCallback(() => {
    setShuffled(null)
    setIndex(0)
    setFlipped(false)
  }, [])

  return (
    <div className="fade-in">
      <button onClick={onBack} className="tap-target text-gray-400 mb-4 flex items-center gap-1">
        ← 덱 목록
      </button>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{deck.icon}</span>
        <h2 className="text-lg font-bold">{deck.title}</h2>
      </div>

      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{index + 1} / {total}</span>
        <div className="flex gap-2">
          <button
            onClick={shuffle}
            className="text-xs px-2 py-1 bg-hynix-card border border-gray-700 rounded-lg active:scale-95"
          >
            셔플
          </button>
          <button
            onClick={reset}
            className="text-xs px-2 py-1 bg-hynix-card border border-gray-700 rounded-lg active:scale-95"
          >
            처음부터
          </button>
        </div>
      </div>

      <div className="w-full h-1 bg-gray-700 rounded-full mb-5">
        <div
          className="h-1 bg-hynix-red rounded-full progress-bar"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <Card card={card} flipped={flipped} onFlip={() => setFlipped(f => !f)} />

      <div className="flex gap-3 mt-5">
        <button
          onClick={prev}
          disabled={index === 0}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          ← 이전
        </button>
        <button
          onClick={next}
          disabled={index === total - 1}
          className="tap-target flex-1 py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform disabled:opacity-30"
        >
          다음 →
        </button>
      </div>

      {/* Card dots */}
      <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setFlipped(false) }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? 'bg-hynix-red' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function FlashCards({ onBack }) {
  const [selectedDeck, setSelectedDeck] = useState(null)

  if (selectedDeck) {
    return <DeckView deck={selectedDeck} onBack={() => setSelectedDeck(null)} />
  }

  const totalCards = flashCards.reduce((sum, d) => sum + d.cards.length, 0)

  return (
    <div className="fade-in">
      <button onClick={onBack} className="tap-target text-gray-400 mb-4 flex items-center gap-1">
        ← 홈으로
      </button>
      <h2 className="text-xl font-bold mb-1">플래시카드</h2>
      <p className="text-sm text-gray-400 mb-6">숫자·고유명사 빠른 복습 · {flashCards.length}덱 {totalCards}장</p>

      <div className="flex flex-col gap-3">
        {flashCards.map((deck) => (
          <button
            key={deck.id}
            onClick={() => setSelectedDeck(deck)}
            className="tap-target w-full text-left p-4 bg-hynix-card rounded-xl active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{deck.icon}</span>
              <div className="flex-1">
                <div className="font-semibold">{deck.title}</div>
                <div className="text-xs text-gray-500">{deck.cards.length}장</div>
              </div>
              <span className="text-gray-600 text-sm">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
