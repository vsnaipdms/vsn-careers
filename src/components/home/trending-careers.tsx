"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { careers } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TrendingCareers() {
  const topCareers = careers.slice(0, 8)

  return (
    <Section id="careers" grid>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trending Careers"
          title="Explore High-Income Digital Career Paths"
          description="Discover the most promising career opportunities in the digital and AI space. Each path includes salary insights, learning roadmap, and AI tools guidance."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCareers.map((career, i) => (
            <Link key={career.id} href={`/careers/${career.slug}`}>
              <AnimatedCard delay={i * 0.1} glow className="h-full flex flex-col">
                <CardIcon icon={career.icon} color={career.color} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{career.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <Badge variant={career.demandLevel === "high" ? "success" : "info"}>
                    {career.demandLevel === "high" ? "High Demand" : "Rising"}
                  </Badge>
                  <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View All Career Paths <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
