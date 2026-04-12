import { useState, useCallback } from 'react'
import Home from './components/Home'
import QuestionSelect from './components/QuestionSelect'
import PrepTimer from './components/PrepTimer'
import AnswerRecorder from './components/AnswerRecorder'
import Result from './components/Result'
import MockResult from './components/MockResult'
import StudyMode from './components/StudyMode'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [mode, setMode] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [recordings, setRecordings] = useState({})
  const [mockQuestions, setMockQuestions] = useState([])
  const [mockIndex, setMockIndex] = useState(0)

  const saveRecording = useCallback((questionId, blob, duration) => {
    setRecordings(prev => ({ ...prev, [questionId]: { blob, duration } }))
  }, [])

  const startIndividual = useCallback((question) => {
    setMode('individual')
    setCurrentQuestion(question)
    setScreen('prep')
  }, [])

  const startMock = useCallback((questions) => {
    setMode('mock')
    setMockQuestions(questions)
    setMockIndex(0)
    setCurrentQuestion(questions[0])
    setScreen('prep')
  }, [])

  const onPrepComplete = useCallback(() => {
    setScreen('answer')
  }, [])

  const onAnswerComplete = useCallback((blob, duration) => {
    if (currentQuestion) {
      saveRecording(currentQuestion.id, blob, duration)
    }
    if (mode === 'mock') {
      const nextIndex = mockIndex + 1
      if (nextIndex < mockQuestions.length) {
        setMockIndex(nextIndex)
        setCurrentQuestion(mockQuestions[nextIndex])
        setScreen('prep')
      } else {
        setScreen('mockResult')
      }
    } else {
      setScreen('result')
    }
  }, [currentQuestion, mode, mockIndex, mockQuestions, saveRecording])

  const goHome = useCallback(() => {
    setScreen('home')
    setMode(null)
    setCurrentQuestion(null)
    setMockQuestions([])
    setMockIndex(0)
    setRecordings({})
  }, [])

  const goSelect = useCallback(() => {
    setScreen('select')
  }, [])

  const goStudy = useCallback(() => {
    setScreen('study')
  }, [])

  return (
    <div className="min-h-screen bg-hynix-dark text-white">
      <div className="max-w-lg mx-auto px-4 py-6">
        {screen === 'home' && (
          <Home onIndividual={goSelect} onMock={startMock} onStudy={goStudy} />
        )}
        {screen === 'study' && (
          <StudyMode onBack={goHome} />
        )}
        {screen === 'select' && (
          <QuestionSelect onSelect={startIndividual} onBack={goHome} />
        )}
        {screen === 'prep' && currentQuestion && (
          <PrepTimer
            question={currentQuestion}
            onComplete={onPrepComplete}
            mockProgress={mode === 'mock' ? { current: mockIndex + 1, total: mockQuestions.length } : null}
          />
        )}
        {screen === 'answer' && currentQuestion && (
          <AnswerRecorder
            question={currentQuestion}
            onComplete={onAnswerComplete}
            mockProgress={mode === 'mock' ? { current: mockIndex + 1, total: mockQuestions.length } : null}
          />
        )}
        {screen === 'result' && currentQuestion && (
          <Result
            question={currentQuestion}
            recording={recordings[currentQuestion.id]}
            onRetry={() => setScreen('prep')}
            onSelect={goSelect}
            onHome={goHome}
          />
        )}
        {screen === 'mockResult' && (
          <MockResult
            questions={mockQuestions}
            recordings={recordings}
            onHome={goHome}
          />
        )}
      </div>
    </div>
  )
}
