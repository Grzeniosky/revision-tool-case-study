'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

interface LightboxProps {
  images: { src: string; alt: string; label: string }[]
}

export default function Lightbox({ images }: LightboxProps) {
  const [active, setActive] = useState<number | null>(null)

  const overlay = active !== null ? createPortal(
    <div
      onClick={() => setActive(null)}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.92)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <button
        onClick={() => setActive(null)}
        style={{
          position: 'absolute',
          top: 20,
          right: 24,
          background: 'none',
          border: 'none',
          color: '#A0B0C8',
          fontSize: 28,
          cursor: 'pointer',
          lineHeight: 1,
          fontFamily: 'var(--font-mono)',
        }}
      >
        ×
      </button>
      <img
        src={images[active].src}
        alt={images[active].alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          objectFit: 'contain',
          border: '1px solid #2A3A5A',
        }}
      />
      <p style={{
        position: 'absolute',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: '#A0B0C8',
        whiteSpace: 'nowrap',
      }}>
        {images[active].label}
      </p>
    </div>,
    document.body
  ) : null

  return (
    <>
      <div style={{ position: 'relative', height: 280 }}>
        {images.map((img, i) => (
          <div
            key={img.src}
            onClick={() => setActive(i)}
            style={{
              position: 'absolute',
              cursor: 'pointer',
              transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              ...(i === 0
                ? { top: 0, left: 0, width: '72%', zIndex: 1, transform: 'rotate(-1.5deg)' }
                : { bottom: 0, right: 0, width: '72%', zIndex: 2, transform: 'rotate(1deg)' }
              ),
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'rotate(0deg) scale(1.02)'
              el.style.zIndex = '3'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = i === 0 ? 'rotate(-1.5deg)' : 'rotate(1deg)'
              el.style.zIndex = i === 0 ? '1' : '2'
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                maxHeight: 220,
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '6px 8px',
              backgroundColor: 'rgba(13,13,13,0.7)',
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: '#A0B0C8',
            }}>
              {img.label} · click to expand
            </div>
          </div>
        ))}
      </div>
      {overlay}
    </>
  )
}