import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plant Disease Detection Using Leaf Images",
      description:
        "Developed a deep learning-based classification system to detect plant diseases from leaf images using a custom-trained Convolutional Neural Network (CNN). Utilized the PlantVillage dataset consisting of over 50,000 labeled images across multiple crop types. Integrated the model with a Flask web application, enabling real-time predictions through an interactive web interface. Achieved over 90% training accuracy and successfully deployed the system locally for demonstration.",
      image: "/plant-disease-detection.png",
      tags: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV", "Matplotlib"],
      githubUrl: "#",
      category: "Machine Learning",
      date: "2024",
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "Designed and implemented a Hospital Management System as a desktop application to manage patient records, appointments, doctor information, and billing. The system streamlines hospital operations by providing modules for patient registration, doctor assignment, appointment scheduling, and payment processing. Developed using Object-Oriented Programming (OOP) principles and a relational database for secure data storage and retrieval.",
      image: "/hospital-management-system.png",
      tags: ["C++", "MySQL", "OOP", "Database Management", "SQL Queries"],
      githubUrl: "https://github.com/danishshafique39/HMS-project", // Assuming this is the correct repo for now
      category: "Web Application",
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
      date: "2023",
    }
  ]

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Python: "bg-blue-100 text-blue-800 border-blue-200",
      TensorFlow: "bg-orange-100 text-orange-800 border-orange-200",
      CNN: "bg-purple-100 text-purple-800 border-purple-200",
      Flask: "bg-indigo-100 text-indigo-800 border-indigo-200",
      OpenCV: "bg-green-100 text-green-800 border-green-200",
      Matplotlib: "bg-red-100 text-red-800 border-red-200",
      "C++": "bg-blue-100 text-blue-800 border-blue-200",
      MySQL: "bg-orange-100 text-orange-800 border-orange-200",
      OOP: "bg-purple-100 text-purple-800 border-purple-200",
      "Database Management": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "SQL Queries": "bg-green-100 text-green-800 border-green-200",
      "Hash Tables": "bg-pink-100 text-pink-800 border-pink-200",
      "Binary Search Tree (BST)": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "File Handling": "bg-teal-100 text-teal-800 border-teal-200",
    }
    return colors[tag] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Machine Learning": "bg-gradient-to-r from-purple-500 to-pink-500",
      "Web Development": "bg-gradient-to-r from-blue-500 to-cyan-500",
      "Desktop Application": "bg-gradient-to-r from-red-500 to-orange-500",
      "Data Structures": "bg-gradient-to-r from-green-500 to-lime-500", // New color for Data Structures
      "Data Science": "bg-gradient-to-r from-green-500 to-emerald-500",
    }
    return colors[category] || "bg-gradient-to-r from-gray-500 to-slate-500"
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            Portfolio
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-slate-600 px-2 py-1 rounded-full text-xs">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`${getTagColor(tag)} border font-medium hover:scale-105 transition-transform`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-md hover:shadow-lg transition-all"
                >
                  <Link href={project.githubUrl}>
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
