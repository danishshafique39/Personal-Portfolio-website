import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl">
              <Image src="/danish-photo.jpeg" alt="Muhammad Danish" width={500} height={500} className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400">
              I'm a Computer Science student at Capital University of Sciences and Technology (CUST), Islamabad. I have
              a passion for programming and modern web development, with experience in HTML, CSS, JavaScript, and
              frameworks like React. I'm also skilled in C++ and Python, which has helped me build strong
              problem-solving and software development foundations.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              I’ve worked on practical projects like a Plant Disease Detection System using deep learning and Flask, and
              a Hospital Management System built with database design and OOP concepts. I'm currently diving deeper into
              AI and machine learning to create intelligent, real-world applications. My interest lies in combining
              smart algorithms with clean UI to deliver meaningful user experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Outside of coding, I enjoy exploring new technologies and continuously improving my freelancing skills. I
              believe in consistency, lifelong learning, and using tech to solve real-life problems. My goal is to build
              a career where innovation, learning, and impact come together.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Link
                  href="https://drive.google.com/file/d/1IYhcwhTkoQZ7XU3CY3jKBEcPNnJ2OPzk/view?usp=drivesdk"
                  download
                >
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
