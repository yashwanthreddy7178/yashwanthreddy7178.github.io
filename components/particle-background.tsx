"use client"

import { useCallback, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

interface ParticleBackgroundProps {
  intensity?: "high" | "medium" | "low"
}

export default function ParticleBackground({ intensity = "medium" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })

  const getParticleCount = useCallback(() => {
    switch (intensity) {
      case "high":
        return 100
      case "medium":
        return 70
      case "low":
        return 40
      default:
        return 70
    }
  }, [intensity])

  const initParticles = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particleCount = getParticleCount()
    const particles: Particle[] = []
    const isDark = theme === "dark"

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = (Math.random() - 0.5) * 0.5
      const speedY = (Math.random() - 0.5) * 0.5

      // Use theme-appropriate colors with opacity based on intensity
      const opacity = intensity === "high" ? 0.4 : intensity === "medium" ? 0.3 : 0.2
      const colors = isDark
        ? [`rgba(102, 178, 255, ${opacity})`, `rgba(76, 175, 80, ${opacity})`, `rgba(255, 193, 7, ${opacity})`]
        : [
            `rgba(26, 35, 126, ${opacity / 2})`,
            `rgba(76, 175, 80, ${opacity / 2})`,
            `rgba(255, 193, 7, ${opacity / 2})`,
          ]

      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.push({ x, y, size, speedX, speedY, color })
    }

    particlesRef.current = particles
  }, [theme, getParticleCount, intensity])

  const animate = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Boundary check
      if (particle.x > canvas.width) particle.x = 0
      else if (particle.x < 0) particle.x = canvas.width
      if (particle.y > canvas.height) particle.y = 0
      else if (particle.y < 0) particle.y = canvas.height

      // Mouse interaction
      const dx = particle.x - mouseRef.current.x
      const dy = particle.y - mouseRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < mouseRef.current.radius) {
        const angle = Math.atan2(dy, dx)
        const force = (mouseRef.current.radius - distance) / mouseRef.current.radius

        particle.x += Math.cos(angle) * force * 2
        particle.y += Math.sin(angle) * force * 2
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()
    })

    // Connect particles with lines
    connectParticles(ctx)

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [])

  const connectParticles = (ctx: CanvasRenderingContext2D) => {
    const maxDistance = intensity === "high" ? 100 : intensity === "medium" ? 80 : 60
    const particles = particlesRef.current
    const isDark = theme === "dark"

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          const lineOpacity =
            intensity === "high" ? opacity * 0.2 : intensity === "medium" ? opacity * 0.15 : opacity * 0.1
          ctx.beginPath()
          ctx.strokeStyle = isDark ? `rgba(102, 178, 255, ${lineOpacity})` : `rgba(26, 35, 126, ${lineOpacity})`
          ctx.lineWidth = 1
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  const handleResize = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    initParticles()
  }, [initParticles])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    initParticles()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [animate, handleResize, handleMouseMove, initParticles, theme])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}
