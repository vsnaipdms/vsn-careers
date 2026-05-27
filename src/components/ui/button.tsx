"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none"

    const variants = {
      primary: "bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98]",
      secondary: "bg-gradient-to-r from-secondary-500 to-primary-500 text-white hover:shadow-lg hover:shadow-secondary-500/25 hover:scale-[1.02] active:scale-[0.98]",
      outline: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:scale-[1.02] active:scale-[0.98]",
      ghost: "text-primary-600 hover:bg-primary-50 hover:scale-[1.02]",
      white: "bg-white text-primary-600 hover:shadow-lg hover:shadow-white/25 hover:scale-[1.02] active:scale-[0.98]"
    }

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-2.5 text-base gap-2",
      lg: "px-8 py-3.5 text-lg gap-2.5"
    }

    const Comp = motion.button

    return (
      <Comp
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"
export default Button
