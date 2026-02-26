'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [step, setStep] = useState(0)

  const lines = [
    { text: '// initializing portfolio...', color: '#A0B0C8' },
    { text: '// loading: ux_thinking.exe', color: '#A0B0C8' },
    { text: '// loading: ai_augmented_workflow.json', color: '#A0B0C8' },
    { text: '// loading: revision_tool_case_study.tsx', color: '#A0B0C8' },
    { text: '// revision_001: ready to ship ✓', color: '#22C55E' },
    { text: '>> this is not a portfolio. this is an argument.', color: '#E8632A' },
  ]

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 600 + i * 500))
    })

    timers.push(setTimeout(() => setFadeOut(true), 600 + lines.length * 500 + 800))
    timers.push(setTimeout(() => setVisible(false), 600 + lines.length * 500 + 1400))

    return () => timers.forEach(clearTimeout)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0D0D0D',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 600ms ease-out',
      }}
    >
      <div style={{ maxWidth: 480, width: '100%', padding: '0 32px' }}>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: i === lines.length - 1 ? 22 : 12,
              color: step > i ? line.color : '#2A2A2A',
              marginBottom: i === lines.length - 2 ? 24 : 10,
              transition: 'color 600ms ease-out, transform 400ms ease-out, opacity 400ms ease-out',
              opacity: step > i ? 1 : 0.3,
              transform: step > i ? 'translateY(0)' : 'translateY(6px)',
              fontWeight: i === lines.length - 1 ? 600 : 400,
              letterSpacing: i === lines.length - 1 ? '0.02em' : '0',
            }}
          >
            {line.text}
          </div>
        ))}

        {step >= lines.length && (
          <div
            style={{
              height: 1,
              backgroundColor: '#E8632A',
              marginTop: 8,
              transformOrigin: 'left',
              animation: 'expandLine 800ms ease-out forwards',
            }}
          />
        )}
      </div>

      <style>{`
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  )
}