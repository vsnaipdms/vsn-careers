"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { freelancingTopics } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FreelancingPreview() {
  const topTopics = freelancingTopics.slice(0, 4)

  return (
    <Section grid>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Freelancing Hub"
          title="Start & Scale Your Freelancing Career"
          description="Complete guidance on building a successful freelancing business. From platform selection to client management."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTopics.map((topic, i) => (
            <AnimatedCard key={topic.id} delay={i * 0.1} glow>
              <CardIcon icon={topic.icon} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{topic.description}</p>
              <div className="text-sm font-semibold text-primary-600">{topic.income}</div>
            </AnimatedCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/freelancing"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            Explore Freelancing Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
