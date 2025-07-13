import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "mehararbab202",
      role: "United Arab Emirates",
      platform: "Fiverr",
      rating: 5,
      review:
        "Danish truly exceeded my expectations! His professionalism and attention to detail made the presentation visually stunning. His politeness and communication skills made the entire experience wonderful. Highly recommended!",
      avatar: null, // Removed image section for this review
      project: "Presentation Design",
    },
    {
      id: 2,
      name: "emshahab202",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "nice work done",
      avatar: null, // Removed image section for this review
      project: "General Work",
    },
    {
      id: 3,
      name: "diffgee2",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "very amazing guy and very nice",
      avatar: null, // Removed image section for this review
      project: "Programming Projects & Assignments",
    },
    {
      id: 4,
      name: "diffgee2",
      role: "United States",
      platform: "Fiverr",
      rating: 5,
      review: "amazing and fast with work",
      avatar: null, // Removed image section for this review
      project: "Programming Projects & Assignments",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="h-4 w-4" />
            Client Reviews
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Here's what my clients on Fiverr have to say about working with me. I'm proud to maintain a 5-star rating!
          </p>
          <div className="mt-8">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Link href="https://www.fiverr.com/s/38q3wjL" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View My Fiverr Gig
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.avatar && ( // Conditionally render avatar section
                    <div className="relative">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover ring-2 ring-emerald-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                        {testimonial.platform}
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full inline-block">
                      <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-emerald-200 dark:text-emerald-800" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-6 italic">
                    "{testimonial.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <div className="text-left">
              <div className="font-bold text-slate-900 dark:text-white">5.0 Rating</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Based on 50+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
