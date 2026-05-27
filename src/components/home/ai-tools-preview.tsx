"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { aiTools } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const categoryColors: Record<string, string> = {
  design: "#8b3dff",
  marketing: "#3b5cff",
  video: "#08b5d5",
  coding: "#5f7eff",
  automation: "#10A37F",
  content: "#E4405F",
}

export default function AIToolsPreview() {
  const topTools = aiTools.slice(0, 6)

  return (
    <Section grid>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="AI Tools Hub"
          title="Essential AI Tools for Career Growth"
          description="Discover the most powerful AI tools that can supercharge your productivity, creativity, and career prospects."
        />
        <div className="grid md:maps-cols-2 lg:grid-cols-3 gap-6">
          {topTools.map((tool, i) => (
            <Link key={tool.id} href={`/ai-tools#${tool.slug}`}>
              <AnimatedCard delay={i * 0.1} glow>
                <div className="flex items-start justify-between mb-4">
                  <CardIcon icon={tool.logo} color={categoryColors[tool.category]} />
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{tool.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="info">{tool.skillLevel}</Badge>
                  <span className="text-xs text-gray-400">{tool.pricing}</span>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            Explore All AI Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
