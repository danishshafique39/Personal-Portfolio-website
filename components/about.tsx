'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal, RevealItem } from "@/components/reveal"
import { Award, Code, BookOpen } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/30 dark:border-slate-800/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <Reveal stagger={0.15} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Side: Avatar / Photo with Glowing accents */}
          <RevealItem className="w-full md:w-1/2 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 p-3 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Blur gradient under picture */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image
                  src="/danish-photo.jpeg"
                  alt="Muhammad Danish Shafique"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </RevealItem>

          {/* Right Side: Text Information */}
          <RevealItem className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I’m a <strong className="text-emerald-500 font-semibold">Computer Science graduate</strong> from Capital University of Science and Technology (CUST), Islamabad, with a CGPA of <strong className="text-emerald-500 font-semibold">3.72</strong>. I’m deeply passionate about full-stack web and mobile app development, modern cloud architectures, and practical applications of artificial intelligence.
              </p>
              <p>
                Having completed <strong className="text-teal-500 font-semibold">20+ freelance projects</strong> on Fiverr with consistent 5-star feedback, I specialize in building end-to-end applications using <strong className="text-teal-500 font-semibold">React, React Native, Node.js, Express, MongoDB, and SQL</strong>. I handle everything from secure JWT-based authentication to fully integrated RESTful APIs and cloud deployments on Vercel and Railway.
              </p>
              <p>
                Recently, my team's project <strong className="text-cyan-500 font-semibold">SupplyPulse</strong> — a self-healing, multi-agent AI supply-chain platform — stood out as a <strong className="text-cyan-500 font-semibold">Regional Finalist in the Google Antigravity Hackathon 2026</strong>. I thrive on combining smart AI pipelines with refined, responsive user experiences.
              </p>
            </div>

            {/* Quick stats / items */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm">
                <Code className="h-5 w-5 text-emerald-500 mb-2" />
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">20+</div>
                <div className="text-[11px] text-slate-500">Completed Projects</div>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm">
                <Award className="h-5 w-5 text-teal-500 mb-2" />
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Finalist</div>
                <div className="text-[11px] text-slate-500">Google Hackathon</div>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm">
                <BookOpen className="h-5 w-5 text-cyan-500 mb-2" />
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">3.72</div>
                <div className="text-[11px] text-slate-500">Academic CGPA</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 w-full sm:w-auto h-11 px-6">
                <Link
                  href="https://drive.google.com/file/d/1CvGTXUqpQ9nb_1eyfmZ1sAqt-tR2zeJE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
