"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

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

    // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
    // You can find this after creating a new form on formspree.io
    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_FORM_ID" // IMPORTANT: Replace this with your actual Formspree endpoint

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
        setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Do you want to connect me to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">danishshafique39@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400">(+92)3267455033</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Gujranwala, Pakistan</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your message"
                className="min-h-[150px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
