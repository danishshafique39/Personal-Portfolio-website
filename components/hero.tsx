'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MagneticButton from "@/components/magnetic-button"

export default function Hero() {
  const roles = ["Full-Stack Developer", "Mobile App Developer", "AI & Automation"]
  const [roleIndex, setRoleIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const titleText = "Hi, I'm Muhammad Danish Shafique"
  const titleWords = titleText.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden bg-transparent"
    >
      {/* 1. Aurora / Gradient mesh background */}
      <div className="absolute inset-0 -z-10 bg-transparent overflow-hidden">
        {/* Blob 1 - Emerald */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
        />
        {/* Blob 2 - Teal */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, -60, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"
        />
        {/* Blob 3 - Cyan */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 50, -30, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]"
        />

        {/* Faint dotted-grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="space-y-6 max-w-4xl mx-auto w-full flex flex-col items-center pt-20 pb-10 z-10">
        {/* 3. Circular avatar with glowing animated ring */}
        <div className="relative mb-6">
          {/* Animated gradient ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-[12px] opacity-75 animate-pulse" />
          <div className="absolute -inset-[3px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-full animate-[spin_10s_linear_infinite]" />
          
          <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-[4px] border-slate-950 bg-slate-900">
            <Image
              src="/danish-photo.jpeg"
              alt="Muhammad Danish Shafique"
              fill
              className="object-cover object-top scale-[1.05]"
              priority
            />
          </div>
        </div>

        {/* 2. Headline animates word-by-word */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl"
        >
          {titleWords.map((word, i) => (
            <motion.span 
              key={i} 
              variants={wordVariants}
              className={`inline-block mr-2 md:mr-3 ${
                word === "Danish" || word === "Shafique" || word === "Muhammad"
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* 4. Role line typing/cycling effect */}
        <div className="h-10 sm:h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent tracking-wide"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Computer Science graduate and freelance developer building modern, responsive,
          production-ready web and mobile applications — and increasingly, AI-powered ones.
        </motion.p>

        {/* Tagline text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase"
        >
          Full-Stack &amp; Mobile App Developer | AI-Powered Web &amp; Mobile Apps
        </motion.p>

        {/* 5. Buttons with magnetic / glow-on-hover interaction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-6 w-full px-4 sm:px-0"
        >
          <MagneticButton>
            <Button 
              asChild 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 w-full h-12 px-8"
            >
              <Link href="#projects">
                {/* Glow effect */}
                <span className="absolute inset-0 bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                View My Work
              </Link>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-800 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 w-full h-12 px-8"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* 6. Animated scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold animate-pulse">
          Scroll Down
        </span>
        <div className="w-[24px] h-[40px] rounded-full border-2 border-slate-700/80 flex justify-center p-1.5">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-2 bg-emerald-400 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
