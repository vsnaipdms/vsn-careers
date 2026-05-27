"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 4)

  return (
    <Section grid>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Blog"
          title="Latest Insights & Career Advice"
          description="Stay updated with the latest trends in AI careers, digital marketing, freelancing, and more."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <AnimatedCard delay={i * 0.1} className="h-full flex flex-col">
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary-100 via-secondary-100 to-tertiary-100 mb-4 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <Badge variant="info" className="mb-2 w-fit">{post.category}</Badge>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
