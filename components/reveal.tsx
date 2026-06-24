'use client'

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  stagger?: number
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 30,
  stagger = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth cubic-bezier
        staggerChildren: stagger,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className = "",
  y = 20,
}: {
  children: React.ReactNode
  className?: string
  y?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}
