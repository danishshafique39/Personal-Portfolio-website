import React from "react"
import { Github, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 bg-slate-900 border-t border-slate-800 text-slate-400">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row justify-between items-center">
          <div>
            <p className="text-xs sm:text-sm text-center md:text-left">
              © 2026 Muhammad Danish Shafique. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <Link 
              href="https://github.com/danishshafique39" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-danish-shafique"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com/share/1EoTNvfhKp/?mibextid=qi2Omg"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
