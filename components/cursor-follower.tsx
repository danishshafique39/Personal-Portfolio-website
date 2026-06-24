'use client'

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth spring physics for outer glow circle
  const springConfig = { stiffness: 220, damping: 26, mass: 0.2 }
  const glowX = useSpring(cursorX, springConfig)
  const glowY = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)

    if (shouldReduceMotion) return

    // Hide if mobile / pointer is touch-based
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [shouldReduceMotion])

  if (!mounted || shouldReduceMotion) return null

  // Ensure SSR safety and pointer checks
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      {/* Outer Spring Glow Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-500/5 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
      {/* Inner Dot Follower */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  )
}
