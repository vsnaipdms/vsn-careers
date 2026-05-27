"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { testimonials } from "@/lib/data"
import { Star, Quote } from "lucide-react"
import { getInitials } from "@/lib/utils"

export default function Testimonials() {
  return (
    <Section className="bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Our Students Say"
          description="Hear from professionals who transformed their careers with VSN Careers."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedCard key={t.id} delay={i * 0.1} className="relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">
                  {getInitials(t.name)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} at {t.company}</div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
