"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  glow?: boolean
  onClick?: () => void
}

export function AnimatedCard({ children, className, delay = 0, glow, onClick }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn(
        "group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-100",
        glow && "hover:shadow-primary-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardIcon({ icon, color }: { icon: string; color?: string }) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
      style={{ background: color ? `${color}15` : "#f0f4ff" }}
    >
      {icon}
    </div>
  )
}
