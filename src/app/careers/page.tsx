"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { careers } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [search, setSearch] = useState("")

  const filtered = careers.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Section className="pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Career Paths"
            title="Explore 16+ High-Income Digital Careers"
            description="Each career path includes salary insights, learning roadmap, required skills, AI tools guidance, and job opportunities."
          />
          <div className="relative max-w-md mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search careers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((career, i) => (
              <Link key={career.id} href={`/careers/${career.slug}`}>
                <AnimatedCard delay={i * 0.05} glow className="h-full flex flex-col">
                  <CardIcon icon={career.icon} color={career.color} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">{career.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <Badge variant={career.demandLevel === "high" ? "success" : "info"}>
                      {career.demandLevel === "high" ? "High Demand" : "Rising"}
                    </Badge>
                    <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No careers found for &quot;{search}&quot;
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
