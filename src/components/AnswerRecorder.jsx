import { useState, useEffect, useRef, useCallback } from 'react'
import CircleTimer from './CircleTimer'

function getSupportedMimeType() {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/ogg;codecs=opus',
    'audio/wav',
    '',
  ]
  for (const type of types) {
    if (type === '' || MediaRecorder.isTypeSupported(type)) {
      return type
    }
  }
  return ''
}

export default function AnswerRecorder({ question, onComplete, mockProgress }) {
  const [isRecording, setIsRecording] = useState(false)
  const [error, setError] = useState(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const startTimeRef = useRef(null)
  const streamRef = useRef(null)

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
  }, [])

  const handleTimerComplete = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  const handleStopEarly = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  useEffect(() => {
    let cancelled = false

    async function startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        if (cancelled) {
          stream.getTracks().forEach(t => t.stop())
          return
        }
        streamRef.current = stream
        const mimeType = getSupportedMimeType()
        const options = mimeType ? { mimeType } : {}
        const recorder = new MediaRecorder(stream, options)
        mediaRecorderRef.current = recorder
        chunksRef.current = []
        startTimeRef.current = Date.now()

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunksRef.current.push(e.data)
        }

        recorder.onstop = () => {
          const duration = (Date.now() - startTimeRef.current) / 1000
          const blob = new Blob(chunksRef.current, { type: mimeType || 'audio/webm' })
          stream.getTracks().forEach(t => t.stop())
          onComplete(blob, duration)
        }

        recorder.start(1000)
        setIsRecording(true)
      } catch (err) {
        setError('마이크 권한이 필요합니다. 브라우저 설정에서 허용해주세요.')
      }
    }

    startRecording()

    return () => {
      cancelled = true
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
      }
    }
  }, [onComplete])

  if (error) {
    return (
      <div className="fade-in flex flex-col items-center justify-center min-h-[80vh] gap-4">
        <p className="text-red-400 text-center">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="tap-target px-4 py-2 bg-hynix-card rounded-lg text-sm"
        >
          새로고침
        </button>
      </div>
    )
  }

  return (
    <div className="fade-in flex flex-col items-center min-h-[80vh]">
      {mockProgress && (
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{mockProgress.current} / {mockProgress.total}</span>
            <span>답변 중</span>
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
      </div>

      <div className="text-center px-2 mb-6">
        <p className="text-lg leading-relaxed">{question.question}</p>
      </div>

      {isRecording && (
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-hynix-red rounded-full recording-pulse" />
          <span className="text-sm text-hynix-red font-medium">녹음 중</span>
        </div>
      )}

      <div className="mb-8">
        <CircleTimer
          durationSec={question.timeLimitSec}
          onComplete={handleTimerComplete}
        />
      </div>

      <button
        onClick={handleStopEarly}
        className="tap-target px-6 py-3 bg-hynix-red rounded-xl text-sm font-medium active:scale-[0.98] transition-transform"
      >
        답변 완료
      </button>

      <p className="text-xs text-gray-500 mt-3">30초 이상 답변해야 합니다</p>
    </div>
  )
}
