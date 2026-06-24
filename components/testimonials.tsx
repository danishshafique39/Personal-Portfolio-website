'use client'

import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { useReducedMotion } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  platform: string
  rating: number
  review: string
  avatar: string | null
  project: string
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion()
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "mehararbab202",
      role: "United Arab Emirates",
      platform: "Fiverr",
      rating: 5,
      review:
        "Danish truly exceeded my expectations! His professionalism and attention to detail made the presentation visually stunning. His politeness and communication skills made the entire experience wonderful. Highly recommended!",
      avatar: null,
      project: "Presentation Design",
    },
    {
      id: 2,
      name: "emshahab202",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "nice work done",
      avatar: null,
      project: "General Work",
    },
    {
      id: 3,
      name: "diffgee2",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "very amazing guy and very nice",
      avatar: null,
      project: "Programming Projects & Assignments",
    },
    {
      id: 4,
      name: "diffgee2",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "amazing and fast with work",
      avatar: null,
      project: "Programming Projects & Assignments",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || shouldReduceMotion) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 4500)
    return () => clearInterval(interval)
  }, [emblaApi, shouldReduceMotion])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`} />
    ))
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200/30 dark:border-slate-800/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Section Header */}
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-sm">
            <Quote className="h-4 w-4" />
            Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Here's what my clients on Fiverr have to say about working with me. I'm proud to maintain a 5-star rating!
          </p>
        </Reveal>

        {/* Carousel Viewport Wrapper */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] h-full"
                >
                  <Card className="h-full border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between">
                    <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                      
                      <div className="space-y-4">
                        {/* Rating and stars */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {testimonial.project}
                          </span>
                          <div className="flex gap-0.5">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>

                        {/* Review text */}
                        <div className="relative">
                          <Quote className="absolute -top-3 -left-3 h-8 w-8 text-emerald-500/10 pointer-events-none" />
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic text-sm pl-4">
                            "{testimonial.review}"
                          </p>
                        </div>
                      </div>

                      {/* Author credentials */}
                      <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-slate-950 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {testimonial.role}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          {testimonial.platform}
                        </span>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 w-6" 
                  : "bg-slate-300 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Fiverr Badges / Bottom Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 max-w-md mx-auto p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
          <div className="flex gap-0.5 shrink-0">
            {renderStars(5)}
          </div>
          <div className="text-center sm:text-left">
            <div className="font-bold text-slate-950 dark:text-white text-sm">5.0 Rating on Fiverr</div>
            <div className="text-xs text-slate-500">Based on 50+ client contracts completed</div>
          </div>
          <Button asChild size="sm" className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shrink-0 ml-auto h-9">
            <Link href="https://www.fiverr.com/s/38q3wjL" target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Visit Gig
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
