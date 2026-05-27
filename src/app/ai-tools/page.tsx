"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { aiTools } from "@/lib/data"
import { Search, ExternalLink, Star, Filter } from "lucide-react"

const categories = [
  { value: "all", label: "All Tools" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "video", label: "Video" },
  { value: "coding", label: "Coding" },
  { value: "automation", label: "Automation" },
  { value: "content", label: "Content" },
] as const

const categoryColors: Record<string, string> = {
  design: "#8b3dff",
  marketing: "#3b5cff",
  video: "#08b5d5",
  coding: "#5f7eff",
  automation: "#10A37F",
  content: "#E4405F",
}

export default function AIToolsPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = aiTools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Section className="pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="AI Tools Hub"
          title="Discover the Best AI Tools for Your Career"
          description="Curated directory of essential AI tools across design, marketing, video, coding, automation, and content creation."
        />

        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool, i) => (
            <AnimatedCard key={tool.id} delay={i * 0.05} glow>
              <div className="flex items-start justify-between mb-4">
                <CardIcon icon={tool.logo} color={categoryColors[tool.category]} />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">{tool.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{tool.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {tool.features.slice(0, 3).map((feat) => (
                  <span key={feat} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-600 rounded-md">{feat}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <Badge variant={tool.skillLevel === "beginner" ? "success" : tool.skillLevel === "intermediate" ? "warning" : "danger"}>
                  {tool.skillLevel}
                </Badge>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium hover:gap-2 transition-all"
                >
                  Visit <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="mt-2 text-xs text-gray-400">{tool.pricing}</div>
            </AnimatedCard>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">No AI tools found matching your search.</div>
        )}
      </div>
    </Section>
  )
}
