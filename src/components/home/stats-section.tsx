"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const stats = [
  { value: 16, suffix: "+", label: "Career Paths", prefix: "" },
  { value: 18, suffix: "+", label: "Expert Courses", prefix: "" },
  { value: 12, suffix: "+", label: "AI Tools Covered", prefix: "" },
  { value: 10000, suffix: "+", label: "Students Guided", prefix: "" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
