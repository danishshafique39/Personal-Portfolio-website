'use client'

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Reveal, RevealItem } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  title: string
  skills: string[]
  glowColor: string // CSS glow shadow
  iconBg: string
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["C++", "JavaScript", "PHP", "Python"],
      glowColor: "group-hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Web Technologies & Frameworks",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "REST APIs", "Node.js", "Express.js"],
      glowColor: "group-hover:shadow-teal-500/10",
      iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20"
    },
    {
      title: "Mobile App Development",
      skills: ["Kotlin", "Android Development", "React Native", "Firebase", "Cross-Platform Development"],
      glowColor: "group-hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "Database Design", "CRUD Operations"],
      glowColor: "group-hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "AI/ML Concepts",
      skills: ["Machine Learning", "Multi-Agent AI", "Data Preprocessing", "Supervised Learning", "TensorFlow", "Scikit-Learn"],
      glowColor: "group-hover:shadow-teal-500/10",
      iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20"
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Data Structures", "System Design", "Algorithms"],
      glowColor: "group-hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "MS Office", "JWT Authentication", "Vercel", "Railway", "MATLAB"],
      glowColor: "group-hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Strong Communication Skills",
        "Time Management and Organization",
        "Adaptability",
        "Client Relationship Management",
        "Fluent in Technical & Non-Technical Discussions",
      ],
      glowColor: "group-hover:shadow-teal-500/10",
      iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20"
    },
    {
      title: "Spoken Languages",
      skills: ["English", "Urdu", "Punjabi"],
      glowColor: "group-hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200/30 dark:border-slate-800/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <Reveal className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I've worked with a variety of languages, technologies and tools throughout my engineering journey. Here's a snapshot of my skill expertise.
          </p>
        </Reveal>

        <Reveal stagger={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <RevealItem key={category.title} className="h-full">
              <div
                className={`group h-full p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-emerald-500/30 ${category.glowColor}`}
              >
                {/* Header with Title and Glow Icon */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 group-hover:animate-ping`} />
                </div>

                {/* Badges container */}
                <motion.div 
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={badgeVariants}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-white/80 hover:bg-emerald-500/10 dark:bg-slate-900/60 dark:hover:bg-emerald-500/10 text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 text-xs font-semibold cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
