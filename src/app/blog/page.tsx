"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/data"
import Link from "next/link"
import { Calendar, Clock, Search } from "lucide-react"

const categories = ["All", "AI Careers", "Digital Marketing", "Freelancing", "AI Tools", "Passive Income", "Design", "Career Guidance", "Performance Marketing"]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Section className="pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Blog"
          title="Career Insights & Expert Advice"
          description="Stay ahead with the latest articles on AI careers, digital marketing, freelancing, and professional growth."
        />

        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <AnimatedCard delay={i * 0.05} className="h-full flex flex-col">
                <div className="w-full h-44 rounded-xl bg-gradient-to-br from-primary-100 via-secondary-100 to-tertiary-100 mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl">📝</span>
                </div>
                <Badge variant="info" className="mb-2 w-fit">{post.category}</Badge>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded">{tag}</span>
                  ))}
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No articles found matching your search.
          </div>
        )}
      </div>
    </Section>
  )
}
