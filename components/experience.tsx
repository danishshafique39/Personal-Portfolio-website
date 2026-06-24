'use client'

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react"
import { Reveal, RevealItem } from "@/components/reveal"

interface TimelineItem {
  id: number
  type: "work" | "education"
  title: string
  subtitle: string
  period: string
  location?: string
  description: string
  highlights: string[]
  cgpa?: string
}

export default function Experience() {
  const shouldReduceMotion = useReducedMotion()

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: "work",
      title: "Android Developer Intern",
      subtitle: "Quix Technologies Pvt Ltd",
      period: "August 2025 – September 2025",
      location: "Rawalpindi, Pakistan",
      description:
        "Completed a 7-week on-site internship in Android Development gaining hands-on experience building modern Android applications using Kotlin. Worked in a professional office environment, developed real-world app features, and collaborated with the dev team to strengthen technical delivery.",
      highlights: ["Kotlin & Android Studio", "Firebase Auth", "UI/UX & Forms", "Team Collaboration"],
    },
    {
      id: 2,
      type: "work",
      title: "Freelance Software Developer",
      subtitle: "Fiverr Platform",
      period: "Ongoing",
      description:
        "Completed 20+ freelance contracts with consistent 5-star ratings across web development, programming assignments, and custom AI/ML integrations. Handled clients globally, delivered quality code, and managed project timelines.",
      highlights: ["20+ Completed Gigs", "5-Star Client Rating", "Full-Stack & Scripts", "Client Management"],
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Computer Science (BCS)",
      subtitle: "Capital University of Sciences and Technology (CUST)",
      period: "September 2022 – 2026",
      location: "Islamabad, Pakistan",
      description:
        "Passionate study of core computer science curricula including data structures, object-oriented design, databases, system architecture, and machine learning. Maintained deep academic focus.",
      cgpa: "3.72 / 4.0",
      highlights: ["Dean's Honor Roll", "IEEE & ASCE Member", "Final Year FYP: SkillSphere"],
    },
    {
      id: 4,
      type: "education",
      title: "Front-End Development Certification",
      subtitle: "Pakistan Freelancing Training Program (PFTP)",
      period: "October 2023",
      description: "Advanced certification covering modern front-end architectures, responsive web design principles, and reactive JavaScript frameworks.",
      highlights: ["Advanced Web Design", "React & ES6 Modules", "Responsive Frameworks"],
    },
    {
      id: 5,
      type: "work",
      title: "Administrative Assistant Intern",
      subtitle: "Alkhidmat Foundation",
      period: "2023",
      description: "Handled data entry, document tracking, and digital records using MS Excel. Maintained report documentation with precise detail.",
      highlights: ["Data Entry & Excel", "Document Indexing", "Report Generation"],
    },
  ]

  const availability = [
    { label: "Part-Time Roles", available: true },
    { label: "Full-Time Roles", available: true },
    { label: "Night Shifts", available: true },
    { label: "Remote Work", available: true },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 border-t border-slate-200/30 dark:border-slate-800/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A chronological timeline of my work experience, education, and notable achievements.
          </p>
        </Reveal>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mb-20">
          
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 opacity-30 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={item.id} className="relative pl-9 md:pl-0">
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-emerald-500 bg-slate-50 dark:bg-slate-950 flex items-center justify-center z-10 shadow-md">
                    {item.type === "work" ? (
                      <Briefcase className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-teal-500" />
                    )}
                  </div>

                  <div className={`md:grid md:grid-cols-2 md:gap-12 items-start`}>
                    
                    {/* Card Column */}
                    <div className={`${isEven ? "md:col-start-1" : "md:col-start-2"} md:text-left`}>
                      <Reveal y={20} className="h-full">
                        <Card className="border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-md hover:shadow-lg">
                          <CardHeader className="pb-3">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <div>
                                <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                                  {item.title}
                                </CardTitle>
                                <CardDescription className="text-emerald-500 dark:text-emerald-400 font-semibold text-sm">
                                  {item.subtitle}
                                </CardDescription>
                              </div>
                              <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 w-fit h-fit">
                                {item.period}
                              </span>
                            </div>
                            
                            {item.location && (
                              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs mt-2">
                                <MapPin className="h-3 w-3" />
                                {item.location}
                              </div>
                            )}
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {item.description}
                            </p>

                            {item.cgpa && (
                              <div className="px-3 py-2 rounded-lg bg-teal-500/5 border border-teal-500/10 text-xs font-semibold text-teal-600 dark:text-teal-400 w-fit">
                                Academic CGPA: {item.cgpa}
                              </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {item.highlights.map((highlight, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-800/30 text-[10px]"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </Reveal>
                    </div>

                    {/* Empty Space Column for Desktop */}
                    <div className="hidden md:block" />

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Availability Block */}
        <Reveal className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-center text-slate-900 dark:text-white">
            Current Availability
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {availability.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
