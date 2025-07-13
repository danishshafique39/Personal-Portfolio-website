import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>
      <div className="space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Hi, I'm <span className="text-emerald-500">Muhammad Danish</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300">Machine Learning Enthusiast</p>
        <p className="text-slate-400 max-w-xl mx-auto">
          A passionate Computer Science student ,freelancer and a web developer focused on building modern, responsive websites.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
