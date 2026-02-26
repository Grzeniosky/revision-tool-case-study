'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    let currentY = 0
    let targetY = 0

    const SPACING = 40
    const BASE_OPACITY = 0.12
    const GLOW_OPACITY = 0.5
    const PARALLAX = 0.4

    let stars: {
      x: number
      y: number
      currentOpacity: number
      glowing: boolean
      glowProgress: number
      glowSpeed: number
    }[] = []

    const buildGrid = () => {
      stars = []
      const cols = Math.ceil(window.innerWidth / SPACING) + 1
      const rows = Math.ceil(window.innerHeight / SPACING) + 4

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          stars.push({
            x: col * SPACING,
            y: row * SPACING,
            currentOpacity: BASE_OPACITY,
            glowing: false,
            glowProgress: 0,
            glowSpeed: Math.random() * 0.008 + 0.004,
          })
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buildGrid()
    }
    resize()
    window.addEventListener('resize', resize)

    const handleScroll = () => {
      targetY = window.scrollY * PARALLAX
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const triggerGlow = () => {
      const idle = stars.filter((s) => !s.glowing)
      if (idle.length === 0) return
      const star = idle[Math.floor(Math.random() * idle.length)]
      star.glowing = true
      star.glowProgress = 0
    }
    const glowInterval = setInterval(triggerGlow, 600)

    const draw = () => {
      currentY += (targetY - currentY) * 0.06

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // offset wraps within one SPACING unit so grid tiles seamlessly
      const offsetY = currentY % SPACING

      stars.forEach((star) => {
        if (star.glowing) {
          star.glowProgress += star.glowSpeed
          const t = Math.sin(star.glowProgress * Math.PI)
          star.currentOpacity = BASE_OPACITY + t * (GLOW_OPACITY - BASE_OPACITY)
          if (star.glowProgress >= 1) {
            star.glowing = false
            star.currentOpacity = BASE_OPACITY
          }
        }

        const drawY = (star.y - offsetY + canvas.height) % canvas.height

        ctx.beginPath()
        ctx.arc(star.x, drawY, star.glowing ? 1.8 : 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(27, 43, 75, ${star.currentOpacity})`
        ctx.fill()
      })

      animFrame = requestAnimationFrame(draw)
    }

    animFrame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrame)
      clearInterval(glowInterval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}