export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["English", "Urdu", "Punjabi"],
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      skillBg: "bg-blue-100 text-blue-800",
      titleColor: "text-white",
    },
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "HTML", "CSS", "JavaScript", "MATLAB"],
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      skillBg: "bg-emerald-100 text-emerald-800",
      titleColor: "text-white",
    },
    {
      title: "Technologies/Frameworks",
      skills: ["Git", "GitHub", "Ubuntu", "TensorFlow", "Scikit-Learn"],
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      skillBg: "bg-purple-100 text-purple-800",
      titleColor: "text-white",
    },
    {
      title: "Technical Skills",
      skills: [
        "Data Structures and Algorithms",
        "Data Base",
        "Data Science",
        "Data Handling & Analysis",
        "Cyber Security",
      ],
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      skillBg: "bg-orange-100 text-orange-800",
      titleColor: "text-white",
    },
    {
      title: "Soft Skills",
      skills: [
        "Time Management and Organization",
        "Adaptability",
        "Problem Solving",
        "Fluent in technical and non-technical discussions",
      ],
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      skillBg: "bg-pink-100 text-pink-800",
      titleColor: "text-white",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of languages, technologies and tools throughout my journey. Here's a snapshot of
            my skill expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${category.titleColor}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 ${category.skillBg} rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
