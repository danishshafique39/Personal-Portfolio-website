"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Reveal, RevealItem } from "@/components/reveal"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formspreeEndpoint = "https://formspree.io/f/xblkrdyk"

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Your message has been sent successfully!" })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await response.json()
        setSubmitStatus({ success: false, message: data.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({ success: false, message: "An unexpected error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (submitStatus) {
      toast({
        title: submitStatus.success ? "Success!" : "Error!",
        description: submitStatus.message,
        variant: submitStatus.success ? "default" : "destructive",
      })
    }
  }, [submitStatus, toast])

  const inputClasses = "w-full border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 focus:bg-emerald-500/5 dark:focus:bg-emerald-500/5 focus:border-emerald-500/50 dark:focus:border-emerald-500/30 focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-500/10 transition-all duration-300 rounded-lg placeholder-slate-400"

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 border-t border-slate-200/30 dark:border-slate-800/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Section Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-sm">
            <Mail className="h-4 w-4" />
            Contact Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Do you want to connect to discuss potential opportunities or collaborations? Feel free to reach out!
          </p>
        </Reveal>

        <Reveal stagger={0.15} className="grid gap-8 md:gap-12 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          
          {/* Contact Information Card */}
          <RevealItem className="h-full">
            <div className="flex flex-col justify-between h-full p-6 sm:p-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-lg hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300">
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 p-3.5 rounded-xl flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Email</h3>
                    <a href="mailto:danishshafique39@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                      danishshafique39@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 p-3.5 rounded-xl flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Phone</h3>
                    <a href="tel:+923267455033" className="text-slate-600 dark:text-slate-400 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                      (+92) 326 7455033
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 p-3.5 rounded-xl flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 p-3.5 rounded-xl flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-danish-shafique" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 hover:underline transition-colors"
                    >
                      Muhammad Danish Shafique
                    </a>
                  </div>
                </div>
              </div>

              {/* Tagline footer indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 text-xs text-slate-400 dark:text-slate-500 font-semibold tracking-wide uppercase">
                Building AI-Powered solutions &amp; robust software
              </div>

            </div>
          </RevealItem>

          {/* Form Card */}
          <RevealItem className="h-full">
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col justify-between h-full p-6 sm:p-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-lg hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-1.5">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <Textarea
                  placeholder="Your message"
                  className={`${inputClasses} min-h-[140px]`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.01] transition-all duration-300 h-11"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="flex items-center justify-center gap-1.5">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </RevealItem>

        </Reveal>
      </div>
    </section>
  )
}
