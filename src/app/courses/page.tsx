"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Clock, BookOpen, FolderKanban, Search, Filter } from "lucide-react"

const categories = ["all", "design", "development", "marketing", "ai", "content", "career"] as const

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [search, setSearch] = useState("")

  const filtered = courses.filter((c) => {
    const matchesCategory = activeCategory === "all" || c.category === activeCategory
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Section className="pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Courses"
          title="Structured Learning Modules"
          description="From beginner to advanced. Each module includes video lessons, assignments, projects, and certification."
        />

        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <AnimatedCard delay={i * 0.05} glow className="h-full flex flex-col">
                <CardIcon icon={course.icon} color={course.color} />
                <Badge variant="info" className="mb-2 w-fit">{course.category}</Badge>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{course.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.lessons} lessons</span>
                  <span className="flex items-center gap-1"><FolderKanban className="w-3.5 h-3.5" /> {course.projects} projects</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <Badge variant={course.level.includes("Beginner") ? "success" : "warning"}>
                    {course.level}
                  </Badge>
                  {course.certification && (
                    <span className="text-xs text-primary-600 font-medium">🎓 Certificate</span>
                  )}
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
