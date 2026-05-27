"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Button from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Career Insights & Updates
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 10,000+ subscribers. Get weekly career tips, AI tools updates, and exclusive opportunities.
          </p>
          {subscribed ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center gap-2 text-white text-lg font-semibold"
            >
              <CheckCircle className="w-6 h-6" />
              You&apos;re subscribed! Check your inbox.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
              />
              <Button type="submit" variant="white">
                Subscribe
                <Send className="w-4 h-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
