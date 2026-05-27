"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
  grid?: boolean
}

export function Section({ children, className, id, dark, grid }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24",
        dark ? "bg-primary-950 text-white" : "bg-white",
        grid && "bg-grid",
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ label, title, description, center, light }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        center && "mx-auto text-center"
      )}
    >
      {label && (
        <span className={cn(
          "inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4",
          light ? "bg-white/10 text-white" : "bg-primary-50 text-primary-600"
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
        light ? "text-white" : "text-gray-900"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg md:text-xl leading-relaxed max-w-2xl",
          center && "mx-auto",
          light ? "text-white/70" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
