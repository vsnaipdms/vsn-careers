"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <Section className="pt-28 md:pt-36">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link href="/blog" className="text-primary-600 font-semibold">← Back to Blog</Link>
        </div>
      </Section>
    )
  }

  return (
    <Section className="pt-28 md:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary-100 via-secondary-100 to-tertiary-100 mb-8 flex items-center justify-center">
            <span className="text-6xl">📝</span>
          </div>
          <Badge variant="info" className="mb-3">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-gray-600 leading-relaxed">
              This is a comprehensive article about {post.title.toLowerCase()}. The full content with detailed insights, practical tips, and actionable strategies will be available soon. Stay tuned for updates!
            </p>
            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="font-bold text-gray-900 mb-2">💡 Key Takeaways</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Stay updated with the latest trends in {post.category.toLowerCase()}</li>
                <li>Apply practical strategies to advance your career</li>
                <li>Leverage AI tools to stay ahead of the competition</li>
                <li>Build skills that are in high demand in the digital economy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
