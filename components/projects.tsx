'use client'

import React, { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Code, ExternalLink, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Reveal, RevealItem } from "@/components/reveal"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  websiteUrl?: string
  category: string
  date: string
  featured?: boolean
}

function ProjectCard({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const shouldReduceMotion = useReducedMotion()

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const cardBody = (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? {} : {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col h-full ${
        isFeatured ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/15 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500 pointer-events-none" />

      {/* Image Block */}
      <div className={`relative overflow-hidden aspect-video ${isFeatured ? "md:w-1/2 md:aspect-auto" : "w-full"}`}>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill={isFeatured}
          width={isFeatured ? undefined : 600}
          height={isFeatured ? undefined : 400}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-500/20">
            <Link href={project.websiteUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
              {project.websiteUrl ? <ExternalLink className="mr-2 h-4 w-4" /> : <Github className="mr-2 h-4 w-4" />}
              {project.websiteUrl ? "View Website" : "View Code"}
            </Link>
          </Button>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1 shadow-sm">
            {isFeatured && <Award className="h-3 w-3 animate-pulse text-emerald-400" />}
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md text-slate-300 px-2.5 py-1 rounded-full text-xs border border-slate-800">
          <Calendar className="h-3 w-3 text-slate-400" />
          {project.date}
        </div>
      </div>

      {/* Details Block */}
      <div className={`flex flex-col flex-1 p-6 ${isFeatured ? "md:w-1/2 justify-between" : ""}`}>
        <div>
          <h3 className={`font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 ${isFeatured ? "text-xl sm:text-2xl mb-3" : "text-lg mb-2"}`}>
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-medium text-[11px]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-800 dark:border-slate-700 shadow-sm transition-all"
          >
            <Link href={project.websiteUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
              {project.websiteUrl ? <ExternalLink className="mr-2 h-4 w-4" /> : <Github className="mr-2 h-4 w-4" />}
              {project.websiteUrl ? "View Website" : "View Code"}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )

  return isFeatured ? cardBody : <RevealItem className="h-full">{cardBody}</RevealItem>
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 5,
      title: "SkillSphere – AI-Based Skill Development Platform",
      description:
        "Developed a comprehensive full-stack web application using React.js, Node.js, Express.js, and MySQL. The platform features virtual classrooms, virtual teaching assistants, skill development modules, and professional user profiles. Implemented secure JWT-based authentication and built RESTful APIs with complete frontend-backend integration. Deployed frontend on Vercel and backend on Railway for scalable, production-ready cloud environment.",
      image: "/skillsphere.png",
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "REST APIs", "Vercel", "Railway"],
      githubUrl: "https://github.com/skillspherefyp-ui/SkillSphere",
      websiteUrl: "https://skillsphere.com.pk",
      category: "Web Development",
      date: "2024",
      featured: true
    },
    {
      id: 0,
      title: "SupplyPulse — Multi-Agent AI Supply-Chain System (Node.js, MongoDB, React Native) — Google Antigravity Hackathon 2026 Regional Finalist",
      description:
        "Built a self-healing, multi-agent AI system that detects supply-chain disruptions in real time, resolves conflicting data, makes autonomous decisions, and recovers itself through a closed-loop pipeline. Selected for the Regional Finals of the Google Antigravity Hackathon 2026. Fully functional and deployed.",
      image: "/supplypulse.png",
      tags: ["Node.js", "MongoDB", "React Native", "Multi-Agent AI", "REST APIs", "Python", "Google AI SDK"],
      githubUrl: "https://github.com/danishshafique39",
      category: "Hackathon / AI / Full-Stack",
      date: "2026",
    },
    {
      id: 1,
      title: "Plant Disease Detection Using Leaf Images",
      description:
        "Developed a deep learning-based classification system to detect plant diseases from leaf images using a custom-trained Convolutional Network (CNN). Utilized the PlantVillage dataset consisting of over 50,000 labeled images across multiple crop types. Integrated the model with a Flask web application, enabling real-time predictions through an interactive web interface. Achieved over 90% training accuracy and successfully deployed the system locally for demonstration.",
      image: "/plant-disease-detection.png",
      tags: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV", "Matplotlib"],
      githubUrl: "https://github.com/danishshafique39/Plant-Disease-Detection-Using-Leaf-Images",
      category: "Machine Learning",
      date: "2025",
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "Designed and implemented a Hospital Management System as a desktop application to manage patient records, appointments, doctor information, and billing. The system streamlines hospital operations by providing modules for patient registration, doctor assignment, appointment scheduling, and payment processing. Developed using Object-Oriented Programming (OOP) principles and a relational database for secure data storage and retrieval.",
      image: "/hospital-management-system.png",
      tags: ["C++", "MySQL", "OOP", "Database Management", "SQL Queries"],
      githubUrl: "https://github.com/danishshafique39/HMS-project",
      category: "Desktop Application",
      date: "2023",
    },
    {
      id: 3,
      title: "Dictionary Application (Data Structures Project)",
      description:
        "Developed a console-based Dictionary Application that allows users to add, search, update, and delete words along with their meanings. Implemented using efficient data structures such as hash tables and binary search trees to optimize search and retrieval time. The project reinforced concepts of data organization, searching algorithms, and file handling in C++.",
      image: "/dictionary-application.png",
      tags: ["C++", "Hash Tables", "Binary Search Tree (BST)", "File Handling", "OOP"],
      githubUrl: "https://github.com/danishshafique39/Dictionary-Project",
      category: "Data Structures",
      date: "2024",
    },
    {
      id: 4,
      title: "Portfolio Website (React.js Project)",
      description:
        "Developed a fully responsive personal portfolio website to showcase projects, skills, and contact information. Built using React.js with a component-based structure for maintainability and reusability. The project features smooth animations, clean UI/UX, and mobile-friendly design, ideal for professional presentation and online presence.",
      image: "/portfolio-website.png",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Web Design"],
      githubUrl: "https://github.com/danishshafique39/Personal-Portfolio-website",
      category: "Web Development",
      date: "2025",
    },
    {
      id: 6,
      title: "Library Management System",
      description:
        "Developed an efficient library management system using C++ with emphasis on data structure implementation and OOP principles. The system utilizes advanced data structures for optimal record management and quick information retrieval. Implemented features for book cataloging, member management, and circulation tracking, demonstrating proficiency in algorithmic problem-solving and software design.",
      image: "/library-management.png",
      tags: ["C++", "Data Structures", "OOP", "File Handling", "Algorithms"],
      githubUrl: "https://github.com/danishshafique39/Library-Management-System",
      category: "Data Structures",
      date: "2023",
    },
  ]

  const featuredProject = projects.find(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 border-t border-slate-200/30 dark:border-slate-800/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-sm">
            <Code className="h-4 w-4" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent software projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </Reveal>

        {/* Featured Project Row */}
        {featuredProject && (
          <Reveal className="mb-8 md:mb-12">
            <ProjectCard project={featuredProject} isFeatured={true} />
          </Reveal>
        )}

        {/* Grid of Regular Projects */}
        <Reveal stagger={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
