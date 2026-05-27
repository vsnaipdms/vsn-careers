"use client"

import { motion } from "framer-motion"
import Button from "@/components/ui/button"
import { ArrowRight, BarChart3, GraduationCap, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-tertiary-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm font-medium text-primary-700 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Career Guidance Platform
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gray-900">Master Digital Skills &</span>
              <br />
              <span className="text-gradient">Build High Income</span>
              <br />
              <span className="text-gradient">Careers with AI</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Learn Graphic Design, Web Design, Digital Marketing, Performance Marketing & AI Tools for Jobs, Freelancing & Business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/careers">
                <Button size="lg">
                  Explore Careers
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg">
                  <GraduationCap className="w-5 h-5" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/jobs">
                <Button variant="ghost" size="lg">
                  <BarChart3 className="w-5 h-5" />
                  Salary Insights
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              {[
                { value: "10,000+", label: "Students Guided" },
                { value: "50+", label: "Career Paths" },
                { value: "95%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 rounded-3xl opacity-5 blur-2xl" />
              <div className="relative w-full h-full rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">VS</div>
                  <div>
                    <div className="font-bold text-gray-900">VSN Careers</div>
                    <div className="text-sm text-gray-500">AI Career Platform</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "🎨", label: "Graphic Design", desc: "AI-Powered Design Skills" },
                    { icon: "📊", label: "Digital Marketing", desc: "Performance Marketing" },
                    { icon: "🤖", label: "AI Tools", desc: "ChatGPT, Midjourney & More" },
                    { icon: "💼", label: "Freelancing", desc: "Global Client Opportunities" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 p-3 rounded-xl bg-primary-50 border border-primary-100">
                  <div className="text-sm font-semibold text-primary-700">🎯 Career Tip</div>
                  <div className="text-xs text-primary-600">AI skills can increase your earning potential by 40-60%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
